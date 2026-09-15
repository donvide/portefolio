import { Button } from "@/components/Button";
import { useLanguage } from "@/i18n/useLanguage";
import { useTheme } from "@/theme/useTheme";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const getScrollTarget = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Navbar = () => {
    const { language, t, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [prevLocationKey, setPrevLocationKey] = useState(location.key);
    const [isScrolled, setIsScrolled] = useState(false);

    if (prevLocationKey !== location.key) {
        setPrevLocationKey(location.key);
        setIsMobileMenuOpen(false);
    }

    const navLinks = [
        { href: "#about", label: t.nav.about },
        { href: "#services", label: t.nav.services },
        { href: "#skills", label: t.nav.skills },
        { href: "#projects", label: t.nav.projects },
        { href: "#experience", label: t.nav.experience },
        { href: "#testimonials", label: t.nav.testimonials },
        { href: "#contact", label: t.nav.contactLink },
    ];

    const closeMenu = () => setIsMobileMenuOpen(false);

    const handleContactClick = () => {
        closeMenu();
        if (isHome) {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            window.location.href = "/#contact";
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 bg-transparent py-5 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}`}>
            <nav className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold tracking-tight hover:text-primary">
                    Marius <span className="text-primary">Dev</span>
                </Link>
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full flex px-2 py-1 items-center gap-1">
                        {navLinks.map((link, index) =>
                            isHome ? (
                                <button
                                    type="button"
                                    key={index}
                                    href={link.href}
                                    onClick={getScrollTarget}
                                    className="cursor-pointer px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                                >
                                    {link.label}
                                </button>
                            ) : (
                                <Link
                                    to={`/${link.href}`}
                                    key={index}
                                    className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-3">
                    <button
                        type="button"
                        aria-label={t.nav.themeLabel}
                        onClick={toggleTheme}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
                    >
                        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                    <button
                        type="button"
                        aria-label={t.nav.languageLabel}
                        onClick={toggleLanguage}
                        className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
                    >
                        {language.toUpperCase()}
                    </button>
                    <Button size="sm" onClick={handleContactClick}>{t.nav.contact}</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    aria-label="Menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) =>
                            isHome ? (
                                <button
                                    type="button"
                                    key={index}
                                    href={link.href}
                                    onClick={(event) => {
                                        getScrollTarget(event);
                                        closeMenu();
                                    }}
                                    className="cursor-pointer text-left text-lg text-muted-foreground hover:text-foreground py-2"
                                >
                                    {link.label}
                                </button>
                            ) : (
                                <Link
                                    to={`/${link.href}`}
                                    key={index}
                                    onClick={closeMenu}
                                    className="text-lg text-muted-foreground hover:text-foreground py-2"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
                        >
                            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                            {t.nav.themeLabel}
                        </button>
                        <button
                            type="button"
                            onClick={toggleLanguage}
                            className="w-fit rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
                        >
                            {language.toUpperCase()}
                        </button>
                        <Button onClick={handleContactClick}>{t.nav.contact}</Button>
                    </div>
                </div>
            )}
        </header>
    );
};