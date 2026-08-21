import { Button } from "@/components/Button";
import { AnimateBorderButton } from "@/components/AnimateBorderButton";
import { ScrambleText } from "@/components/ScrambleText";
import { useLanguage } from "@/i18n/useLanguage";
import {
    ArrowRight,
    ChevronDown,
    Download,
    Github,
    Instagram,
    Linkedin,
    Twitter,
} from "lucide-react";
import { motion as Motion, useMotionValue, useSpring, useTransform } from "motion/react";

const skills = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "TypeScript",
    "Express",
    "PHP",
    "MySQL",
    "MongoDB",
    "Git/GitHub",
    "Code Vs",
];

const getParticleValue = (index, offset) => {
    const value = Math.sin(index * 12.9898 + offset * 78.233) * 43758.5453;
    return value - Math.floor(value);
};

const particles = Array.from({ length: 30 }, (_, index) => ({
    left: `${getParticleValue(index, 1) * 100}%`,
    top: `${getParticleValue(index, 2) * 100}%`,
    duration: `${15 + getParticleValue(index, 3) * 20}s`,
    delay: `${getParticleValue(index, 4) * 5}s`,
}));

const heroContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const heroItem = {
    hidden: { opacity: 0, y: 32, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
};

export const Hero = () => {
    const { t } = useLanguage();

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
        stiffness: 120,
        damping: 18,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
        stiffness: 120,
        damping: 18,
    });

    const handlePhotoMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
    };

    const handlePhotoMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const handleScrollToAbout = (event) => {
        event.preventDefault();
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleScrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <img
                    src="/hero-bg.jpg"
                    alt=""
                    aria-hidden="true"
                                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Particles */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                {particles.map((particle, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: particle.left,
                            top: particle.top,
                            animation: `slow-drift ${particle.duration} ease-in-out infinite`,
                            animationDelay: particle.delay,
                        }}
                    />
                ))}
            </div>

            {/* Contenue */}
            <Motion.div
                className="relative z-10 container mx-auto px-6 pt-32 pb-20"
                variants={heroContainer}
                initial="hidden"
                animate="visible"
            >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* colonne gauche - contenue du text */}
                    <div className="space-y-8">
                        <Motion.div variants={heroItem}>
                            <span className="inline-flex items-center gap-2 p-2 rounded-full glass text-sm text-primary">
                                <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                                {t.hero.role}
                            </span>
                        </Motion.div>

                        {/* Titre principal */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight glass-text">
                                <Motion.span
                                    className="block"
                                    variants={heroItem}
                                >
                                    {t.hero.titleStart}{" "}
                                    <span className="text-primary glow-text">
                                        <ScrambleText text={t.hero.titleHighlight} delay={500} />
                                    </span>
                                </Motion.span>
                                <Motion.span className="block" variants={heroItem}>
                                    {t.hero.titleMiddle}
                                </Motion.span>
                                <Motion.span
                                    className="block font-serif italic font-normal text-foreground"
                                    variants={heroItem}
                                >
                                    {t.hero.titleEnd}
                                </Motion.span>
                            </h1>
                            <Motion.p
                                className="text-lg text-muted-foreground max-w-lg glass-text"
                                variants={heroItem}
                            >
                                {t.hero.intro}
                            </Motion.p>
                        </div>

                        {/* Bouton d'appel à l'action */}
                        <Motion.div
                            className="flex flex-wrap gap-6"
                            variants={heroItem}
                        >
                            <Button size="lg" onClick={handleScrollToContact}>
                                {t.hero.contact} <ArrowRight size={16} />
                            </Button>
                            <AnimateBorderButton>
                                <Download size={18} /> {t.hero.downloadCv}
                            </AnimateBorderButton>
                        </Motion.div>

                        {/* Réseaux sociaux */}
                        <Motion.div
                            className="flex items-center gap-4"
                            variants={heroItem}
                        >
                            <span className="text-sm text-muted-foreground">{t.hero.follow}</span>
                            {[
                                { icon: Github, href: "#" },
                                { icon: Linkedin, href: "#" },
                                { icon: Instagram, href: "#" },
                                { icon: Twitter, href: "#" },
                            ].map((social, idx) => (
                                <Motion.a
                                    key={idx}
                                    href={social.href}
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    whileTap={{ scale: 0.92 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className="inline-flex items-center gap-2 p-2 rounded-full glass text-sm hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                                >
                                    {<social.icon size={16} />}
                                </Motion.a>
                            ))}
                        </Motion.div>
                    </div>

                    {/* colonne droite - Photo de profil */}
                    <Motion.div
                        className="relative"
                        style={{ perspective: 1000 }}
                        variants={heroItem}
                    >
                        <Motion.div
                            className="relative max-w-md mx-auto"
                            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                            onMouseMove={handlePhotoMouseMove}
                            onMouseLeave={handlePhotoMouseLeave}
                        >
                            {/* Image de profil */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
                            <div className="relative z-10 glass rounded-3xl p-2 glow-border overflow-hidden">
                                <img
                                    src="/marius.jpeg"
                                    alt="Marius Donvide, développeur web et mobile"
                                    width={480}
                                    height={600}
                    fetchPriority="high"
                                    decoding="async"
                                    className="w-full aspect-[4/5] object-cover rounded-3xl"
                                />

                                {/* badge de suivi */}
                                <Motion.div
                                    className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3"
                                    style={{ transform: "translateZ(40px)" }}
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium text-foreground">
                                            {t.hero.available}
                                        </span>
                                    </div>
                                </Motion.div>

                                {/* stat badge */}
                                <Motion.div
                                    className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3"
                                    style={{ transform: "translateZ(30px)" }}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.6,
                                    }}
                                >
                                    <div className="text-2xl font-bold text-primary">+2</div>
                                    <div className="text-xs text-muted-foreground font-medium">
                                        {t.hero.years}
                                    </div>
                                </Motion.div>
                            </div>
                        </Motion.div>
                    </Motion.div>
                </div>

                {/* Compétences */}
                <Motion.div className="mt-20" variants={heroItem}>
                    <p className="text-sm text-muted-foreground mb-6 text-center">{t.hero.techLabel}</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-8 py-4">
                                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Motion.div>
            </Motion.div>

            <Motion.div
                className="absolute bottom-8 left-1/2 z-20 transform -translate-x-1/2 pointer-events-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
            >
                <a
                    href="#about"
                    onClick={handleScrollToAbout}
                    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary/80 transition-colors duration-300"
                >
                    <span className="text-xs uppercase tracking-wider">{t.hero.scroll}</span>
                    <ChevronDown size={36} className="animate-bounce" />
                </a>
            </Motion.div>
        </section>
    );
};
