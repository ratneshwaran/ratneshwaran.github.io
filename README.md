# ratneshwaran.github.io

Live: https://ratneshwaran.github.io/

I built this lightweight, accessible personal site to share my research, experience, and projects in healthcare AI, agentic AI, foundation models, NLP, and computational genomics.

## About me
I'm an AI Researcher at UCL Centre for AI and MSc AI for Biomedicine and Healthcare student (predicted Distinction). My work spans:
- **Agentic AI & conversational agents** — multilingual mental health agents (LangGraph, CrewAI) in collaboration with Freedom from Torture
- **Computational genomics** — zero-shot cell annotation with foundation models (scBERT, scGPT, Geneformer, LangCell) at UCL Genetics Institute
- **Clinical NLP** — aspect-based sentiment analysis with adversarial BERT; pre-print in progress
- **Teaching** — TA for COMP0190: AI for Domain Specific Applications Project at UCL

## Experience
- **UCL Centre for AI** – Agentic AI Researcher (Oct 2025–Present)
- **UCL** – Teaching Assistant, COMP0190 (2026–Present)
- **Secrier Lab, UCL Genetics Institute** – AI & Genomics Researcher (Mar–Sep 2025)
- **Open-Source Assistive Devices (OPAD)** – President, University of Nottingham (2022–2024)
- **40seconds.org (Ratneshwaran Foundation)** – Founder & CEO (2020–2023)

## Featured projects
- **Grounded by Design** (2026) — in progress
- **LitAgent** (2025) — LangGraph multi-agent literature review system across arXiv, PubMed, and Crossref
- **BERT Aspect-Based Sentiment Analysis** (2025) — adversarial training surpassing prior state-of-the-art
- **Zero-Shot Cell Annotation** (2025) — single-cell RNA-seq classification across cancer datasets
- **AI College Assistance App** (2025) — GPT-4 essay feedback, React/FastAPI/PostgreSQL full-stack
- **Eva – Empathetic AI Assistant** (2025) — open-source mental health support chatbot
- **Python Simplified** (2020) — book distributed to 30,000+ underprivileged students

## Honours
- Vice-Chancellor's Medal (Top 0.1%), University of Nottingham (2024)
- EEE Undergraduate Studies Award, University of Nottingham (2024)
- Nottingham Advantage Awards – Student Leader (2024); OPAD & Peer Mentor (2023)
- Union Prize & Student Representative of the Year (2022)
- Top 6 Teen Heroes, India (2021)
- Speaker – World Summit AI, TEDx, and university conferences

## Beyond the lab
Teaching, long-distance cycling (hundreds of km at a stretch), duathlons, and charity endurance challenges.

## What I focused on (site)
- Semantic, accessible HTML with a skip link and keyboard-friendly controls
- Dark and light themes that follow system preference, with theme-color meta tags for mobile browser chrome
- Mobile-first responsive layout with a clean two-column hero on desktop
- Icon-based top navigation and a direct PDF CV link
- SEO metadata and schema.org Person markup
- Service worker for offline/low-bandwidth cache-first support
- Tech stack displayed as pill/tag badges; accent underlines on section headings
- Card hover effects and experience timeline styling

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
