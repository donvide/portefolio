import { motion as Motion } from "motion/react";

const EASE = [0.21, 0.47, 0.32, 0.98];

const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
    hidden: {},
    visible: {
        transition: { staggerChildren, delayChildren },
    },
});

const staggerItem = (y = 24) => ({
    hidden: { opacity: 0, y, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: EASE },
    },
});

export const Reveal = ({
    children,
    className = "",
    delay = 0,
    y = 28,
    x = 0,
    blur = true,
    once = true,
    amount = 0.25,
    ...props
}) => {
    return (
        <Motion.div
            className={className}
            initial={{ opacity: 0, y, x, filter: blur ? "blur(8px)" : "blur(0px)" }}
            whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
            viewport={{ once, amount }}
            transition={{ duration: 0.7, delay, ease: EASE }}
            {...props}
        >
            {children}
        </Motion.div>
    );
};

export const StaggerGroup = ({ children, className = "", stagger = 0.08, delay = 0, amount = 0.2 }) => (
    <Motion.div
        className={className}
        variants={staggerContainer(stagger, delay)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount }}
    >
        {children}
    </Motion.div>
);

export const StaggerItem = ({ children, className = "", y = 24 }) => (
    <Motion.div className={className} variants={staggerItem(y)}>
        {children}
    </Motion.div>
);
