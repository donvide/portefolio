import { useCallback, useRef } from "react";

export const SpotlightCard = ({ children, className = "", as: Tag = "div", ...props }) => {
    const ref = useRef(null);

    const handleMouseMove = useCallback((event) => {
        const element = ref.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        element.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
        element.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    }, []);

    const handleMouseLeave = useCallback(() => {
        ref.current?.style.setProperty("--spotlight-opacity", "0");
    }, []);

    const handleMouseEnter = useCallback(() => {
        ref.current?.style.setProperty("--spotlight-opacity", "1");
    }, []);

    const Component = Tag;

    return (
        <Component
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`spotlight-card ${className}`}
            {...props}
        >
            <span aria-hidden="true" className="spotlight-glow" />
            {children}
        </Component>
    );
};
