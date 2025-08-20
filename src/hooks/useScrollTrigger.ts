
import { useState, useEffect } from 'react';

export const useScrollTrigger = (targetId: string, threshold: number = 0.5) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsTriggered(true);
          setHasTriggered(true);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const target = document.getElementById(targetId);
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [targetId, threshold, hasTriggered]);

  return { isTriggered, setIsTriggered };
};
