import { SpotlightCard } from "@/components/SpotlightCard";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { motion as Motion } from "motion/react";

export const ProjectCard = ({ project, meta, labels }) => {
    return (
        <SpotlightCard className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg transition-colors duration-500 hover:border-primary/40 hover:shadow-2xl">
            <div className="relative overflow-hidden">
                {project.mediaType === "image" && (
                    <img
                        src={project.image}
                        alt={meta.title}
                        width={1200}
                        height={647}
                        loading="lazy"
                        decoding="async"
                        className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                )}

                {project.mediaType === "video" && (
                    <video
                        src={project.media}
                        preload="metadata"
                        playsInline
                        controls
                        className="h-56 w-full object-cover"
                    />
                )}

                {project.mediaType === "gradient" && (
                    <div
                        className={`flex h-56 w-full items-center justify-center ${
                            project.accent === "teal"
                                ? "bg-[radial-gradient(circle_at_30%_30%,rgb(32_178_166_/_0.28),transparent_60%),radial-gradient(circle_at_75%_75%,rgb(245_166_35_/_0.14),transparent_60%)]"
                                : "bg-[radial-gradient(circle_at_30%_30%,rgb(245_166_35_/_0.24),transparent_60%),radial-gradient(circle_at_75%_75%,rgb(32_178_166_/_0.16),transparent_60%)]"
                        } bg-surface transition-transform duration-700 group-hover:scale-105`}
                    >
                        <project.icon
                            className={`h-20 w-20 transition-transform duration-700 group-hover:scale-110 ${
                                project.accent === "teal" ? "text-primary" : "text-highlight"
                            }`}
                        />
                    </div>
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                {project.featured && (
                    <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-medium text-primary">
                        <Sparkles className="h-3 w-3" />
                        {labels.featured ?? "Featured"}
                    </div>
                )}
            </div>

            <div className="flex flex-1 flex-col space-y-4 p-6">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                        {meta.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">{meta.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={`${meta.title}-${tagIndex}`}
                            className="rounded-full border border-border/50 bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground hover:border-primary/50"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-auto border-t border-border/70 p-6 transition-colors duration-300 group-hover:bg-card/70">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Motion.a
                        href={project.link}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-px hover:bg-primary/90"
                    >
                        {labels.viewProject}
                        <ArrowUpRight className="h-4 w-4" />
                    </Motion.a>
                    {project.github && (
                        <Motion.a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
                        >
                            {labels.sourceCode}
                            <Github className="h-4 w-4" />
                        </Motion.a>
                    )}
                </div>
            </div>
        </SpotlightCard>
    );
};