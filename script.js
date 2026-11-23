// Interações acessíveis + animações progressivas com GSAP/ScrollTrigger
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
}));

if (window.gsap && window.ScrollTrigger && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-copy > *', { y: 22, opacity: 0, duration: .8, stagger: .12, ease: 'power3.out' });
  gsap.from('.showcase-title', { y: 25, opacity: 0, duration: 1, delay: .25, ease: 'power3.out' });
  gsap.from('.phone', { y: 90, opacity: 0, rotate: 0, duration: 1, stagger: .15, delay: .35, ease: 'power3.out' });
  gsap.utils.toArray('.feature-card').forEach((card, i) => {
    gsap.from(card, { y: 35, opacity: 0, duration: .65, delay: (i % 3) * .08,
      scrollTrigger: { trigger: card, start: 'top 88%', once: true }, ease: 'power2.out' });
  });
  gsap.from('.banner-content', { y: 30, opacity: 0, duration: .8,
    scrollTrigger: { trigger: '.banner', start: 'top 78%', once: true } });
  gsap.utils.toArray('.price-card').forEach((card, i) => {
    gsap.from(card, { y: 40, opacity: 0, duration: .7, delay: i * .12,
      scrollTrigger: { trigger: '.pricing-grid', start: 'top 82%', once: true } });
  });
  gsap.utils.toArray('.faq-grid article').forEach((item, i) => {
    gsap.from(item, { y: 20, opacity: 0, duration: .55, delay: (i % 3) * .1,
      scrollTrigger: { trigger: item, start: 'top 90%', once: true } });
  });
}
