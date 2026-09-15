import { AnimateBorderButton } from "@/components/AnimateBorderButton";
import { ProjectCard } from "@/components/ProjectCard";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { useLanguage } from "@/i18n/useLanguage";
import { projects } from "@/data/projects";
import { motion as Motion } from "motion/react";

const HIGHLIGHTED_COUNT = 4;

export const Project = () => {
    const { t } = useLanguage();
    const highlightedProjects = projects.slice(0, HIGHLIGHTED_COUNT);

    const labels = {
        viewProject: t.projects.viewProject,
        sourceCode: t.projects.sourceCode,
        featured: t.projects.featured,
    };

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
                    {highlightedProjects.map((project, index) => (
                        <StaggerItem key={project.id} y={40} className="h-full">
                            <Motion.div
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                                className="h-full"
                            >
                                <ProjectCard
                                    project={project}
                                    meta={t.projects.items[index]}
                                    labels={labels}
                                />
                            </Motion.div>
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
                    <AnimateBorderButton to="/projects">{t.projects.more}</AnimateBorderButton>
                </Motion.div>
            </div>
        </section>
    );
};