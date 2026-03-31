'use client'

import { CtaButton, FloatingField } from "@/components/ui"
import { Button, Input, Textarea } from "@/components/ui"
import { ArrowUpIcon } from "@heroicons/react/24/outline"
import { useRef } from "react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui"
import type { ApplyModalFormProps } from "@/types/careers"
import { cn } from "@/utils/common"

export function ApplyModalForm({
  form,
  onSubmit,
  onCancel,
  isSpecific,
  showCancel = true,
  isSubmitting = false,
}: ApplyModalFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FloatingField id="fullName" label="Full Name">
                  <FormControl>
                    <Input
                      {...field}
                      id="fullName"
                      placeholder=" "
                      variant="minimal"
                      disabled={isSubmitting}
                      className="peer text-sm text-foreground/90"
                    />
                  </FormControl>
                </FloatingField>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FloatingField id="email" label="Email">
                  <FormControl>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder=" "
                      variant="minimal"
                      disabled={isSubmitting}
                      className="peer text-sm text-foreground/90"
                    />
                  </FormControl>
                </FloatingField>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1">
                  RESUME / CV <span className="text-primary/70 font-bold">*</span>
                </FormLabel>
                <FormControl>
                  <div 
                    onClick={() => !isSubmitting && fileInputRef.current?.click()}
                    onDragOver={(e) => {
                      if (isSubmitting) return
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    onDrop={(e) => {
                      if (isSubmitting) return
                      e.preventDefault()
                      e.stopPropagation()
                      const file = e.dataTransfer.files?.[0]
                      if (file) {
                        field.onChange(file)
                      }
                    }}
                    className={cn(
                        "group relative cursor-pointer rounded-xl border-2 border-dashed border-border/40 bg-card/40 p-8 transition-all",
                        !isSubmitting && "hover:border-primary/40 hover:bg-card/60",
                        isSubmitting && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      disabled={isSubmitting}
                      onChange={(event) => {
                        const file = event.target.files?.[0]
                        field.onChange(file)
                      }}
                    />
                    
                    <div className="flex flex-col items-center justify-center space-y-3 text-center">
                      <div className="rounded-full bg-background/80 p-2 shadow-sm transition-transform group-hover:-translate-y-1">
                        <ArrowUpIcon className="h-5 w-5 text-foreground" />
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">
                          {field.value ? (field.value as File).name : "Drop your resume or click to browse"}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground/80">
                          PDF, DOC, DOCX · Max 10 MB
                        </p>
                      </div>
                    </div>
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FloatingField id="phone" label="Phone (optional)">
                  <FormControl>
                    <Input
                      {...field}
                      id="phone"
                      placeholder=" "
                      variant="minimal"
                      disabled={isSubmitting}
                      className="peer text-sm text-foreground/90"
                    />
                  </FormControl>
                </FloatingField>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FloatingField id="position" label={isSpecific ? "Position" : "Position (optional)"}>
                  <FormControl>
                    <Input
                      {...field}
                      id="position"
                      readOnly={isSpecific}
                      disabled={isSubmitting}
                      placeholder=" "
                      variant="minimal"
                      className="peer text-sm text-foreground/90"
                    />
                  </FormControl>
                </FloatingField>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="coverNote"
          render={({ field }) => (
            <FormItem>
              <FloatingField id="whyApplying" label="Why are you applying?">
                <FormControl>
                  <Textarea
                    {...field}
                    id="whyApplying"
                    rows={4}
                    placeholder=" "
                    variant="minimal"
                    disabled={isSubmitting}
                    className="peer text-sm text-foreground/90 pt-2 resize-none min-h-36"
                  />
                </FormControl>
              </FloatingField>
              <p className="mt-1 text-xs text-muted-foreground/80">
                Include relevant experience, portfolio links, LinkedIn, or anything that
                helps us understand your fit.
              </p>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <div className="pt-2 flex justify-end gap-2">
          {showCancel && onCancel && (
            <Button
              type="button"
              variant="ghost"
              disabled={isSubmitting}
              onClick={onCancel}
            >
              Cancel
            </Button>
          )}
          <CtaButton 
            variant="primary" 
            className="ms-auto" 
            disabled={isSubmitting}
            onClick={form.handleSubmit(onSubmit)}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </CtaButton>
        </div>
      </form>
    </Form>
  )
}

