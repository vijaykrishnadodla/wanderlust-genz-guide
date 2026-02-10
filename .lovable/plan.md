

# Add /join and /join3 to Navbar Menu

## Overview
Add two new navigation items to the Navbar for the Join and Join3 landing pages. These are direct page links (not anchor scroll targets), so they will work like the existing "Free Resources" link.

## Changes

### `src/components/Navbar.tsx`

**1. Import `MapPin` icon** (already imported but unused) -- will use it for one of the links. Also import `Plane` from lucide-react for the second link.

**2. Add two new items to the `navItems` array** (lines 25-31):
- `{ name: 'Join', path: '/join', icon: <MapPin /> }` -- links to the /join landing page
- `{ name: 'Join V3', path: '/join3', icon: <Sparkles /> }` -- links to the /join3 landing page

These will automatically render in both desktop and mobile menus since both use the `navItems` array.

No other files need changes.

