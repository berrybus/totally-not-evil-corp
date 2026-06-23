(function () {
  // ---- login gate (client-side only; not real security) ----
  const gate = document.getElementById('gate');
  const gateForm = document.getElementById('gateForm');
  const gatePass = document.getElementById('gatePass');
  const gateError = document.getElementById('gateError');
  const PASSWORD = 'anth';
  const UNLOCK_KEY = 'tne-unlocked';

  if (gate) {
    if (sessionStorage.getItem(UNLOCK_KEY) === '1') {
      gate.remove();
    } else {
      gatePass.focus();
      gateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (gatePass.value.trim().toLowerCase() === PASSWORD) {
          sessionStorage.setItem(UNLOCK_KEY, '1');
          gate.classList.add('open');
          setTimeout(() => gate.remove(), 360);
        } else {
          gateError.hidden = false;
          gatePass.value = '';
          gatePass.focus();
        }
      });
    }
  }

  const deck = document.getElementById('deck');
  const slides = Array.from(deck.querySelectorAll('.slide'));
  const stepsNav = document.getElementById('steps');
  const progressFill = document.getElementById('progressFill');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const slideCount = document.getElementById('slideCount');

  let current = 0;

  // Build progress chips (one per slide that has a label).
  slides.forEach((s, i) => {
    if (!s.dataset.step) return;
    const chip = document.createElement('span');
    chip.className = 'step';
    chip.textContent = s.dataset.step;
    chip.dataset.index = i;
    chip.addEventListener('click', () => goTo(i));
    stepsNav.appendChild(chip);
  });

  function goTo(index) {
    index = Math.max(0, Math.min(slides.length - 1, index));
    slides[current].classList.remove('active');
    current = index;
    slides[current].classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    render();
  }

  function render() {
    const pct = (current / (slides.length - 1)) * 100;
    progressFill.style.width = pct + '%';

    Array.from(stepsNav.children).forEach((chip) => {
      const i = Number(chip.dataset.index);
      chip.classList.toggle('current', i === current);
      chip.classList.toggle('done', i < current);
    });

    prevBtn.style.visibility = current === 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = current === slides.length - 1 ? 'hidden' : 'visible';
    slideCount.textContent = `Step ${current + 1} of ${slides.length}`;
  }

  nextBtn.addEventListener('click', () => goTo(current + 1));
  prevBtn.addEventListener('click', () => goTo(current - 1));

  document.querySelectorAll('[data-goto]').forEach((btn) => {
    btn.addEventListener('click', () => goTo(Number(btn.dataset.goto)));
  });

  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft') prevBtn.click();
  });

  // ---- touch swipe navigation (mobile) ----
  let touchX = null;
  let touchY = null;
  deck.addEventListener('touchstart', (e) => {
    touchX = e.changedTouches[0].clientX;
    touchY = e.changedTouches[0].clientY;
  }, { passive: true });
  deck.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    const dy = e.changedTouches[0].clientY - touchY;
    // mostly-horizontal swipe past threshold
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) goTo(current + 1);
      else goTo(current - 1);
    }
    touchX = touchY = null;
  }, { passive: true });

  render();
})();
