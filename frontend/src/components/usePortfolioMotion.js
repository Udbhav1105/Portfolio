import { useEffect, useState } from 'react';

export default function usePortfolioMotion() {
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPaused(preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = paused ? 'paused' : 'active';
    const elements = document.querySelectorAll('.section-heading, .about-layout, .stats, .project, .stack-row, .journey-intro, .timeline article, .certificate, .contact-layout');
    if (paused) {
      elements.forEach(element => element.classList.remove('reveal-pending'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07 });
    elements.forEach(element => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add('reveal-item', 'reveal-pending');
        observer.observe(element);
      }
    });
    return () => observer.disconnect();
  }, [paused]);

  return [paused, () => setPaused(value => !value)];
}
