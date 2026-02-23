
Metric Score
Performance | 58
Accessibility | 72 
Best Practices | 70 
SEO | 82 

Contributing Factors (Current):
 Unoptimized CloudFront images without lazy loading
 Multiple render-blocking resources
 Cumulative Layout Shift (CLS) from dynamic testimonial carousel
 Missing semantic HTML in some sections
 Non-responsive button sizes on mobile
 Missing alt text on some images
 Third-party WhatsApp script delays

---

5 Critical UX/UI Issues & Solutions

---

ISSUE #1: Weak Visual Hierarchy & Confusing Information Flow

Problem:  
The hero section headline "Visit curated homes, negotiate smarter & buy intelligently" is visually de-emphasized by the subheading "1000+ intelligent homebuyers trusted us..." which appears equally prominent. Key value propositions (5 stages, 80+ data points, expert guidance) are scattered across different sections without clear priority, making it difficult for first-time visitors to understand the core offering within 3 seconds.

Why It Affects Conversion
 Users can't immediately identify what Propsoch does in the critical first 3-second engagement window
 Scattered messaging creates cognitive load, increasing bounce rates
 CTAs appear after excessive scrolling without clear messaging progression

Exact Redesign Solution:
Hero Single, bold headline (48-56px) with maximum 6-word value prop: "**Navigate Your Home Purchase Intelligently**"
Subtitle: Clear, benefit-driven (20-24px): "Expert guidance + AI-powered insights. 1000+ homes delivered in the last 12 months."
Supporting visual : Instead of random images, show a **single trust indicator**: "Trusted by 1000+ homebuyers from Google, Amazon, Peak XV"
Hero CTA: Single, high-contrast button (Accent button + secondary option)
Section progression: Each next section explicitly builds on previous messaging



**Implementation Details:**
```
Hero Grid:
- Content column (60%): Headline + subheading + trust metric + dual CTAs
- Visual column (40%): Single professional image or subtle gradient background
- Max-width: 1280px centered
- Vertical padding: 120px top, 100px bottom (desktop); 60px top, 50px bottom (mobile)
```

---
ISSUE #2: Inconsistent Spacing & Component Spacing Scale

Problem:
Different sections use inconsistent vertical spacing (sometimes 40px, sometimes 80px, sometimes 120px). Card components lack uniform padding (some components have 16px internal padding, others 24px). This creates a "jumbled" layout feeling, especially on tablets. Mobile spacing doesn't follow a coherent scale, causing text to cluster too tightly in some areas and waste space in others.

Why It Affects Conversion
Cognitive friction: Users perceive the site as "unprofessional" due to inconsistent spacing
Mobile usability: Poor spacing makes tap targets too small (< 44px height)
Readability issues: Cramped content reduces time spent reading (lower engagement)
Users unconsciously perceive inconsistent spacing as a sign of lower quality/trust

Exact Redesign Solution:
Implement a strict **spacing scale based on 8px grid**:

```
Spacing Scale:
- xs: 8px (internal component spacing)
- sm: 12px (checkbox labels, small gaps)
- md: 16px (card padding, button text padding)
- lg: 24px (section inner padding, component gaps)
- xl: 32px (major section spacing)
- 2xl: 48px (hero section padding)
- 3xl: 64px (section vertical padding)
- 4xl: 96px (hero vertical padding)

Applied To Sections:
- Hero: py-32 (desktop) / py-24 (mobile)
- Services grid gaps: gap-8 (desktop) / gap-6 (mobile)
- Service cards: p-8 (desktop) / p-6 (mobile)
- About section: py-24 (desktop) / py-16 (mobile)
- CTA section: py-20 (desktop) / py-16 (mobile)
```

Implementation Details:
- Tailwind config: Extend spacing with named scale
- All sections use consistent `py-` and `px-` utilities
- Cards use `p-lg` (24px) padding uniformly
- Mobile overrides via responsive prefixes

---

ISSUE #3: Mobile Responsiveness Breaks Below 768px
 Problem:
The testimonial carousel is not touch-optimized; swipe interactions feel sluggish. The 6-stage process grid collapses poorly on mobile (still shows in 2 columns), causing stage numbers to overlap. Service cards shift from 3 columns to 1 column with large unused space on tablets (768-1024px). CTA buttons remain at desktop width (120% wider than needed on mobile), creating accidental mis-taps.

 Why It Affects Conversion:
- Mobile accounts for 55-60% of traffic; poor mobile UX directly kills conversions
- Overlapping text on stages section is unreadable
- Touchscreen users experience accidental taps on wrong elements
- Mobile users abandon pages with interactive elements that don't respond smoothly
- Google's Core Web Vitals penalize poor mobile responsiveness

 Exact Redesign Solution:

```
Responsive Breakpoint Strategy:
- Mobile-first approach: Design for 375px, then scale up
- Breakpoints:
  - sm: 640px (phones landscape)
  - md: 768px (tablets portrait)
  - lg: 1024px (tablets landscape)
  - xl: 1280px (desktop)
  - 2xl: 1536px (large desktop)

Mobile Changes (< 640px):
- Hero: Single column, stacked text, larger line height (1.6)
- Stages grid: 2 columns (not 3)
- Service cards: 1 column, full-width with padding
- Buttons: Full-width, min-height 56px (Apple HIG standard)
- Touch targets: Minimum 48x48px (WCAG 2.5.5)
- Image sizes: 100% width with aspect-ratio preserved

Tablet Changes (640px - 1024px):
- Sections expand to 90% width
- Service grid: 2 columns (not 3)
- Double-check spacing doesn't create orphaned content
- Test all interactive elements with actual touch (not mouse)

Implementation Details:
- Tailwind responsive utilities: `md:`, `lg:`, `xl:`, `2xl:` prefixes
- CSS Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Image component: `fill` + `objectFit="cover"` + `sizes` prop for responsive optimization
- Touch-friendly spacing: All interactive elements minimum 44x44px with 8px margin

---

ISSUE #4: Performance Inefficiencies & Image Optimization

Problem:
All testimonial images are served from CloudFront without even basic Next.js Image optimization (no lazy loading, no WEBP conversion, wrong sizes for viewport). The carousel auto-plays images, causing LCP (Largest Contentful Paint) delays. Multiple JavaScript bundles for testimonials carousel and FAQ accordions aren't code-split. The "book appointment" button appears 6+ times (repeating code), creating render overhead. Missing `loading="lazy"` on below-fold images.

Why It Affects Conversion:
- Images are the largest contributors to page weight (40-50% of total size)
- Slow LCP >> poor Lighthouse score >> lower Google ranking >> fewer visitors
- Users on 3G see 3-4 second delays before seeing meaningful content
- Performance degradation directly correlates with conversion drop-off
- Unoptimized images waste mobile users' monthly data allowance

Exact Redesign Solution:

```
Image Optimization Strategy:
1. Next.js Image Component:
   - Replace all CloudFront direct URLs
   - Enable automatic WEBP/AVIF conversion
   - Implement responsive sizing with 'sizes' prop
   - Lazy load all below-fold images
   
2. Specific Changes:
   - Hero image: priority={true}, sizes="(max-width: 768px) 100vw, 50vw"
   - Testimonial avatars: loading="lazy", sizes="80px"
   - Section images: loading="lazy", sizes="(max-width: 768px) 100vw, 1280px"
   
3. Image Formats:
   - Consider AVIF for ~25-30% size reduction vs WEBP
   - Fallback to WEBP for older browsers
   
4. Code Splitting:
   - Move carousel to dynamic import: dynamic(() => import('...'), { ssr: false })
   - FAQ accordions: Use native <details> HTML (no JS)
   - Lazy load WhatsApp script: type="text/javascript" defer
```



**Implementation Details:**
- Image component: `import Image from 'next/image'`
- Testimonial carousel: `dynamic(() => import(...), { loading: () => <Skeleton /> })`
- Removal of inline styles and unused CSS
- Minify and move analytics after critical path

---

ISSUE #5: Accessibility Gaps & Missing Semantic HTML

Problem:
Some icon-only buttons lack `aria-label` attributes (e.g., WhatsApp links, carousel navigation arrows). Contrast ratio between "secondary CTA" text and background is 3.2:1 (should be 4.5:1 for AA compliance). Carousel component is not keyboard-navigable (no arrow key support). Section headings skip levels in DOM (h1 >> h3, missing h2), breaking screen reader outline. Some alt text is missing on feature icons. Form-like sections lack proper `<fieldset>` structure and `<label>` associations.

Why It Affects Conversion
- 15% of population has some form of disability; missing accessibility = lost audience
- Google downranks low-accessibility pages (WCAG violations)
- Keyboard-only users (accessibility power users, high-income segment) abandon quickly
- Poor contrast ratios fail WCAG AA compliance (legal liability in some jurisdictions)
- Screen reader users get confused by skipped heading levels
- Unassociated labels create friction for form interactions


Design Philosophy for Redesign

1. **Visual Hierarchy First**: Every element has a clear purpose and visual weight
2. **Spacing as Communication**: Spacing conveys relationships and importance
3. **Mobile-First Thinking**: Design for 375px phone first, scale to 1920px desktop
4. **Performance is UX**: Every optimization directly improves user experience
5. **Accessibility is Mandatory**: Not an afterthought; built into component design
6. **Real Estate Trust**: Conservative colors, professional typography, customer testimonials
7. **Conversion Focused**: Every section answers "Why should I book?"




Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- next/image for optimization
- Dynamic imports for code splitting





Improvements Implemented in Redesign

Refined hero hierarchy with bold primary value proposition

Implemented strict 8px spacing system using Tailwind utilities

Redesigned service cards with consistent padding and hover states

Converted testimonial carousel to optimized dynamic import

Replaced CloudFront direct images with Next.js Image component

Implemented lazy loading for all below-fold assets

Enforced semantic heading structure (h1 → h2 → h3)

Fixed color contrast to meet WCAG AA (4.5:1)

Converted FAQ section to native <details> for accessibility

Standardized CTA buttons with consistent height (56px mobile)

This connects analysis to actual implementation.


Responsive Strategy

Mobile-first development starting at 375px

Progressive enhancement for md, lg, xl breakpoints

Grid system: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

Touch target minimum: 48x48px

Button min-height: 56px on mobile

Fluid typography scaling

Tested between 375px – 1536px

Final Outcome

The redesigned Propsoch landing page maintains the original brand identity and business purpose while significantly improving:

Visual clarity

Mobile usability

Accessibility compliance

Performance efficiency

Conversion readiness

Target Lighthouse after redesign:

Performance: 90+

Accessibility: 95+

Best Practices: 95+

SEO: 90+