export default function initScrollReveal({ selector = '.reveal', root = null, rootMargin = '0px 0px -10% 0px', threshold = 0.12 } = {}) {
  if (typeof window === 'undefined') return;

  const elements = Array.from(document.querySelectorAll(selector));
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    },
    { root, rootMargin, threshold }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}
