---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<p style="color: #0066cc; font-size: 18px;">📖 Here are my research publications:</p>

{% if site.author.googlescholar %}
  You can also find my articles on <u><a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% assign publications = site.data.publications.publications | sort: "date" | reverse %}

<div class="publication-grid">
{% for pub in publications %}
  <article class="publication-card" onclick="toggleDetails('{{ pub.id }}')">
    <div class="publication-card__body">
      <h3 class="publication-card__title">{{ pub.title }}</h3>
      {% if pub.venue or pub.year %}
        <p class="publication-card__meta">
          {% if pub.venue %}<span class="publication-card__venue">{{ pub.venue }}</span>{% endif %}
          {% if pub.year %}<span class="publication-card__year">{{ pub.year }}</span>{% endif %}
        </p>
      {% endif %}
      {% if pub.authors %}
        <p class="publication-card__authors"><strong>Authors:</strong> {{ pub.authors }}</p>
      {% endif %}
      {% if pub.abstract %}
        <p class="publication-card__excerpt">{{ pub.abstract | strip_html | strip_newlines | truncate: 140 }}</p>
      {% endif %}
      
      <div class="publication-card__hint">
        <span class="click-hint">Click to view details</span>
      </div>
    </div>
    
    <!-- Detailed view (initially hidden) -->
    <div class="publication-details" id="details-{{ pub.id }}" style="display: none;">
      <div class="publication-details__content">
        <h4>Abstract</h4>
        <p class="publication-abstract">{{ pub.abstract }}</p>
        
        {% if pub.volume or pub.pages or pub.publisher %}
          <div class="publication-metadata">
            {% if pub.volume %}<p><strong>Volume:</strong> {{ pub.volume }}</p>{% endif %}
            {% if pub.pages %}<p><strong>Pages:</strong> {{ pub.pages }}</p>{% endif %}
            {% if pub.publisher %}<p><strong>Publisher:</strong> {{ pub.publisher }}</p>{% endif %}
          </div>
        {% endif %}
        
        <div class="publication-actions">
          {% if pub.paperurl and pub.paperurl != '' %}
            <a href="{{ pub.paperurl }}" target="_blank" rel="noopener" class="btn btn--primary" onclick="event.stopPropagation();">
              📄 Download PDF
            </a>
          {% endif %}
          
          <button class="btn btn--secondary" onclick="copyBibtex('{{ pub.id }}'); event.stopPropagation();">
            📋 Copy BibTeX
          </button>
        </div>
        
        <!-- BibTeX Citation -->
        <div class="publication-bibtex">
          <h5>BibTeX Citation</h5>
          <pre id="bibtex-{{ pub.id }}"><code>{{ pub.bibtex }}</code></pre>
        </div>
      </div>
    </div>
  </article>
{% endfor %}
</div>

<script src="{{ '/assets/js/publications.js' | relative_url }}"></script>
