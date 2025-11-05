# Quick Fixes & Immediate Improvements

## 🎯 High-Impact Quick Fixes (Can be done now)

### 1. Fix Active Navigation State
**Issue:** Navigation active state doesn't persist on page refresh  
**File:** `app/components/app-bar.tsx`  
**Fix:** Use `usePathname()` from Next.js instead of useState

```typescript
import { usePathname } from 'next/navigation';

// Replace:
const [activeTab, setActiveTab] = useState<string>('/');

// With:
const pathname = usePathname();
const activeTab = pathname;
```

### 2. Add Lazy Loading to Video Embeds
**Issue:** All videos load immediately, slowing page load  
**File:** `app/components/video.tsx`  
**Fix:** Add loading="lazy" to iframe

```typescript
<iframe
  loading="lazy"  // Add this
  width="1236"
  height="695"
  // ... rest of props
/>
```

### 3. Fix Theme Flash
**Issue:** Theme flashes wrong color on initial load  
**File:** `app/layout.tsx`  
**Fix:** Add theme script before body

### 4. Improve Image Optimization
**Issue:** Banner uses CSS background-image instead of Next.js Image  
**File:** `app/home/page.tsx` (line 30)  
**Fix:** Replace with Next.js Image component

### 5. Add Missing Security Attributes
**Issue:** Some external links missing security attributes  
**Files:** Multiple files with external links  
**Fix:** Ensure all `target="_blank"` have `rel="noopener noreferrer"`

### 6. Remove Commented Code
**Issue:** Commented code in video.tsx and elsewhere  
**Files:** `app/components/video.tsx`, `app/components/app-bar.tsx`  
**Fix:** Remove commented code

### 7. Add Proper Alt Text
**Issue:** Some images have generic alt text  
**File:** `app/home/page.tsx` (line 117)  
**Fix:** Update alt text to be descriptive in Bengali/English

### 8. Fix ARIA Labels
**Issue:** Icon buttons missing aria-labels  
**File:** `app/components/app-bar.tsx`  
**Fix:** Add `aria-label` to IconButtons

---

## 📋 Detailed Improvement List

See `IMPROVEMENTS.md` for comprehensive suggestions organized by category:
- Performance (images, fonts, code splitting)
- SEO (metadata, structured data, sitemap)
- Accessibility (ARIA, keyboard navigation, contrast)
- Code quality (TypeScript, error handling, organization)
- UX (navigation, loading states, responsive design)
- Security (CSP, external links, validation)

---

## 🚀 Implementation Priority

### Week 1 (Quick Wins)
1. Fix active navigation state
2. Add lazy loading to videos
3. Remove commented code
4. Add missing aria-labels
5. Fix external link security

### Week 2 (Performance)
1. Optimize images (banner, bookmarks)
2. Improve font loading
3. Add error boundaries
4. Implement proper loading states

### Week 3 (SEO & Accessibility)
1. Add comprehensive metadata
2. Implement structured data
3. Improve accessibility
4. Add sitemap

### Week 4 (Polish)
1. Code cleanup and organization
2. Add analytics
3. Performance testing
4. Browser compatibility testing

---

## 💡 Key Areas for Immediate Attention

1. **Performance**: Videos loading all at once
2. **Navigation**: Active state not syncing with route
3. **SEO**: Missing Open Graph and structured data
4. **Accessibility**: Missing ARIA labels on buttons
5. **Code Quality**: Commented code and unused components

