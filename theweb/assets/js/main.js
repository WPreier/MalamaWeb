document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
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
    if (toggle) {
      toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Light Mode' : 'Dark Mode');
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
