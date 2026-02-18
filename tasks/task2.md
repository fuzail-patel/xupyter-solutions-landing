# Refactor: Blogs Page – Structure, UX & Positioning

We need to restructure the blogs page so it actually feels like a blog, not a landing page.

The current design is visually clean, but:

* The hero is too large for a blog index
* No search
* No pagination
* Featured article doesn’t feel featured

Below are clear implementation changes + strategic recommendations.

---

## 1. Remove Oversized Hero

### Problem

The large header section makes it feel like a marketing page.

### Change

* Reduce hero height significantly
* Convert it into a compact blog header

### New Structure

* H1: “Insights on Systems & Architecture”
* Short 1-line subtext (max 120 characters)
* Add search bar on the right side (desktop)
* Add category filter below title (optional tabs)

Think: minimal, utility-first, editorial style.

No large empty spacing.

---

## 2. Make Featured Article Visually Distinct

Right now it blends in.

### Redesign Featured Section

Make it:

* Full-width card
* Horizontal layout (image left 60% / content right 40%)
* Slight background tint (subtle surface color difference)
* Add small badge: “Featured”
* Larger title size than other posts

Optional:

* Add short excerpt (2–3 lines max)
* Add subtle border glow or elevated shadow to separate it

It should clearly look prioritized.

---

## 3. Add Search Functionality (Required)

Add:

* Search input (client-side for now)
* Debounced filtering
* Search by: title + excerpt + category

UX:

* Show result count above grid
* Show empty state when no results
* Preserve search query in URL (?search=)

---

## 4. Add Pagination (Required)

Current layout looks infinite but static.

Implement:

* 6 posts per page
* Pagination component at bottom
* Previous / Next buttons
* Page numbers
* URL-based pagination (?page=2)

If later we move to API, pagination logic should be reusable.

---

## 5. Improve Blog Grid Structure

For regular posts:

* Make cards slightly smaller
* Maintain consistent image ratio (16:9)
* Reduce empty top spacing
* Add subtle hover interaction (lift + border accent)

Meta info styling:

* Category (small uppercase)
* Date + read time (lighter text)

Keep it editorial, not product-marketing.

---

## 6. Add Categories Filter (Recommended)

Add horizontal category filters:

* All
* System Architecture
* Internal Tools
* Automation Infrastructure

Filter should:

* Work with pagination
* Work with search
* Update URL (?category=)

---

## 7. Add Sidebar (Optional but Recommended)

If layout allows, add right sidebar (desktop only):

Include:

* Categories list
* Recent posts
* Newsletter CTA (minimal)

This instantly makes it feel like a real blog.

---

## 8. Improve Blog Page Hierarchy

Final Structure:

1. Compact header (title + search)
2. Featured post
3. Category filter row
4. Blog grid
5. Pagination

Spacing should feel tighter than landing pages.

---

## 9. Design Direction Notes

Do NOT:

* Use oversized marketing-style sections
* Add heavy gradients everywhere
* Add dramatic spacing

Do:

* Keep typography strong
* Keep layout structured
* Make it look knowledge-focused
* Lean toward editorial SaaS blog style

Reference direction:
Think linear.app blog, vercel blog, stripe docs/blog hybrid feel.

---

## 10. Technical Suggestions

* Extract BlogCard component
* Extract FeaturedBlogCard component
* Create reusable Pagination component
* Create BlogFilter component
* Keep state synced with URL
* Keep everything API-ready

---

Goal:
Make this feel like a serious technical publication, not a marketing landing section with posts underneath.

Implement cleanly and modularly.
