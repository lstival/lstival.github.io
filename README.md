personal_website/
# Personal Research Website

Modern, high-credibility academic researcher website powered by [Jekyll](https://jekyllrb.com/) and optimized for GitHub Pages. Designed for AI/ML researchers to present a formal identity, research hub, and academic CV.

## 🚀 Features

- **Formal Academic Identity**: Optimized for high-credibility researcher profiles and academic recruitment (EEAT aligned)
- **Research Hub**: Structured sections for Research Areas, Projects, Datasets, and Publications
- **Teaching & Mentorship**: Dedicated tracking for courses (e.g., WUR 2025) and student supervision
- **Academic CV**: Clean HTML mirror of your CV with integrated PDF download
- **Scientific Aesthetic**: Professional layout with a subtle animated neural network background
- **Dark Mode**: Persistent, vertically-aligned theme toggle with smooth transitions
- **SEO Optimized**: Semantic HTML and rigorous keyword metadata for academic indexing

## 📋 Prerequisites

- Ruby 3.1 or newer
- Bundler (`gem install bundler`)
- Git and a GitHub account

## 🛠️ Local Development

1. **Clone the repo**
   ```powershell
   git clone https://github.com/yourusername/personal_website.git
   cd personal_website
   ```

2. **Install gems**
   ```powershell
   bundle install
   ```

3. **Serve locally**
   ```powershell
   bundle exec jekyll serve --livereload --baseurl ""
   ```

   The site is available at `http://localhost:4000` with live reload.

## 📝 Customising Content

Site content lives directly in the top-level HTML files:

- `index.html` – formal landing page and research identity statement
- `about/index.html` – detailed research profile and academic narrative
- `research-areas/index.html` – deep dive into problem scopes and scientific contributions
- `publications/index.html` – standardized publication list with BibTeX support
- `projects/index.html` – technical project descriptions and dataset links
- `teaching/index.html` – teaching experience, courses (e.g., AIN30306), and mentorship
- `cv/index.html` – professional CV mirror with contact details

Assets remain under `images/` and `theme/` just as before, so styling and behaviour stay identical. Update images (profile photo, favicon, PDF, etc.) in `images/` as needed.

## 🚀 Deployment

GitHub Pages builds and deploys automatically via `.github/workflows/github-pages.yml` when you push to `main`.

1. Confirm Pages is enabled in repository settings and uses **GitHub Actions** as the source.
2. Push changes:
   ```powershell
   git add .
   git commit -m "Describe your change"
   git push origin main
   ```
3. Monitor the **Actions** tab. Once the workflow finishes, the site is live at `https://yourusername.github.io/personal_website/` (adjust for custom domains).

## 📁 Project Structure

```

├── 404.html
├── Gemfile
├── _config.yml
├── _layouts/
│   └── default.html
├── about/
│   └── index.html
├── cv/
│   └── index.html
├── images/
│   ├── Leandro_Stival_CV.pdf
│   ├── icon_logo.png
│   └── profile.jpg
├── index.html
├── projects/
│   └── index.html
├── publications/
│   └── index.html
├── research-areas/
│   └── index.html
├── teaching/
│   └── index.html
├── theme/
│   ├── css/style.css
│   └── js/main.js
└── .github/workflows/github-pages.yml
```

## 🎨 Styling & Behaviour

- CSS variables, gradients, and layout are defined in `theme/css/style.css`.
- JavaScript interactions (dark mode, neural network canvas, BibTeX copy helpers) live in `theme/js/main.js`.
- Font loading, metadata, navigation, and footer markup are centralised in `_layouts/default.html`.

## 🐛 Troubleshooting

- **Missing styles/scripts**: Ensure links use the correct base URL; adjust `baseurl` in `_config.yml` as needed for your deployment.
- **Local serve mismatch**: Run `bundle exec jekyll serve --baseurl ""` locally to match root paths.
- **Build failures**: Check the Actions log; run `bundle exec jekyll build` locally to reproduce.

## 📚 Helpful Links

- [Jekyll Docs](https://jekyllrb.com/docs/)
- [GitHub Pages + Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)
- [Liquid Templating Reference](https://shopify.github.io/liquid/)

---

**Built with Jekyll and ✨ ML magic**
\`\`\`
