import { ThemeContext } from "@/theme/ThemeContextValue";
import { useContext } from "react";

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }

    return context;
};
