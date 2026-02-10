# engram.cloud

Advanced Cognitive Architecture for Artificial Intelligence Systems

## Overview

ENGRAM is an artificial intelligence platform integrating advanced neural architecture, 
holographic memory, and abstract reasoning capabilities into a unified cognitive system.

## Site Structure

This repository contains the static website for ENGRAM, built with Jekyll and 
automatically deployed to GitHub Pages.

### Technologies

- **Jekyll**: Static site generator
- **Sass**: CSS preprocessor
- **GitHub Pages**: Hosting and continuous deployment
- **GitHub Actions**: Build automation

### File Structure

```
.
├── _config.yml           # Jekyll configuration
├── _layouts/             # HTML templates
│   └── default.html      # Main layout
├── _sass/                # Sass stylesheets
│   └── main.scss         # Main styles
├── assets/               # Static assets
│   ├── css/              # Stylesheets
│   ├── js/               # JavaScript
│   └── images/           # Images
├── index.html            # Main page
└── .github/workflows/    # GitHub Actions
    └── jekyll-gh-pages.yml
```

## Local Development

### Requirements

- Ruby 2.7 or higher
- Bundler

### Installation

```bash
# Install dependencies
bundle install

# Development server
bundle exec jekyll serve

# With live reload
bundle exec jekyll serve --livereload
```

The site will be available at `http://localhost:4000`

## Deployment

The site deploys automatically to GitHub Pages when pushing to the `main` branch.

## License

© 2026 ENGRAM Systems. All rights reserved.

