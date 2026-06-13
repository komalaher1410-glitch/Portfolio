import { RefObject, useEffect, useState } from 'react';

interface Options extends IntersectionObserverInit {}

export default function useIntersectionObserver<T extends Element>(ref: RefObject<T>, options?: Options) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
}
