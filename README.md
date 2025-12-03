# Personal Research Website

A modern, scientific yet fun personal research website built with Python and Pelican static site generator, designed for GitHub Pages deployment.

## 🚀 Features

- **Scientific Aesthetic**: Clean, professional academic layout
- **ML/AI Theming**: Neural network background animation, gradient accents
- **Dark Mode**: Toggle-able dark theme with vibrant colors
- **Responsive Design**: Mobile-first approach, works on all devices
- **Interactive Elements**: Smooth animations, hover effects, BibTeX copy functionality
- **SEO Optimized**: Proper meta tags, semantic HTML

## 📋 Prerequisites

- Python 3.8 or higher
- Git
- A GitHub account

## 🛠️ Local Development Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/personal_website.git
cd personal_website
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

### 3. Activate the virtual environment

**Windows:**
```bash
venv\Scripts\activate
```

**macOS/Linux:**
```bash
source venv/bin/activate
```

### 4. Install dependencies

```bash
pip install -r requirements.txt
```

### 5. Build and serve the site locally

**Using Make (recommended):**
```bash
make devserver
```

**Or manually:**
```bash
pelican content -s pelicanconf.py
pelican --listen --autoreload
```

The site will be available at `http://localhost:8000`

## 📝 Customizing Content

### Update Your Personal Information

1. **Edit `pelicanconf.py`:**
   - Change `AUTHOR` to your name
   - Update `POSITION` with your current role
   - Update `LOCATION` with your city/country
   - Update `SOCIAL` links with your profiles

2. **Edit Content Pages:**
   - `content/pages/about.md` - Your bio and background
   - `content/pages/publications.md` - Your research publications
   - `content/pages/research-interests.md` - Your research focus
   - `content/pages/cv.md` - Your CV/resume

3. **Add Your Profile Photo:**
   - Place your photo in `content/images/profile.jpg`
   - Update the emoji placeholder in templates if needed

### Adding Publications

Edit `content/pages/publications.md` and follow the existing format:

```markdown
### Your Paper Title

**Conference/Journal Name Year**

**Authors:** Your Name, Collaborator A

Brief description...

#### Abstract

Full abstract text...

[📄 Download PDF](link) | [🔗 arXiv](link)

##### BibTeX Citation

\`\`\`bibtex
@article{yourname2025paper,
  title={Your Paper Title},
  author={Your Name and Collaborator A},
  journal={Journal Name},
  year={2025}
}
\`\`\`
```

## 🚀 Deploying to GitHub Pages

### Option 1: Automated Deployment (Recommended)

The repository includes a GitHub Actions workflow that automatically builds and deploys your site when you push to the `main` branch.

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Push your changes:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Wait for deployment:**
   - Go to the "Actions" tab in your repository
   - Wait for the workflow to complete
   - Your site will be live at `https://yourusername.github.io/personal_website/`

### Option 2: Manual Deployment

```bash
make publish
make github
```

## 📁 Project Structure

```
personal_website/
├── content/
│   ├── pages/
│   │   ├── about.md
│   │   ├── publications.md
│   │   ├── research-interests.md
│   │   └── cv.md
│   └── images/
├── themes/
│   └── ml-researcher/
│       ├── templates/
│       │   ├── base.html
│       │   ├── index.html
│       │   ├── page.html
│       │   └── about.html
│       └── static/
│           ├── css/
│           │   └── style.css
│           └── js/
│               └── main.js
├── .github/
│   └── workflows/
│       └── pelican.yml
├── pelicanconf.py
├── publishconf.py
├── requirements.txt
├── Makefile
└── README.md
```

## 🎨 Customizing the Theme

### Colors

Edit CSS variables in `themes/ml-researcher/static/css/style.css`:

```css
:root {
    --color-primary: #6366f1;
    --color-secondary: #ec4899;
    --color-accent: #14b8a6;
    /* ... more variables */
}
```

### Fonts

The theme uses:
- **Inter** for body text
- **JetBrains Mono** for code

To change fonts, update the Google Fonts link in `themes/ml-researcher/templates/base.html`.

## 🐛 Troubleshooting

### Site not building locally

- Ensure Python 3.8+ is installed: `python --version`
- Ensure all dependencies are installed: `pip install -r requirements.txt`
- Check for errors in your markdown files

### GitHub Pages not updating

- Check the Actions tab for build errors
- Ensure GitHub Pages is enabled in repository settings
- Verify the workflow file is in `.github/workflows/`

### Styles not loading

- Clear your browser cache
- Check that the `SITEURL` in `publishconf.py` matches your GitHub Pages URL
- Verify theme files are in the correct directory

## 📚 Resources

- [Pelican Documentation](https://docs.getpelican.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own use!

---

**Built with 🐍 Python and ✨ ML magic**
