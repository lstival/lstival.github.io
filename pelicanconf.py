#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = 'Leandro Stival'
SITENAME = 'Leandro Stival'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'Europe/Amsterdam'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Social widget
SOCIAL = (
    ('Email', 'mailto:leandro.stival@wur.nl'),
    ('GitHub', 'https://github.com/lstival'),
    ('Google Scholar', 'https://scholar.google.com/citations?user=Bw3dn34AAAAJ&hl=en'),
    ('LinkedIn', 'https://www.linkedin.com/in/leandro-stival-63651ba0'),
    ('ResearchGate', 'https://www.researchgate.net/profile/Leandro-Stival-3'),
    ('ORCID', 'https://orcid.org/0000-0002-3379-6813'),
)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

# Theme settings
THEME = 'themes/ml-researcher'

# Menu items
DISPLAY_PAGES_ON_MENU = True
DISPLAY_CATEGORIES_ON_MENU = False

# Static paths
STATIC_PATHS = ['images', 'extra']

# Extra path metadata - copies 404.html to root of output
EXTRA_PATH_METADATA = {
    'extra/404.html': {'path': '404.html'},
}

# Treat standalone HTML files as static assets
READERS = {
    'html': None,
    'htm': None,
}

# Page settings
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

# Article settings (we won't use articles, only pages)
ARTICLE_SAVE_AS = ''
ARTICLE_URL = ''

# Direct templates
DIRECT_TEMPLATES = ['index']

# Index page
INDEX_SAVE_AS = 'index.html'

# Author and category pages (disabled)
AUTHOR_SAVE_AS = ''
CATEGORY_SAVE_AS = ''
TAG_SAVE_AS = ''

# Site metadata
SITE_DESCRIPTION = 'Leandro Stival - Ph.D. in Computer Science specializing in Self-Supervised Learning'
SITE_KEYWORDS = 'machine learning, deep learning, computer vision, video colorization, self-supervised learning, research, AI'

# Custom settings
PROFILE_IMAGE = 'images/profile.jpg'
LOCATION = 'Wageningen, Netherlands'
POSITION = 'Ph.D. in Computer Science'
INSTITUTION = 'Wageningen University & Research'
FAVICON = 'images/icon_logo.png'
