import { ArrowUpRight, Github } from "lucide-react";
import { AnimateBorderButton } from "@/components/AnimateBorderButton";

const projects = [
    {
        title:"Mon portefolio" ,
        description: "Réalisé avec React, Tailwind CSS et Vite, ce projet met en avant mes compétences en développement web et ma passion pour la création de sites modernes et réactifs.",
        mediaType: "image",
        image: "/projects/Capture d’écran du 2026-03-02 09-35-01.png",
       tags:["React", "Tailwind CSS", "NodeJS",  "Vite"],
       link:"#",
       github:"#",
    },
    {
        title: "Lending page ",
        description: "Un projet de landing page réalisé avec React et Tailwind CSS et Python.",
        mediaType: "video",
        media: "/projects/Capture vidéo du 2026-03-02 09-56-04.webm",
        tags: ["React", "Tailwind CSS", "Python"],
        link: "#",
        github: "#",
    }


]
export const Project = () => {
    return (
        <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background glows */}
            <div className="absolute top-1/4 right-0  w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}

            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animation-pulse">
                    Présentation d'oeuvres
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Projets 
                     <span className="font-serif italic font-normal text-white"> récents</span>
                </h2>

                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Une sélection de mes projets les plus récents, mettant en avant mes compétences en développement web et ma passion pour la création de solutions innovantes. Chaque projet reflète mon engagement à créer des expériences utilisateur exceptionnelles et à résoudre des problèmes complexes avec des solutions élégantes.
                </p>
            </div>    

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group flex h-full flex-col bg-card border border-border rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/40"
                    >
                        <div className="relative overflow-hidden">
                            {project.mediaType === "image" ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <video
                                    src={project.media}
                                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                                    controls
                                />
                            )}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                        </div>

                        {/* Contenue */}
                        <div className="flex flex-1 flex-col p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                <ArrowUpRight 
                                    className="w-5 h-5 
                                    text-muted-foreground group-hover:text-primary
                                    group-hover:translate-x-1
                                    group-hover:-translate-y-1 transition-all"
                                />
                            </div>
                            <p className="text-muted-foreground text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={`${project.title}-${tagIndex}`}
                                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-auto border-t border-border/70 p-6 transition-colors duration-300 group-hover:bg-card/70">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <a href={project.link} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:translate-y-[-1px]">
                                    Voir le projet
                                    <ArrowUpRight className="w-4 h-4"/>
                                </a>
                                <a href={project.github} className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary">
                                    Code source
                                    <Github className="w-4 h-4"/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
           <div className="mt-12 flex justify-center">    
            <AnimateBorderButton >
                Voir plus de projets
            </AnimateBorderButton>
           </div>
            </div>
        </section>
    );
};
