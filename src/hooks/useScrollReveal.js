import { useEffect } from 'react';

/**
 * Custom hook to trigger scroll-to-view animations using IntersectionObserver.
 * Observes all elements matching '.reveal-on-scroll' or '.reveal-card' across the DOM.
 */
export function useScrollReveal() {
  useEffect(() => {
    // If IntersectionObserver is not supported, reveal everything immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-card').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Unobserve after revealing for optimal performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Initial query
    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-card');
    elements.forEach((el) => observer.observe(el));

    // Handle dynamically rendered elements using MutationObserver
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.classList?.contains('reveal-on-scroll') || node.classList?.contains('reveal-card')) {
              observer.observe(node);
            }
            node.querySelectorAll?.('.reveal-on-scroll, .reveal-card')?.forEach((child) => {
              observer.observe(child);
            });
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
