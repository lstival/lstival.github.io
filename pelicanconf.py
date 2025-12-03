#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = 'Your Name'
SITENAME = 'Research Portfolio'
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
    ('Email', 'mailto:your.email@example.com'),
    ('GitHub', 'https://github.com/yourusername'),
    ('Google Scholar', 'https://scholar.google.com/'),
    ('LinkedIn', 'https://www.linkedin.com/in/yourprofile'),
    ('ResearchGate', 'https://www.researchgate.net/profile/yourprofile'),
    ('ORCID', 'https://orcid.org/0000-0000-0000-0000'),
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
SITE_DESCRIPTION = 'Personal research website showcasing publications, research interests, and CV'
SITE_KEYWORDS = 'machine learning, deep learning, computer vision, research, AI'

# Custom settings
PROFILE_IMAGE = 'images/profile.jpg'
LOCATION = 'Your City, Country'
POSITION = 'Ph.D. Researcher in Machine Learning'
INSTITUTION = 'Your University'
