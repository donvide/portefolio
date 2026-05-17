import { Button } from "@/components/Button";
import { useLanguage } from "@/i18n/useLanguage";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";


export const Navbar = () => {
    const { language, t, toggleLanguage } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navLinks = [
        {href: "#about", label: t.nav.about},
        {href: "#projects", label: t.nav.projects},
        {href: "#experience", label: t.nav.experience},
        {href: "#testimonials", label: t.nav.testimonials}
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll",handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    return (
     <header className={`fixed top-0 left-0 right-0 z-50 bg-transparent py-5 transition-all duration-500  ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}`}>
        <nav className="container mx-auto px-6 flex justify-between items-center">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                Marius <span className="text-primary">Dev</span>
            </a>
{/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
                <div className="glass rounded-full flex px-2 py-1 items-center gap-1">
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index}
                        className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
                type="button"
                aria-label={t.nav.languageLabel}
                onClick={toggleLanguage}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
            >
                {language.toUpperCase()}
            </button>
            <Button size="sm">{t.nav.contact}</Button>
          </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden p-2 text-foreground cursor-pointer"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>
        

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
            <div className="md:hidden fixed top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border animate-fade-in ">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg text-muted-foreground hover:text-foreground py-2"
                           
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        className="w-fit rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
                    >
                        {language.toUpperCase()}
                    </button>
                    <Button onClick={() => setIsMobileMenuOpen(false)}>{t.nav.contact}</Button>
                </div>
            </div>
        )}
    </header>
    );
    
}
