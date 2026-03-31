import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  DO $$ BEGIN
    CREATE TYPE "public"."enum_job_applications_email_status" AS ENUM('pending', 'sent', 'failed');
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE TABLE IF NOT EXISTS "job_applications" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"full_name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"position" varchar NOT NULL,
  	"resume_id" integer NOT NULL,
  	"cover_note" varchar NOT NULL,
  	"email_status" "enum_job_applications_email_status" DEFAULT 'pending',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "job_applications_id" integer;
  EXCEPTION
    WHEN duplicate_column THEN null;
  END $$;

  DO $$ BEGIN
    ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_resume_id_media_id_fk" FOREIGN KEY ("resume_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "job_applications_resume_idx" ON "job_applications" USING btree ("resume_id");
  CREATE INDEX IF NOT EXISTS "job_applications_updated_at_idx" ON "job_applications" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "job_applications_created_at_idx" ON "job_applications" USING btree ("created_at");

  DO $$ BEGIN
    ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_job_applications_fk" FOREIGN KEY ("job_applications_id") REFERENCES "public"."job_applications"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_job_applications_id_idx" ON "payload_locked_documents_rels" USING btree ("job_applications_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "job_applications" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "job_applications" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_job_applications_fk";
  
  DROP INDEX "payload_locked_documents_rels_job_applications_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "job_applications_id";
  DROP TYPE "public"."enum_job_applications_email_status";`)
}
