import { Link } from "react-router-dom";

export const AnimateBorderButton = ({ children, to, onClick }) => {
    const className =
        "relative bg-transparent border border-border text-foreground hover:border-primary/50 transition-all duration-1000 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border inline-flex items-center justify-center";

    const content = (
        <>
            {/*Animation svg */}
            <svg
                className="absolute left-0 top-0 w-full h-full pointer-events-none download-cv-svg"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
                style={{ overflow: "visible" }}
                aria-hidden="true"
            >
                <rect
                    x="1"
                    y="1"
                    width="198"
                    height="58"
                    rx="29"
                    ry="29"
                    pathLength="100"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animated-border-path"
                />
            </svg>
            <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </>
    );

    if (to && !onClick) {
        return (
            <Link to={to} className={className}>
                {content}
            </Link>
        );
    }

    return (
        <button type="button" onClick={onClick} className={className}>
            {content}
        </button>
    );
};