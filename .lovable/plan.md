

# Create /join2 Landing Page with Exact Provided Copy

## Overview
Build a complete alternative landing page at `/join2` using all the exact text from the prompt. Follows the same visual patterns as `/join` (sunny-card, font-display, font-handwritten, SunnyMascot, Accordion, StickyCtaBar) but with the new copy and slightly different section structure.

## New Files (7 components + 1 page)

### 1. `src/components/join2/Join2HeroSection.tsx`
- Headline: "Travel smarter as a student. Save money everywhere you go."
- Sub-headline: "Student Travel Buddy is a $20/year student-verified membership that helps you travel abroad with confidence -- real discounts, a personal trip plan, and support when you need it."
- 4 bullets: Official ISIC Student Card, Personalized itinerary, Save $20-$300/week, Student-verified cancel anytime
- CTA: "Get student access now" linking to /checkout
- Micro-trust: Instant access, Student-verified, Cancel anytime
- Social proof line: "Trusted by students traveling across Europe, the UK & beyond"
- SunnyMascot on the right side

### 2. `src/components/join2/Join2ProblemSection.tsx`
- Headline: "Planning trips as a student shouldn't be this hard."
- 3 cards: Planning overload, Budget stress, Fear of getting it wrong (with exact copy from prompt)
- Bridge line: "You don't need more blogs. You need a system made for students."

### 3. `src/components/join2/Join2SolutionSection.tsx`
- Headline: "Here's how Student Travel Buddy fixes that."
- 4-step timeline with exact copy: Verified student access, Real savings instantly, Travel done for you, Travel supported
- Value anchor: "Most students earn back the $20 on their first trip day."
- Mini CTA button: "Unlock student perks" linking to /checkout

### 4. `src/components/join2/Join2SocialProofSection.tsx`
- Headline: "Built by a student traveler, for student travelers."
- Founder quote block: "I know how overwhelming student travel feels -- I've studied, lived, and traveled abroad myself. Student Travel Buddy exists so you don't have to figure everything out alone."
- 3 testimonial cards with exact quotes: "The ISIC card paid for itself almost immediately.", "I finally booked my trip because everything felt clear.", "This saved me money and stress on my first solo trip."
- ISIC + university logos strip (reuse same image paths from JoinSocialProofSection)
- Trust line: "In cooperation with ISIC. Trusted by students worldwide."

### 5. `src/components/join2/Join2FaqSection.tsx`
- Headline: "Questions? We've got you."
- 6 FAQ accordion items with exact copy:
  - Is this only for full-time students? / Yes -- Student Travel Buddy is for verified students only.
  - Is the ISIC card included? / Yes. Your membership includes ISIC access and discounts.
  - How fast do I get access? / Immediately after checkout. Verification is quick and guided.
  - What's included in the membership? / Student discounts, ISIC access, itineraries, city guides, community perks, and support.
  - Can I cancel? / Yes -- cancel anytime.
  - Is this useful if I don't travel often? / Yes. Many perks and discounts apply locally too.

### 6. `src/components/join2/Join2FinalCtaSection.tsx`
- Headline: "You already have what it takes to travel smarter."
- Sub-headline: "Join thousands of students saving money, traveling confidently, and exploring the world together."
- Price anchor badge: "$20 / year -- most students make this back on their first trip."
- CTA: "Get full-time student access" linking to /checkout
- Closing trust line: "Student-only access, Global discounts, Real support"

### 7. `src/pages/Join2Page.tsx`
- Page wrapper with Navbar, StickyCtaBar, all 6 sections, Footer
- Same structure as JoinPage

## Modified File

### 8. `src/App.tsx`
- Import `Join2Page`
- Add route: `<Route path="/join2" element={<Join2Page />} />`

## Technical Notes
- All components reuse existing UI patterns: `sunny-card`, `font-display`, `font-handwritten`, `bg-sunny-gradient`, `text-gradient`, `inner` container class
- Reuses shared components: Navbar, Footer, StickyCtaBar, SunnyMascot, Button, Accordion
- University/ISIC logo image paths copied from JoinSocialProofSection
- No new dependencies needed

