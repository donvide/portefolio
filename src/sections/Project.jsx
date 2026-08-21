import { AnimateBorderButton } from "@/components/AnimateBorderButton";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { useLanguage } from "@/i18n/useLanguage";
import { ArrowUpRight, Github } from "lucide-react";
import { motion as Motion } from "motion/react";

const projectAssets = [
    {
        mediaType: "image",
        image: "/projects/projet-portfolio.jpg",
        tags: ["React", "Tailwind CSS", "NodeJS", "Vite"],
        link: "#",
        github: "https://github.com/donvide/portefolio",
    },
    {
        mediaType: "video",
        media: "/projects/projet-landing.webm",
        tags: ["React", "Tailwind CSS", "Python"],
        link: "#",
        github: "https://github.com/donvide/portefolio",
    },
];

export const Project = () => {
    const { t } = useLanguage();
    const projects = projectAssets.map((project, index) => ({
        ...project,
        ...t.projects.items[index],
    }));

    return (
        <section id="projects" className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 h-64 w-64 rounded-full bg-highlight/5 blur-3xl"></div>
            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <StaggerGroup className="mx-auto mb-16 max-w-3xl text-center" stagger={0.12}>
                    <StaggerItem y={16}>
                        <span className="text-sm font-medium uppercase tracking-wider text-secondary-foreground">
                            {t.projects.eyebrow}
                        </span>
                    </StaggerItem>
                    <StaggerItem y={20}>
                        <h2 className="mt-4 mb-6 text-4xl font-bold text-secondary-foreground md:text-5xl">
                            {t.projects.titleStart}
                            <span className="font-serif italic font-normal text-foreground">
                                {t.projects.titleEnd}
                            </span>
                        </h2>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-muted-foreground">{t.projects.description}</p>
                    </StaggerItem>
                </StaggerGroup>

                <StaggerGroup className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8" stagger={0.15}>
                    {projects.map((project, index) => (
                        <StaggerItem key={`${project.title}-${index}`} y={40} className="h-full">
                            <Motion.article
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg transition-colors duration-500 hover:border-primary/40 hover:shadow-2xl"
                            >
                                <div className="relative overflow-hidden">
                                    {project.mediaType === "image" ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            width={1200}
                                            height={647}
                                            loading="lazy"
                                            decoding="async"
                                            className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <video
                                            src={project.media}
                                            preload="metadata"
                                            playsInline
                                            controls
                                            className="h-56 w-full object-cover"
                                        />
                                    )}
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                </div>

                                <div className="flex flex-1 flex-col space-y-4 p-6">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                                    </div>
                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={`${project.title}-${tagIndex}`}
                                                className="rounded-full border border-border/50 bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground hover:border-primary/50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-auto border-t border-border/70 p-6 transition-colors duration-300 group-hover:bg-card/70">
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <a
                                            href={project.link}
                                            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-px hover:bg-primary/90"
                                        >
                                            {t.projects.viewProject}
                                            <ArrowUpRight className="h-4 w-4" />
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
                                        >
                                            {t.projects.sourceCode}
                                            <Github className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            </Motion.article>
                        </StaggerItem>
                    ))}
                </StaggerGroup>

                <Motion.div
                    className="mt-12 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <AnimateBorderButton>{t.projects.more}</AnimateBorderButton>
                </Motion.div>
            </div>
        </section>
    );
};
