import { Navbar } from "@/layout/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { useLanguage } from "@/i18n/useLanguage";
import { projectCategories, projects } from "@/data/projects";
import { ArrowLeft, FolderOpen, LayoutGrid } from "lucide-react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ProjectsGallery = () => {
    const { t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    const labels = {
        viewProject: t.projects.viewProject,
        sourceCode: t.projects.sourceCode,
        featured: t.projects.featured,
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            <Navbar />

            <section className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
                <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
                <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-highlight/5 blur-3xl"></div>

                <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* En-tête */}
                    <StaggerGroup className="mx-auto mb-12 max-w-3xl text-center" stagger={0.12}>
                        <StaggerItem y={16}>
                            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium uppercase tracking-wider text-secondary-foreground">
                                <LayoutGrid className="h-4 w-4 text-primary" />
                                {t.projects.gallery.eyebrow}
                            </span>
                        </StaggerItem>
                        <StaggerItem y={22}>
                            <h1 className="mt-6 text-4xl font-bold text-secondary-foreground md:text-6xl">
                                {t.projects.gallery.titleStart}
                                <span className="font-serif italic font-normal text-foreground">
                                    {t.projects.gallery.titleEnd}
                                </span>
                            </h1>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="mt-6 text-lg text-muted-foreground">
                                {t.projects.gallery.description}
                            </p>
                        </StaggerItem>
                    </StaggerGroup>

                    {/* Filtres */}
                    <StaggerGroup
                        className="mb-12 flex flex-wrap items-center justify-center gap-2"
                        stagger={0.06}
                    >
                        {projectCategories.map((category) => {
                            const isActive = activeCategory === category;
                            return (
                                <StaggerItem key={category}>
                                    <Motion.button
                                        type="button"
                                        onClick={() => setActiveCategory(category)}
                                        whileTap={{ scale: 0.94 }}
                                        layout
                                        className={`relative cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                                            isActive
                                                ? "text-primary-foreground"
                                                : "text-muted-foreground hover:text-primary"
                                        }`}
                                    >
                                        {isActive && (
                                            <Motion.span
                                                layoutId="gallery-filter"
                                                className="absolute inset-0 rounded-full bg-primary shadow-[0_0_20px_rgb(32_178_166_/_0.35)]"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        {!isActive && (
                                            <span className="absolute inset-0 rounded-full border border-border hover:border-primary/50" />
                                        )}
                                        <span className="relative z-10">{t.projects.categories[category]}</span>
                                    </Motion.button>
                                </StaggerItem>
                            );
                        })}
                    </StaggerGroup>

                    {/* Compteur */}
                    <Motion.p
                        className="mb-8 text-center text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        {filteredProjects.length}{" "}
                        {filteredProjects.length > 1
                            ? t.projects.gallery.resultMany
                            : t.projects.gallery.resultOne}
                    </Motion.p>

                    {/* Grille */}
                    {filteredProjects.length === 0 ? (
                        <div className="glass rounded-2xl p-16 text-center">
                            <FolderOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
                            <p className="text-muted-foreground">{t.projects.gallery.empty}</p>
                        </div>
                    ) : (
                        <Motion.div
                            key={activeCategory}
                            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                            initial="hidden"
                            animate="visible"
                            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredProjects.map((project) => {
                                    const itemIndex = projects.findIndex((p) => p.id === project.id);
                                    return (
                                        <Motion.div
                                            key={project.id}
                                            layout
                                            initial={{ opacity: 0, y: 32, scale: 0.96 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -16, scale: 0.96 }}
                                            transition={{
                                                duration: 0.45,
                                                ease: [0.21, 0.47, 0.32, 0.98],
                                            }}
                                            className="h-full"
                                        >
                                            <ProjectCard
                                                project={project}
                                                meta={t.projects.items[itemIndex]}
                                                labels={labels}
                                            />
                                        </Motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </Motion.div>
                    )}

                    {/* Retour */}
                    <Motion.div
                        className="mt-16 flex flex-col items-center justify-center gap-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="max-w-md text-muted-foreground">{t.projects.gallery.ctaText}</p>
                        <Link
                            to="/#contact"
                            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-px hover:bg-primary/90"
                        >
                            {t.projects.gallery.ctaAction}
                        </Link>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            {t.projects.gallery.backHome}
                        </Link>
                    </Motion.div>
                </div>
            </section>
        </div>
    );
};