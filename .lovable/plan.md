

# Optimize /join Page + Add Compact Meet-the-Team Section

## Overview
Apply all the visual polish from the earlier approved plan (larger handwritten fonts, bigger headlines, university logos) AND add a single compact side-by-side section for Dominika and Sunny -- keeping it lightweight so it doesn't distract from the conversion flow.

## Changes to Existing Files

### 1. `src/components/join/JoinHeroSection.tsx`
- Bump headline to `lg:text-7xl`
- Increase sub-headline to `sm:text-xl`
- Make bullet text `text-base` instead of `text-sm`

### 2. `src/components/join/JoinProblemSection.tsx`
- Increase punchline `font-handwritten` from `text-xl sm:text-2xl` to `text-2xl sm:text-3xl`
- Bump emoji size to `text-6xl`, card titles to `text-xl`

### 3. `src/components/join/JoinSolutionSection.tsx`
- Increase value callout `font-handwritten` to `text-2xl sm:text-3xl`
- Bump step titles to `text-xl`, descriptions to `text-base`

### 4. `src/components/join/JoinSocialProofSection.tsx`
- Increase testimonial quotes to `text-lg`, proof point text to `text-base`
- Add university logo strip (Harvard, Stanford, Yale, Princeton, Columbia, Berkeley, UPenn, Cornell) using existing uploaded images with grayscale hover effect
- Keep ISIC/UNESCO logos, add "Students from top universities trust us" label

### 5. `src/components/join/JoinFaqSection.tsx`
- Increase intro `font-handwritten` to `text-xl sm:text-2xl`

### 6. `src/components/join/JoinFinalCtaSection.tsx`
- Increase micro-copy `font-handwritten` to `text-xl sm:text-2xl`
- Make reinforcement bullet text `text-lg`

## New File

### 7. `src/components/join/JoinMeetTheTeamSection.tsx`
One compact section with a 2-column grid (`md:grid-cols-2`), stacked on mobile:

**Left card -- Dominika, Founder**
- Small polaroid photo (reusing existing `/lovable-uploads/c38cdfa9-d9f7-4717-89e4-6cce94569408.jpg`)
- "Dominika, Founder"
- One-liner: "30+ countries. 3 study-abroad programs. Built this because she wished it existed."

**Right card -- Sunny, AI Travel Buddy**
- `SunnyMascot` at `md` size
- "Sunny, Your AI Travel Buddy"
- One-liner: "Available 24/7 to answer questions, help you plan, and keep you confident on the road."

**Design:**
- Minimal padding (`py-10 md:py-14`)
- Small muted label: "Who's behind it"
- Simple cards with subtle borders, centered content
- Compact and fast to scan

## Modified File

### 8. `src/pages/JoinPage.tsx`
- Import `JoinMeetTheTeamSection`
- Place between `JoinSocialProofSection` and `JoinFaqSection`

## Section Order
1. JoinHeroSection
2. JoinProblemSection
3. JoinSolutionSection
4. JoinSocialProofSection (with university logos)
5. **JoinMeetTheTeamSection** (new -- compact side-by-side)
6. JoinFaqSection
7. JoinFinalCtaSection

