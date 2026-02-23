import nodemailer from "nodemailer"

type MailerCache = {
  transporter: nodemailer.Transporter | null
}

declare global {
  var mailerCache: MailerCache | undefined
}

const cached = global.mailerCache ?? {
  transporter: null,
}

if (!global.mailerCache) {
  global.mailerCache = cached
}

function createTransporter() {
  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_PASS

  if (!user || !pass) {
    throw new Error("GMAIL_USER and GMAIL_PASS must be set")
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  })
}

export async function sendMail(options: {
  to?: string
  subject: string
  text?: string
  html?: string
}) {
  if (!cached.transporter) {
    cached.transporter = createTransporter()
  }

  const from =
    process.env.MAIL_FROM ||
    process.env.CONTACT_FROM_EMAIL ||
    process.env.GMAIL_USER

  const to =
    options.to ||
    process.env.CONTACT_NOTIFICATION_TO ||
    process.env.MAIL_TO ||
    process.env.GMAIL_USER

  if (!from || !to) {
    return
  }

  await cached.transporter.sendMail({
    from,
    to,
    subject: options.subject,
    text: options.text,
    html: options.html,
  })
}

