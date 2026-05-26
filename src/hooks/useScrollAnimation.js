import { useEffect, useState, useRef } from "react";

export function useScrollAnimation(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (options.triggerOnce && entry.isIntersecting) {
        setIsIntersecting(true);
        if (currentRef) observer.unobserve(currentRef);
      } else {
        setIsIntersecting(entry.isIntersecting);
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || "0px",
      ...options
    });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return [ref, isIntersecting];
}
