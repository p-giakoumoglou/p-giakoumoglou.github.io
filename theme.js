(() => {
  const root = document.documentElement;
  const button = document.querySelector('[data-theme-toggle]');
  const storageKey = 'paschalis-theme';
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  const stored = localStorage.getItem(storageKey);
  const initial = stored || (media.matches ? 'dark' : 'light');
  root.dataset.theme = initial;

  const updateButton = () => {
    if (!button) return;
    const dark = root.dataset.theme === 'dark';
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('title', dark ? 'Switch to light mode' : 'Switch to dark mode');
  };

  updateButton();

  button?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem(storageKey, next);
    updateButton();
  });

  media.addEventListener?.('change', (event) => {
    if (localStorage.getItem(storageKey)) return;
    root.dataset.theme = event.matches ? 'dark' : 'light';
    updateButton();
  });
})();
