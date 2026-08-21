import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const AnimatedCounter = ({ value, suffix = "", duration = 1200 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) {
            return undefined;
        }

        let frameId;
        const start = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(value * eased));

            if (progress < 1) {
                frameId = requestAnimationFrame(tick);
            }
        };

        frameId = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(frameId);
    }, [duration, isInView, value]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
};
