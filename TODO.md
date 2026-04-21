# Xavira Production Fix & Premium Upgrade TODO

Current Status: [0/14] Completed

## Phase 1: Cleanup (Non-breaking) [0/2]
- [ ] 1. Delete Vite/React leftovers: vite.config.ts, src/main.tsx, src/App.tsx, src/index.css, components/Navbar.tsx
- [ ] 2. Verify no build errors after cleanup (npm run build)

## Phase 2: Env & API Safety [0/4]
- [ ] 3. Create .env.local with NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (hardcoded values from src/lib/supabase.ts)
- [ ] 4. Update src/lib/supabase.ts to use process.env.NEXT_PUBLIC_* + types
- [ ] 5. Add try/catch + fallbacks to Supabase calls in src/components/Careers.tsx, Contact.tsx, AdminPanel.tsx
- [ ] 6. npm install && npm run build test

## Phase 3: Loading/Error States [0/4]
- [ ] 7. Create loading.tsx + error.tsx for /product, /pricing, /demo, /about with skeletons/fallbacks
- [ ] 8. Add to app/ directory structure

## Phase 4: Premium UX & Performance [0/3]
- [ ] 9. Add dynamic imports/lazy for heavy components (e.g., charts, particles) in pages
- [ ] 10. Update next.config.js (image optimization, Vercel headers if needed)
- [ ] 11. Global polish: transitions, hovers already good; test mobile

## Phase 5: Testing & Deploy [0/1]
- [ ] 12. Full test: npm run build/start, check no console errors, APIs stable
- [ ] 13. Git commit/push
- [ ] 14. Deploy to Vercel (provide instructions)

**Next Step**: Execute Phase 1 cleanup.

