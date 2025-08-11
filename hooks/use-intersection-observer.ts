import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false
  } = options;

  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const frozen = useRef(false);

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    const isIntersecting = entry.isIntersecting;
    
    if (frozen.current && !isIntersecting) {
      return;
    }

    if (freezeOnceVisible && isIntersecting) {
      frozen.current = true;
    }

    setEntry(entry);
    setIsVisible(isIntersecting);
  };

  useEffect(() => {
    const element = elementRef.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !element) {
      return;
    }

    const observer = new IntersectionObserver(updateEntry, {
      threshold,
      root,
      rootMargin
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
      frozen.current = false;
    };
  }, [elementRef.current, threshold, root, rootMargin]);

  return {
    ref: elementRef,
    entry,
    isVisible
  };
}
