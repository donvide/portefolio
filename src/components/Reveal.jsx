import { useScrollReveal } from "@/hooks/useScrollReveal";
import { createElement } from "react";

export const Reveal = ({ as: Tag = "div", className = "", delay = 0, children }) => {
    const { ref, isVisible } = useScrollReveal();

    return createElement(
        Tag,
        {
            ref,
            className: `scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`,
            style: { transitionDelay: `${delay}ms` },
        },
        children
    );
};
