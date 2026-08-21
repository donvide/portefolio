import { useEffect, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}=+*^?#@$%&";

const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const ScrambleText = ({ text, className = "", duration = 1100, delay = 0 }) => {
    const [output, setOutput] = useState(() =>
        prefersReducedMotion ? text : text.replace(/\S/g, " ")
    );

    useEffect(() => {
        if (prefersReducedMotion) {
            return undefined;
        }

        let frame;
        let start = null;

        const tick = (timestamp) => {
            if (start === null) start = timestamp + delay;
            const elapsed = timestamp - start;
            if (elapsed < 0) {
                frame = requestAnimationFrame(tick);
                return;
            }
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const revealed = Math.floor(eased * text.length);
            let result = "";
            for (let i = 0; i < text.length; i += 1) {
                const char = text[i];
                if (char === " " || i < revealed) {
                    result += char;
                } else {
                    result += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                }
            }
            setOutput(result);
            if (progress < 1) {
                frame = requestAnimationFrame(tick);
            }
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [text, duration, delay]);

    return <span className={className}>{output}</span>;
};
