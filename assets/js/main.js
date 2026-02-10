(function() {
  'use strict';
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  function init() {
    initNewsletterForm();
    initScrollAnimations();
    initTypingEffect();
  }
  
  function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = form.querySelector('input[type="email"]').value;
      const button = form.querySelector('button');
      const originalText = button.textContent;
      
      button.disabled = true;
      button.textContent = 'Procesando...';
      
      setTimeout(function() {
        button.textContent = '¡Suscrito!';
        button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        setTimeout(function() {
          button.disabled = false;
          button.textContent = originalText;
          button.style.background = '';
          form.reset();
        }, 2000);
      }, 1000);
    });
  }
  
  function initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card').forEach(function(card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
  }
  
  function initTypingEffect() {
    const codePreview = document.querySelector('.code-preview');
    if (!codePreview) return;
    
    const codeContent = codePreview.querySelector('.code-content');
    if (!codeContent) return;
    
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.textContent = '█';
    cursor.style.animation = 'cursorBlink 1s step-end infinite';
    cursor.style.color = 'var(--color-accent-cyan)';
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes cursorBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
    `;
    document.head.appendChild(style);
    
    codeContent.appendChild(cursor);
    
    setTimeout(function() {
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    }, 5000);
  }
  
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
})();
