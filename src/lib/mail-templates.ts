import fs from "fs"
import path from "path"

export function getEmailTemplate(templateName: string, data: Record<string, string>): string {
  const templatePath = path.join(process.cwd(), "templates", `${templateName}.html`)
  
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found: ${templatePath}`)
  }

  let template = fs.readFileSync(templatePath, "utf-8")

  // Replace all {{key}} with data[key]
  Object.entries(data).forEach(([key, value]) => {
    const placeholder = new RegExp(`{{${key}}}`, "g")
    template = template.replace(placeholder, value || "")
  })

  return template
}
