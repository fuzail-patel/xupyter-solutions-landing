# Full Rebuild: Careers Page (From Scratch)

We are discarding the current implementation.
Do NOT refactor existing components.
Do NOT reuse the card layout.
Build the Careers page structure from scratch.

This must be implemented in 2 milestones.
After Milestone 1 is complete, STOP and wait for approval before moving to Milestone 2.
If anything is unclear at any point, ASK directly. Do not assume.

---

# Core Direction

The page must feel:

* Professional
* Structured
* Neutral
* Clear
* Engineering-led

It must NOT feel like:

* Marketing copy
* A case study
* A landing page
* Buzzword-heavy
* Over-designed

No labels like:

* "Role Snapshot"
* "Client-facing"
* "Hot Role"
* Or similar promotional language

Keep everything direct and understandable.

All content must be dynamic-ready.
Nothing should be hardcoded beyond placeholder variables.

---

# Dynamic Content Requirement

The job post layout must be fully generic.
Everything should be powered by data that will later come from the admin panel.

Do NOT hardcode:

* Role titles
* Descriptions
* Stack items
* Responsibilities
* Requirements
* Salary
* Tags
* Meta info

Use clearly defined data structures instead.

Design for scalability:

* 1 job
* 10 jobs
* 50+ jobs

---

# Milestone 1 – Careers Listing Page Structure

Goal: Build the listing page only.
No detailed job view yet.

## Page Structure

1. Section Header

* Title: Careers
* Short neutral subtext (generic placeholder)
* Clean spacing
* No marketing tone

2. Job Listings Container

Instead of cards, implement structured listing blocks.

Each listing block should include:

* Job Title
* Meta Row (inline):

  * Employment Type
  * Location
  * Department
  * Experience Level
* Short Description (2–3 lines max)
* Salary (optional, only if provided in data)
* Primary CTA: "View Role"

Design Requirements:

* Clean layout
* Clear hierarchy
* Strong title prominence
* Subtle separators between listings
* No heavy visual effects
* No unnecessary badges

Listings should feel like official job entries.

3. Empty State

If no jobs exist:

Display a neutral message:
"There are currently no open positions."

And a CTA:
"Submit General Application"

STOP AFTER MILESTONE 1.
Wait for approval before continuing.

---

# Milestone 2 – Individual Job Post Page

Only begin after Milestone 1 approval.

Build a full structured job post layout.

## Top Block

* Job Title (large)
* Meta row under title:

  * Employment Type
  * Location
  * Department
  * Experience Level
* Optional salary line (only if exists)
* Primary CTA button: "Apply for this role"

Layout should feel anchored and intentional.

## Structured Sections

The following sections must render only if data exists:

* Overview (short summary paragraph)
* Key Skills / Tech Stack (as tag list)
* Responsibilities (bullet list)
* Requirements (bullet list)
* Benefits (bullet list)
* What Success Looks Like (optional section)

Rules:

* Do not display empty sections
* Do not display placeholder labels
* Keep headings simple and neutral
* Use standard, understandable language

No buzzwords.
No promotional language.
No decorative section titles.

## Apply Modal

Single reusable modal component.

Fields:

* Full Name
* Email
* Phone (optional)
* Resume Upload
* LinkedIn (optional)
* Cover Note
* Position (auto-filled and locked)

Modal must work for:

* Specific role (prefilled position)
* General application (position selectable)

---

# Technical Expectations

* Fully componentized structure
* Clean data schema
* No UI duplication
* No hardcoded content
* Designed for future admin integration

If any structure, field, or behavior is unclear:
STOP and ask questions before implementing.

Do not assume business logic.
Do not invent fields.
Ask.

---

Milestone 3 – Inline Expansion + Apply Modal (No Separate Page)

We are NOT creating a separate job details page. “View Role” must be removed. Each job listing should expand inline and include full structured details. Primary action must be “Apply Now” which opens a modal.

1. Replace "View Role"

Remove "View Role" button completely.

Replace with primary CTA: "Apply Now"

Button opens reusable application modal.

2. Expandable Job Block (Accordion Style)

Each job listing should support inline expansion.

Collapsed State:

Job Title

Meta row with ICONS:

Employment Type icon

Location icon

Department icon

Experience Level icon

Salary icon (if exists)

Short 1–2 line summary

Apply Now button (visible even when collapsed)

Expanded State (reveals below summary):

Render sections only if data exists:

Tech Stack (as tag chips)

Responsibilities (bullet list)

Requirements (bullet list)

Benefits (bullet list)

No empty sections. No placeholder headings.

3. Icons Requirement

Add subtle consistent icons for:

Location

Employment Type

Experience Level

Department

Salary

Icons must be minimal and aligned with text. No decorative icons. No heavy colors.

4. Tech Stack Section

Display as tag chips. Small, clean, neutral. Not oversized. Must be dynamic-driven.

5. Responsibilities & Requirements

Simple bullet lists

Clear language

No buzzwords

No marketing tone

Structured and readable

6. Apply Modal Behavior

Single reusable modal component.

When opened from specific job:

Position auto-filled

Position field locked

When opened from general application section:

Position selectable

Fields:

Full Name

Email

Phone (optional)

Resume Upload

LinkedIn (optional)

Cover Note

Position

7. Technical Constraints

Fully type-safe

No hardcoded job data

Componentized architecture

No duplication between listing and modal

Designed for admin-driven content

If any structure is unclear, STOP and ask. Do not assume missing data models.

Deliver Milestone 3 only after Milestone 2 approval.


Milestone 4:

Modal Update – Simplified Application (Two-Column Layout)

Refactor the apply modal with these changes:

Remove fields:

LinkedIn

Separate Cover Note field

Form Layout:

Two-column grid on desktop

Single column on mobile

Fields: Left Column:

Full Name

Email

Phone (optional)

Right Column:

Resume Upload

Position (auto-filled + locked)

Replace “Cover Note” with single large field: Label: “Why are you applying?” Helper text inside or below field: “Include relevant experience, portfolio links, LinkedIn, or anything that helps us understand your fit.”

Keep modal minimal:

Title: “Apply for {Role Name}”

Meta line under title (type • location • department)

Primary button: “Apply Now”

Secondary: Cancel (minimal style)

No extra marketing copy. Clean. Structured. Direct.

If anything about layout or behavior is unclear, ask before implementing.

Milestone 5 – Page Header + Benefits Section (Before Listings)

We are restructuring the Careers page layout hierarchy.

New order:

Page Header

Benefits Section (4 cards)

Open Positions (job listings)

General Application block (no open role)

1. Page Header Update

Current header is visually strong but structurally incorrect.

Changes required:

"Careers" must be an eyebrow label (small, subtle, uppercase).

Main heading should be value-driven, not just "Careers".

Example structure:

Eyebrow: CAREERS

Main Heading: Build Systems That Power Real Businesses

Subtext: Short neutral sentence explaining who we hire and what kind of work we do.

Keep it clean. No marketing-heavy tone. No gradient overload. Strong typography hierarchy.

2. Benefits Section (4 Cards)

Add a benefits section immediately after header.

Section title: Why Join Us

Display 4 benefit cards in grid (2x2 on desktop, stacked on mobile).

Each card should include:

Minimal icon (subtle)

Benefit title

1 short description line

Benefits to include:

Remote-first

5-day work week

Flexible working hours

No micromanagement

Continuous learning & growth

(If layout requires 4 only, merge flexible hours + remote-first logically.)

Design requirements:

Clean cards

Subtle border or surface difference

No heavy shadows

No decorative marketing styling

Structured and calm

3. Open Positions Section

Keep previously implemented structured listing blocks. Section title: Open Positions

4. General Application Block

At bottom of page:

Title: Don’t see a suitable role?

Short neutral line.

CTA: Submit General Application (Opens same modal with position selectable.)

All content must remain dynamic-ready where applicable. No hardcoded job data.

If any structural or hierarchy decision is unclear, ask before implementing.