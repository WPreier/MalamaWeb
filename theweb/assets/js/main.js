document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const header = document.querySelector('header');
  const saved = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', saved);
  updateIcon(saved);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateIcon(next);
    });
  }

  function updateIcon(theme) {
    if (!toggle) return;
    const isDark = theme === 'dark';
    toggle.innerHTML = isDark
      ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
      : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5Z"/></svg>';
    toggle.setAttribute('aria-label', isDark ? 'Light Mode' : 'Dark Mode');
  }

  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }
  }

  const row = document.getElementById('fit-row');
  const slider = document.getElementById('bubble-slider');
  if (row && slider) {
    const bubbles = [...row.querySelectorAll('.bubble')];
    function moveTo(x) {
      const rect = row.getBoundingClientRect();
      const centers = bubbles.map((b) => {
        const r = b.getBoundingClientRect();
        return r.left - rect.left + r.width / 2;
      });
      let nearest = 0;
      let best = Infinity;
      centers.forEach((c, i) => {
        const d = Math.abs(x - c);
        if (d < best) { best = d; nearest = i; }
      });
      slider.style.left = centers[nearest] + 'px';
      bubbles.forEach((b, i) => b.classList.toggle('active', i === nearest));
    }
    function init() {
      const r = row.getBoundingClientRect();
      const b = bubbles[Math.min(2, bubbles.length - 1)].getBoundingClientRect();
      moveTo(b.left - r.left + b.width / 2);
    }
    row.addEventListener('mousemove', (e) => {
      const rect = row.getBoundingClientRect();
      moveTo(e.clientX - rect.left);
    });
    window.addEventListener('resize', init);
    init();
  }
});
