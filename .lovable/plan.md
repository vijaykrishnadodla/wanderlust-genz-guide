

# New High-Converting Landing Page at `/join`

## Overview
Create a dedicated landing page for American students who know nothing about Student Travel Buddy. It follows the exact same design system as the homepage (sunny gradients, Fredoka One / Caveat / Poppins fonts, orange/yellow palette, SunnyMascot, rounded CTAs) but uses the conversion-focused copy provided verbatim.

## Files to Create

### 1. `src/pages/JoinPage.tsx`
Main page wrapper using existing `Navbar`, `Footer`, and `WaveDivider`. Stacks all 6 sections with wave dividers between them. Includes the `StickyCtaBar` component.

### 2. `src/components/join/JoinHeroSection.tsx`
Above-the-fold section with:
- Headline: "Travel abroad without the stress, overspending, or guesswork."
- Sub-headline: "Student Travel Buddy is a $20/year membership that turns overwhelmed students into confident travelers -- with real discounts, a custom trip plan, and support when you need it."
- `$20/year` badge visually anchored next to the CTA
- 4 micro-value bullets in 2-column layout (desktop), single column (mobile):
  - Official ISIC student card (accepted worldwide)
  - Personalized itinerary built for your dates, city and budget
  - Save $20+ per day on transport, attractions and food
  - Simple verification. No confusing programs.
- Primary CTA: "Get your Student Travel Buddy membership" (arrow icon, links to `/checkout`)
- Micro-copy below CTA: "Takes less than 3 minutes" with lightning icon
- Extra line below bullets: "Made for U.S. students traveling abroad (study abroad, gap year, personal trips)."
- Trust micro-row: "Official ISIC | Secure checkout | Cancel anytime" with 3 small icons
- SunnyMascot displayed alongside

### 3. `src/components/join/JoinProblemSection.tsx`
Pain point section with:
- Headline: "Planning your first trip abroad shouldn't feel this hard."
- 3 equal-height cards with emojis:
  - Planning overload: "You've saved TikToks, opened 20 tabs, and still don't know where to start. Every blog says something different."
  - Budget anxiety: "You want to travel -- but you're scared of overspending, hidden costs, or blowing your savings on mistakes."
  - Safety and "what if" fear: "What if something goes wrong? What if you get lost, scammed, or stuck without support?"
- Transition punchline in a highlight bar: "Most students don't fail to travel because they don't want to. They fail because they don't have a simple system."

### 4. `src/components/join/JoinSolutionSection.tsx`
Step-based solution section with:
- Headline: "Student Travel Buddy gives you the plan, the perks, and the confidence -- in one place."
- 4 steps displayed as a vertical timeline (desktop) / stacked cards (mobile):
  1. Get verified once -- "We confirm your student status and issue your official ISIC card -- the most accepted student ID worldwide."
  2. Save money instantly -- "Unlock 150,000+ student discounts on transport, attractions, food, hostels, museums and more."
  3. Get your personal trip plan -- "Tell us where you're going. We build a custom itinerary that fits your budget, interests, and pace -- with daily savings clearly shown."
  4. Travel supported, not alone -- "You get clear prep guides, daily trip emails, and access to help if you're unsure about anything."
- Value callout box (sticky-note style): "Most students save more in one day than the entire membership costs."

### 5. `src/components/join/JoinSocialProofSection.tsx`
Trust and testimonials section with:
- Headline: "Trusted by students traveling all over the world"
- Proof icons row first (before testimonials):
  - Official ISIC-issued cards (used in 130+ countries)
  - Designed specifically for U.S. full-time students
  - Built by travelers who studied and lived abroad
  - Used for Europe, UK, Asia and beyond
- Uses existing ISIC/UNESCO logo images from uploads
- 3 testimonial cards with placeholder names (e.g. "Student, NYU"):
  - "I finally booked my trip because everything felt clear."
  - "I saved more than $200 in my first week."
  - "This made traveling feel doable, not scary."

### 6. `src/components/join/JoinFaqSection.tsx`
Accordion FAQ section with:
- Intro line above: "Still deciding? Here's what students usually ask before they join."
- Uses existing Radix accordion component
- 6 FAQ items with exact Q&A text:
  - Who is this for? -- "U.S. full-time students (18+ or 17 with consent) planning to travel abroad -- study abroad, gap year, or personal trips."
  - What exactly do I get for $20? -- "Your official ISIC card + access to global discounts + a personalized itinerary + prep resources + ongoing trip support."
  - Is this just a discount card? -- "No. ISIC alone is just discounts. Student Travel Buddy helps you actually use them and plan your trip."
  - How fast do I get my ISIC card? -- "After purchase and verification, your ISIC is issued shortly after approval. You'll get clear updates every step."
  - What if I don't know where I'm going yet? -- "That's okay. You can join now, explore options, and plan your trip later."
  - Is this a subscription? -- "Yes -- $20 per year. You can cancel anytime before renewal."

### 7. `src/components/join/JoinFinalCtaSection.tsx`
Final CTA section with:
- Headline: "Stop overthinking. Start traveling smarter."
- 3 reinforcement bullets:
  - One small step
  - One simple system
  - One year of student travel perks
- CTA Button: "Join Student Travel Buddy for $20" (links to `/checkout`)
- Micro-copy: "Most students spend $20 on one airport meal. This lasts all year."

### 8. `src/components/join/StickyCtaBar.tsx`
Sticky top bar that:
- Appears after scrolling past the hero section
- Shows "Join for $20" CTA button
- Uses the same scroll detection pattern as the existing Navbar
- Smooth slide-in animation
- Links to `/checkout`

## File to Modify

### 9. `src/App.tsx`
- Import `JoinPage`
- Add route: `<Route path="/join" element={<JoinPage />} />`

## Design and Technical Details
- All components reuse existing UI primitives: `Button`, `Card`, `Accordion`/`AccordionItem`/`AccordionTrigger`/`AccordionContent`
- Tailwind classes follow existing patterns: `bg-sunny-gradient`, `text-sunny-orange`, `font-display`, `font-handwritten`, `rounded-full` for CTAs, `sunny-bounce` animations
- Reuses `SunnyMascot`, `Navbar`, `Footer`, `WaveDivider` components
- Mobile-first responsive design with large headline text and generous whitespace
- 2-column bullet layout on desktop, stacked on mobile
- All CTA buttons link to `/checkout`
- ISIC/UNESCO logos reused from existing uploaded images
- Problem cards use equal height via CSS grid
- Solution timeline uses a vertical line connector on desktop

