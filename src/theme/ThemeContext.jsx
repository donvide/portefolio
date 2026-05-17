import { ThemeContext } from "@/theme/ThemeContextValue";
import { useEffect, useMemo, useState } from "react";

const getInitialTheme = () => {
    const savedTheme = window.localStorage.getItem("marius-portfolio-theme");
    return savedTheme || "dark";
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem("marius-portfolio-theme", theme);
    }, [theme]);

    const value = useMemo(
        () => ({
            theme,
            toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
        }),
        [theme]
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
