# Refactor: Individual Blog Page – Layout & UI Only

We are focusing ONLY on layout and UI structure.
Do not implement CMS or backend logic yet.
Content can be static/mock for now.

Goal: Make this feel like a serious technical publication, not a marketing page.

---

## 1. Overall Layout Structure

Use a clean, centered article layout.

Max width for content: 720–780px
Centered container.
Comfortable vertical spacing.

Final Structure Order:

1. Article Meta Header
2. Optional Cover Image
3. Article Content
4. Divider
5. Author Section
6. Related Posts
7. Previous / Next Article Navigation

No oversized hero section.
No landing-page-style blocks.

---

## 2. Article Meta Header (Top Section)

This should include:

* Category (small uppercase label)
* Title (strong, tight line-height)
* Short intro/excerpt (2–3 lines max)
* Author name
* Publish date
* Read time

Layout:

* Everything stacked vertically
* Clean spacing
* No heavy background sections
* No dramatic gradients

Title must visually dominate.

---

## 3. Cover Image (Optional)

If used:

* 16:9 ratio
* Full width within container
* Moderate border radius
* Not oversized

Spacing should feel editorial, not promotional.

---

## 4. Article Content Styling (Very Important)

Design system must properly support:

* H1 (used only once in article body if needed)
* H2
* H3
* Paragraphs
* Bullet lists
* Numbered lists
* Code blocks
* Inline code
* Blockquotes
* Tables
* Images inside content

Typography rules:

* Comfortable line height
* Clear spacing between sections
* Headings clearly separated from paragraphs
* Code blocks visually distinct but clean

No cramped spacing.
No giant gaps.

---

## 5. Optional: Table of Contents (Recommended)

Desktop only:

* Sticky right sidebar
* Auto-generated from H2/H3

If implemented:

* Article content stays centered
* Sidebar max width ~260px
* Hide on mobile

This makes the page feel more professional.

---

## 6. Author Section (After Article)

Include:

* Small avatar
* Author name
* Short 2–3 line bio

Keep it minimal.
No large background section.

---

## 7. Related Posts

Display 2–3 related articles:

* Small horizontal cards
* Show title + category + date
* Keep consistent with blog index card style

Spacing should clearly separate from article body.

---

## 8. Previous / Next Navigation

At bottom:

* Left: Previous article
* Right: Next article

Simple text-based links with subtle hover effect.

---

## 9. Design Direction Rules

Do NOT:

* Use large marketing sections
* Add oversized hero blocks
* Add heavy gradients
* Add decorative noise

Do:

* Keep it structured
* Keep it editorial
* Keep typography strong
* Make reading comfortable

This should feel like a technical knowledge article from a serious SaaS engineering team.

Implement cleanly and modularly.
