import { motion as Motion, useScroll, useSpring } from "motion/react";

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 140,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <Motion.div
            aria-hidden="true"
            className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-primary via-highlight to-primary"
            style={{ scaleX }}
        />
    );
};
