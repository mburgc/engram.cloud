(function() {
  'use strict';
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  function init() {
    initNewsletterForm();
  }
  
  function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const button = form.querySelector('button');
      const originalText = button.textContent;
      
      button.disabled = true;
      button.textContent = 'Subscribing...';
      
      setTimeout(function() {
        button.textContent = 'Subscribed';
        button.style.background = '#30d158';
        
        setTimeout(function() {
          button.disabled = false;
          button.textContent = originalText;
          button.style.background = '';
          form.reset();
        }, 2000);
      }, 1000);
    });
  }
})();
