## 1. Nav cleanup (`src/components/site-chrome.tsx`)
- Remove `children` from the "Glory Days" and "Team Photos" nav entries so both are plain links.
- Remove "Club Honors" and "Individual Honors" from the "Information" dropdown children.

## 2. Team Photos page (`src/routes/photos.tsx`)
- Replace the 5 era entries with 3 sections: **Early Days**, **Continued Growth**, **Current Times**.
- Distribute existing photos across these 3 sections (split the current pool roughly evenly; keep all 10 photos in use).
- Remove the sticky era-jump nav bar (since dropdown is gone and there are fewer sections).
- Update section IDs to `early`, `growth`, `current`.

## 3. Glory Days page (`src/routes/glory-days.tsx`)
- Keep existing 2001 and 2018 chapter sections.
- Add two new sections merged in from Honors: **Club Honors** (list of years + titles) and **Individual Honors** (year, name, honor).
- Style consistent with Glory Days aesthetic (dark navy / parchment alternating).

## 4. Honors route (`src/routes/honors.tsx`)
- Delete the file since content is merged into Glory Days. Any leftover deep links (`/honors`, `/honors#individual`) are already removed from nav in step 1.

## 5. Page title sizing (`src/components/site-chrome.tsx` → `PageHeader`)
- Reduce the `h1` clamp from `clamp(2rem, 6.5vw, 7rem)` to `clamp(1.75rem, 4.5vw, 4.5rem)` and remove `whitespace-nowrap overflow-hidden` so long titles wrap cleanly and fit fully on the page.

## 6. Teams page (`src/routes/teams.tsx`)
- Replace the 3 teams with 5 teams reflecting accurate names: **MHD FC O30's**, **O40's**, **O48's**, **O55's**, **O68's**.
- Update body copy, league descriptions, and the intro subtitle to reference "five teams" across age divisions instead of "three teams / First XI / Over-40 / Beverly affiliate".
- Keep the same card layout; use placeholder "TBD" for captains/pitches where specifics aren't known, preserving existing structure.

## Notes
- No backend or data changes; presentation only.
- After deleting `honors.tsx`, the router will regenerate `routeTree.gen.ts` automatically.
