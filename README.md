# ratneshwaran.github.io

Live: https://ratneshwaran.github.io/

I built this lightweight, accessible personal site to share my work in healthcare AI, mental health, selected genomics, and open-source projects.

## What I focused on
- Semantic, accessible HTML with a skip link and keyboard-friendly controls
- Dark and light themes that follow system preference, with theme-color meta tags for mobile browser chrome
- Mobile-first responsive layout with a clean two-column hero on desktop
- Icon-based top navigation and a direct PDF CV link
- SEO metadata and schema.org Person markup
- Service worker for offline/low-bandwidth cache-first support
- Tech stack displayed as pill/tag badges; accent underlines on section headings
- Card hover effects and experience timeline styling

## Content
- TA experience: COMP0190 AI for Domain Specific Applications Project at UCL
- "Beyond the Lab" section covering teaching, long-distance cycling, duathlons, and charity challenges

## Project structure
- `index.html` - site markup
- `styles.css` - styles (light and dark, responsive)
- `script.ts` - TypeScript source for interactive behaviour
- `script.js` - compiled ES5 output
- `service-worker.js` - offline cache-first service worker
- `R_Maheswaran_CV_2026_Research.pdf` - my CV
- `IMG_8183.jpg` - photo used in the hero

## Run locally
Open `index.html` directly in a browser or serve the folder:

```powershell
cd C:\Users\ratne\Downloads\Website_Ratnesh
powershell -Command "Start-Process http://localhost:8080"; python -m http.server 8080
```

## Deployment
This is a GitHub Pages user site. Pushing to `main` updates `https://ratneshwaran.github.io/` automatically.

```powershell
git add .
git commit -m "Update site"
git push
```

## Credits
- Icons are native emoji for performance
- Built by and © Ratneshwaran Maheswaran
