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

<style>
.publication-card {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.publication-card:hover {
  border-color: #0366d6;
  box-shadow: 0 4px 12px rgba(3, 102, 214, 0.15);
  transform: translateY(-2px);
}

.publication-card__title {
  margin-bottom: 0.5rem;
  color: #0366d6;
  transition: color 0.2s ease;
}

.publication-card:hover .publication-card__title {
  color: #0256cc;
}

.publication-card__meta {
  margin-bottom: 0.5rem;
  color: #586069;
  font-style: italic;
}

.publication-card__authors {
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  color: #24292e;
}

.publication-card__excerpt {
  margin-bottom: 1rem;
  color: #586069;
  line-height: 1.5;
}

.publication-card__hint {
  text-align: center;
  margin-top: 1rem;
}

.click-hint {
  color: #0366d6;
  font-size: 0.85rem;
  font-style: italic;
  opacity: 0.7;
}

.publication-details {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.publication-details__content h4 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.publication-details__content h5 {
  color: #2d3748;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
  font-size: 1rem;
}

.publication-abstract {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.publication-metadata {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
}

.publication-metadata p {
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-size: 0.9rem;
}

.publication-actions {
  margin-bottom: 1.5rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-block;
}

.btn--primary {
  background-color: #0366d6;
  color: white;
}

.btn--primary:hover {
  background-color: #0256cc;
  color: white;
}

.btn--secondary {
  background-color: #6c757d;
  color: white;
}

.btn--secondary:hover {
  background-color: #5a6268;
}

.publication-bibtex pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 0.85rem;
  margin: 0;
}

.publication-bibtex code {
  color: #e2e8f0;
}

/* Animation for expanding details */
.publication-details {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 1000px;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .publication-card {
    padding: 1rem;
  }
  
  .publication-actions {
    flex-direction: column;
  }
  
  .btn {
    text-align: center;
  }
}
</style>

<script>
function toggleDetails(pubId) {
  const detailsDiv = document.getElementById('details-' + pubId);
  
  if (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
    // Hide all other open details first
    const allDetails = document.querySelectorAll('.publication-details');
    allDetails.forEach(detail => {
      if (detail.id !== 'details-' + pubId) {
        detail.style.display = 'none';
      }
    });
    
    // Show this one
    detailsDiv.style.display = 'block';
  } else {
    // Hide this one
    detailsDiv.style.display = 'none';
  }
}

function copyBibtex(pubId) {
  const bibtexElement = document.getElementById('bibtex-' + pubId);
  const bibtexText = bibtexElement.textContent;
  
  navigator.clipboard.writeText(bibtexText).then(function() {
    // Show temporary success message
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = '✅ Copied!';
    button.style.backgroundColor = '#28a745';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '#6c757d';
    }, 2000);
  }).catch(function(err) {
    console.error('Could not copy text: ', err);
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = bibtexText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = '✅ Copied!';
    button.style.backgroundColor = '#28a745';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '#6c757d';
    }, 2000);
  });
}
</script>
