# ratneshwaran.github.io

Live: https://ratneshwaran.github.io/

I built this lightweight, accessible personal site to share my work in healthcare AI, mental health, selected genomics, and open-source projects.

## What I focused on
- Semantic, accessible HTML with a skip link and keyboard-friendly controls
- Dark and light themes that follow system preference
- Mobile-first responsive layout with a clean two-column hero on desktop
- Icon-based top navigation and a direct PDF CV link
- SEO metadata and schema.org Person markup

## Project structure
- `index.html` - site markup
- `styles.css` - styles (light and dark, responsive)
- `R_Maheswaran_CV_2025_V5.pdf` - my CV
- `IMG_8183.jpg` - photo used in the hero

## Run locally
Open `index.html` directly in a browser or serve the folder:

```powershell
cd C:\Users\ratne\Downloads\Website_Ratnesh
powershell -Command "Start-Process http://localhost:8080"; python -m http.server 8080
```

## Deploy
This is a GitHub Pages user site. Pushing to `main` updates `https://ratneshwaran.github.io/` automatically.

```powershell
git add .
git commit -m "Update site"
git push
```

## Editing notes
- I keep the intro and projects in `index.html`
- I add awards and experience in their sections
- I avoid em dashes - prefer hyphens or colons

## Credits
- Icons are native emoji for performance
- Built by and © Ratneshwaran Maheswaran
