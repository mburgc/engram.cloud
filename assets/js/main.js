(function() {
  'use strict';

  const CONFIG = {
    colors: {
      cyan: '#00d4ff',
      magenta: '#ff006e',
      violet: '#8338ec',
      gold: '#ffd700',
      background: '#0a0a0f'
    }
  };

  function initHeroNetwork() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let animationId;
    let mouse = { x: null, y: null };

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? CONFIG.colors.cyan : CONFIG.colors.violet;
        this.glow = Math.random() * 10 + 5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            const force = (150 - distance) / 150;
            this.vx += dx * force * 0.001;
            this.vy += dy * force * 0.001;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = this.glow;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function init() {
      particles = [];
      const particleCount = Math.min(Math.floor(width * height / 15000), 100);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < particles.length; j++) {
          if (connections >= 3) break;
          
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            connections++;
            const opacity = (1 - distance / 120) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      drawConnections();
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      animationId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
      resize();
      init();
    });

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    resize();
    init();
    animate();

    window.addEventListener('beforeunload', () => {
      cancelAnimationFrame(animationId);
    });
  }

  function initMetricsCounter() {
    const metrics = document.querySelectorAll('.metric-value[data-count]');
    
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const target = parseFloat(element.getAttribute('data-count'));
          const suffix = element.getAttribute('data-suffix') || '';
          const duration = 2000;
          const start = performance.now();
          
          function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = target * easeProgress;
            
            if (target % 1 === 0) {
              element.textContent = Math.floor(current).toLocaleString() + suffix;
            } else {
              element.textContent = current.toFixed(4) + suffix;
            }
            
            if (progress < 1) {
              requestAnimationFrame(update);
            }
          }
          
          requestAnimationFrame(update);
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    metrics.forEach(metric => observer.observe(metric));
  }

  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
  }

  function initNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.toc-list a');

    const observerOptions = {
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
              link.style.color = CONFIG.colors.cyan;
            } else {
              link.style.color = '';
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
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
        button.textContent = 'Subscribed!';
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

  function initPipelineAnimation() {
    const pipeline = document.querySelector('.pipeline');
    if (!pipeline) return;

    const steps = pipeline.querySelectorAll('.pipeline-step');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let step = 0;
          const interval = setInterval(() => {
            if (step >= steps.length) {
              clearInterval(interval);
              return;
            }
            steps[step].style.borderColor = 'rgba(0, 212, 255, 0.5)';
            steps[step].style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.2)';
            step++;
          }, 500);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(pipeline);
  }

  function initCodeBlocks() {
    document.querySelectorAll('.code-block').forEach(block => {
      const copyButton = document.createElement('button');
      copyButton.className = 'code-copy-btn';
      copyButton.innerHTML = '📋';
      copyButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        border-radius: 4px;
        padding: 5px 10px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s;
        color: white;
        font-size: 14px;
      `;
      
      block.style.position = 'relative';
      block.appendChild(copyButton);
      
      block.addEventListener('mouseenter', () => {
        copyButton.style.opacity = '1';
      });
      
      block.addEventListener('mouseleave', () => {
        copyButton.style.opacity = '0';
      });
      
      copyButton.addEventListener('click', () => {
        const code = block.querySelector('code, pre')?.textContent || block.textContent;
        navigator.clipboard.writeText(code.replace('📋', '').trim());
        copyButton.innerHTML = '✓';
        setTimeout(() => {
          copyButton.innerHTML = '📋';
        }, 2000);
      });
    });
  }

  function init() {
    initHeroNetwork();
    initMetricsCounter();
    initScrollReveal();
    initSmoothScroll();
    initNavigation();
    initNewsletterForm();
    initPipelineAnimation();
    initCodeBlocks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
