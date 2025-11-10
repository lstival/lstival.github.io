// Publications page JavaScript functionality
(function() {
  'use strict';

  // Wait for DOM to be ready
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  // Toggle publication details
  function toggleDetails(pubId) {
    const detailsDiv = document.getElementById('details-' + pubId);
    
    if (!detailsDiv) {
      console.error('Details div not found for pub ID:', pubId);
      return;
    }
    
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

  // Copy BibTeX to clipboard
  function copyBibtex(pubId) {
    const bibtexElement = document.getElementById('bibtex-' + pubId);
    
    if (!bibtexElement) {
      console.error('BibTeX element not found for pub ID:', pubId);
      return;
    }
    
    const bibtexText = bibtexElement.textContent;
    const button = event.target;
    const originalText = button.textContent;
    
    // Try modern clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(bibtexText).then(function() {
        showCopySuccess(button, originalText);
      }).catch(function(err) {
        console.error('Clipboard API failed:', err);
        fallbackCopy(bibtexText, button, originalText);
      });
    } else {
      // Fallback for older browsers
      fallbackCopy(bibtexText, button, originalText);
    }
  }

  // Show copy success feedback
  function showCopySuccess(button, originalText) {
    button.textContent = '✅ Copied!';
    button.style.backgroundColor = '#28a745';
    
    setTimeout(() => {
      button.textContent = originalText;
      button.style.backgroundColor = '#6c757d';
    }, 2000);
  }

  // Fallback copy method for older browsers
  function fallbackCopy(text, button, originalText) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      showCopySuccess(button, originalText);
    } catch (err) {
      console.error('Fallback copy failed:', err);
      button.textContent = '❌ Copy failed';
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    }
    
    document.body.removeChild(textArea);
  }

  // Initialize when DOM is ready
  ready(function() {
    // Make functions globally available
    window.toggleDetails = toggleDetails;
    window.copyBibtex = copyBibtex;

    // Add event listeners as backup
    document.addEventListener('click', function(e) {
      // Handle publication card clicks
      if (e.target.closest('.publication-card') && !e.target.closest('.publication-actions')) {
        const card = e.target.closest('.publication-card');
        const pubId = card.getAttribute('onclick');
        if (pubId) {
          const match = pubId.match(/toggleDetails\('([^']+)'\)/);
          if (match) {
            e.preventDefault();
            toggleDetails(match[1]);
          }
        }
      }
      
      // Handle copy button clicks
      if (e.target.matches('button[onclick*="copyBibtex"]')) {
        const onclick = e.target.getAttribute('onclick');
        const match = onclick.match(/copyBibtex\('([^']+)'\)/);
        if (match) {
          e.preventDefault();
          e.stopPropagation();
          copyBibtex(match[1]);
        }
      }
    });
  });

})();