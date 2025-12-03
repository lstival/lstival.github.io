personal_website/
# Personal Research Website

Modern, scientific yet fun personal research website now powered by [Jekyll](https://jekyllrb.com/) and ready for GitHub Pages.

## 🚀 Features

- **Scientific aesthetic**: Clean, professional academic layout with playful details
- **ML/AI theming**: Animated neural network background and gradient highlights
- **Dark mode**: Persistent theme toggle with smooth transitions
- **Responsive design**: Polished experience across devices
- **Interactive extras**: BibTeX copy buttons, smooth scrolling, subtle animations
- **SEO ready**: Semantic markup and structured metadata throughout

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

- `index.html` – home hero and quick bio
- `about/index.html` – detailed bio and profile interaction
- `publications/index.html` – publication list with BibTeX blocks
- `research-interests/index.html` – research focus and philosophy
- `cv/index.html` – CV, downloadable PDF links, contact info

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
│   ├── 404-lost-in-latent-space.png
│   ├── Leandro_Stival_CV.pdf
│   ├── icon_logo.png
│   └── profile.jpg
├── index.html
├── publications/
│   └── index.html
├── research-interests/
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

- **Missing styles/scripts**: Ensure links use the correct base URL; by default `_config.yml` sets `baseurl: "/my_website"` for project pages. Adjust for custom domains.
- **Local serve mismatch**: Run `bundle exec jekyll serve --baseurl ""` locally to match root paths.
- **Build failures**: Check the Actions log; run `bundle exec jekyll build` locally to reproduce.

## 📚 Helpful Links

- [Jekyll Docs](https://jekyllrb.com/docs/)
- [GitHub Pages + Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)
- [Liquid Templating Reference](https://shopify.github.io/liquid/)

---

**Built with Jekyll and ✨ ML magic**
\`\`\`
