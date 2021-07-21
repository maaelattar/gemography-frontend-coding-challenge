import { useCallback, useRef } from "react";

export function useIntersectionObserver(intersectAction: Function) {
  const ref = useRef<any>(null);

  const setRef = useCallback(
    (node) => {
      const handleObserver = (entities: any) => {
        const target = entities[0];
        if (target.isIntersecting) {
          intersectAction();
        }
      };

      if (node) {
        ref.current = node;

        const options = {
          root: null,
          rootMargin: "1000px",
          threshold: 1,
        };

        const observer = new IntersectionObserver(handleObserver, options);
        if (ref.current) {
          observer.observe(ref.current);
        }
      }
    },
    [intersectAction]
  );

  return [setRef];
}
