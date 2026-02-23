Part 1 – Lighthouse Scores
Category	Estimated Score
Performance	55 / 100 
Accessibility	68 / 100 
Best Practices	82 / 100 
SEO	90 / 100 

**UX / UI Issues**

**1. Visual hierarchy**
Problem: Hero section mixes large headlines, multiple CTAs and a noisy background animation.
Why it is bad UX: Users are unsure where to look first; primary message (“Visit curated homes…”) competes with “Book an appointment” button and background visuals.
Fix: Simplify hero by:
Keeping a single, bold headline.
Moving secondary CTAs lower on the fold.
Reducing or deferring background animation to preserve focus.
Expected improvement: Higher click‑through to core funnel; faster message comprehension; improved performance.


**2. Spacing & layout consistency**
Problem: Sections alternate between cramped text blocks and wide gutters; testimonials grid breaks at odd widths.
Why it is bad UX: Inconsistent padding/margin interrupts the reading rhythm and makes the page feel “patched together.”
Fix: Establish a global spacing scale (8‑px or 16‑px base); apply consistent vertical rhythm and grid columns across breakpoints.
Expected improvement: Cleaner page structure, easier scanning, and a more polished brand impression.


**3. Mobile responsiveness**
Problem: On phones, the “Compare our services” table overflows horizontally; images scale unevenly and some text overlaps buttons.
Why it is bad UX: Users must scroll sideways or zoom; some interactive elements are hard to tap.
Fix:
Convert wide tables to stacked cards on narrow viewports.
Use max-width: 100% on images and enforce box-sizing: border-box.
Audit touch-target sizes (≥44 px).
Expected improvement: Reduced bounce rate on mobile; enhanced accessibility and engagement for the majority of users.


**4. Performance optimisation**
Problem: Page loads >5 MB of images and includes multiple large JS bundles that block rendering.
Why it is bad UX: Slow initial paint hurts first impressions; mobile/2G users suffer long waits.
Fix:
Implement responsive, lazy‑loaded <picture>/<img> with srcset and loading="lazy".
Audit and split JS bundles; defer non‑critical scripts.
Preload essential fonts and critical CSS.
Expected improvement: Faster load times, higher Lighthouse performance score, and better Core Web Vitals.


**5. Accessibility**
Problem: Headings are not semantically ordered (e.g. multiple <h2> after <h4>), color contrast is marginal on buttons, and decorative icons lack aria-hidden.
Why it is bad UX: Screen‑reader users cannot navigate logically; low contrast inhibits readability for vision‑impaired visitors.
Fix:
Repair heading hierarchy and use landmark roles (<main>, <section>, etc.).
Ensure contrast ratios ≥4.5:1 for body text and ≥3:1 for large text/buttons.
Add alt attributes or aria-hidden="true" where appropriate.
🚀 Expected improvement: Higher accessibility score, compliance with WCAG AA, and a more inclusive experience.

