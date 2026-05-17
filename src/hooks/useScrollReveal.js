import { useEffect, useRef, useState } from "react";

export const useScrollReveal = ({ threshold = 0.18, rootMargin = "0px 0px -60px 0px" } = {}) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [rootMargin, threshold]);

    return { ref, isVisible };
};
