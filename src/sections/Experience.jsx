import {
    BriefcaseBusiness,
    CalendarDays,
    Code2,
    Database,
    GraduationCap,
    MapPin,
    Network,
    Smartphone,
} from "lucide-react";

const experiences = [
    {
        period: "2024 - Aujourd'hui",
        title: "Licence en informatique de gestion",
        organization: "HECM, Haute Ecole de Commerce et de Management",
        location: "Bénin",
        status: "Formation",
        icon: GraduationCap,
        description:
            "Parcours académique orienté analyse, développement logiciel, bases de données et réseaux. Cette formation consolide ma rigueur technique et ma capacité à concevoir des solutions numériques structurées.",
        achievements: [
            "Approfondissement des concepts de base de données, modélisation et requêtes SQL.",
            "Renforcement des compétences en réseau, logique informatique et méthodologie de projet.",
            "Travaux pratiques et projets de groupe autour du développement web.",
        ],
        stack: ["Base de données", "Réseau", "Analyse", "SQL"],
    },
    {
        period: "Juin 2025 - Août 2025",
        title: "Stagiaire en développement web et réseau",
        organization: "CITECH Sarl",
        location: "Bénin",
        status: "Stage",
        icon: BriefcaseBusiness,
        description:
            "Première immersion professionnelle dans un environnement technique. J'y ai développé des bases solides en développement backend, gestion de bases de données et administration réseau.",
        achievements: [
            "Participation à des travaux pratiques autour de PHP et MySQL.",
            "Découverte des principes de configuration et de diagnostic réseau.",
            "Application des acquis scolaires dans des situations professionnelles concrètes.",
        ],
        stack: ["PHP", "MySQL", "Réseau", "Support technique"],
    },
    {
        period: "Juin 2026 - Août 2026",
        title: "Stage prévu en développement mobile et web",
        organization: "CITECH Sarl",
        location: "Bénin",
        status: "Prévu",
        icon: Smartphone,
        description:
            "Nouvelle expérience prévue chez CITECH Sarl, orientée développement mobile, backend web et consolidation des compétences réseau.",
        achievements: [
            "Montée en compétence prévue sur Flutter pour le développement mobile.",
            "Pratique renforcée de Laravel, PHP et des fondamentaux réseau.",
            "Objectif : produire des interfaces utiles, fiables et mieux structurées.",
        ],
        stack: ["Flutter", "Laravel", "PHP", "Réseau"],
    },
    {
        period: "Projets académiques",
        title: "Développement d'applications en groupe",
        organization: "HECM et projets personnels",
        location: "Travail collaboratif",
        status: "Projet",
        icon: Code2,
        description:
            "Réalisation de petits projets en équipe qui m'ont permis de mieux comprendre le cycle de développement, la collaboration et la construction d'interfaces modernes.",
        achievements: [
            "Création de fonctionnalités avec React, JavaScript, Node.js et Express.",
            "Utilisation de Git et GitHub pour organiser le travail en équipe.",
            "Développement d'une meilleure logique frontend, backend et API.",
        ],
        stack: ["React", "Node.js", "Express", "JavaScript", "Git/GitHub"],
    },
];

const focusAreas = [
    {
        icon: Database,
        title: "Données",
        description: "Modélisation, SQL, MySQL et logique de stockage.",
    },
    {
        icon: Network,
        title: "Réseau",
        description: "Bases réseau, diagnostic et compréhension des infrastructures.",
    },
    {
        icon: Code2,
        title: "Web",
        description: "Interfaces React, APIs Express, PHP et Laravel.",
    },
    {
        icon: Smartphone,
        title: "Mobile",
        description: "Apprentissage Flutter pour créer des applications mobiles.",
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-highlight/5 blur-3xl"></div>

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="text-sm font-medium uppercase tracking-wider text-secondary-foreground">
                        Parcours & expériences
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-secondary-foreground md:text-5xl">
                        Une progression
                        <span className="font-serif italic font-normal text-white"> construite par la pratique</span>
                    </h2>
                    <p className="mt-6 text-muted-foreground">
                        Étudiant en deuxième année de licence, je développe mes compétences à travers la formation,
                        les stages et les projets de groupe, avec une attention particulière pour le web, les données,
                        le mobile et les réseaux.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                    <div className="space-y-6">
                        <div className="glass glow-border rounded-2xl p-6 animate-fade-in">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <GraduationCap className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground">Profil actuel</h3>
                            <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                Je suis étudiant en deuxième année de licence à HECM. Mon parcours combine des bases
                                académiques solides, des stages techniques chez CITECH Sarl et des projets collaboratifs
                                qui renforcent ma capacité à apprendre vite et à produire du concret.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                            {focusAreas.map((area, index) => (
                                <div
                                    key={area.title}
                                    className="group glass animate-fade-in rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface/70"
                                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                                            <area.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">{area.title}</h4>
                                            <p className="mt-1 text-sm text-muted-foreground">{area.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="experience-line absolute left-5 top-0 hidden h-full w-px md:block"></div>
                        <div className="space-y-6">
                            {experiences.map((experience, index) => (
                                <article
                                    key={`${experience.title}-${experience.period}`}
                                    className="group relative animate-fade-in md:pl-14"
                                    style={{ animationDelay: `${(index + 2) * 120}ms` }}
                                >
                                    <div className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-[0_0_25px_rgb(32_178_166_/_0.22)] md:flex">
                                        <experience.icon className="h-5 w-5" />
                                    </div>

                                    <div className="glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_35px_rgb(32_178_166_/_0.12)]">
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                            <div>
                                                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                                                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                                                        <CalendarDays className="h-3.5 w-3.5" />
                                                        {experience.period}
                                                    </span>
                                                    <span className="inline-flex items-center gap-2">
                                                        <MapPin className="h-3.5 w-3.5" />
                                                        {experience.location}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                                                    {experience.title}
                                                </h3>
                                                <p className="mt-1 text-sm font-medium text-secondary-foreground">
                                                    {experience.organization}
                                                </p>
                                            </div>
                                            <span className="w-fit rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                                {experience.status}
                                            </span>
                                        </div>

                                        <p className="mt-5 text-sm leading-7 text-muted-foreground">
                                            {experience.description}
                                        </p>

                                        <ul className="mt-5 space-y-3">
                                            {experience.achievements.map((achievement) => (
                                                <li key={achievement} className="flex gap-3 text-sm text-muted-foreground">
                                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]"></span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {experience.stack.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-full border border-border/70 bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
