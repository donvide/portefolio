import { useMemo, useState } from "react";
import { LanguageContext } from "@/i18n/LanguageContextValue";

const translations = {
    fr: {
        nav: {
            about: "À propos",
            projects: "Projets",
            experience: "Expérience",
            testimonials: "Témoignages",
            contactLink: "Contact",
            contact: "Contactez moi",
            languageLabel: "Passer en anglais",
        },
        hero: {
            role: "Analyste programmeur",
            titleStart: "Créateur",
            titleHighlight: "d'expériences",
            titleMiddle: "numériques",
            titleEnd: "de haute précision.",
            intro:
                "Salut, je suis Marius Donvide, ingénieur en informatique. Spécialisé dans le développement web mobile et logiciel, je construis des expériences numériques avec précision en utilisant des technologies modernes. Expert de l'écosystème JavaScript, l'interactivité de React et la robustesse de Node.js.",
            contact: "Contactez moi",
            downloadCv: "Téléchargez mon CV",
            follow: "Me suivre sur :",
            available: "Disponible immédiatement",
            years: "ans Exp",
            techLabel: "Technologies avec lesquelles je travaille :",
            scroll: "Scroll",
        },
        about: {
            eyebrow: "À propos de moi",
            titleStart: "Architecture & Précision,",
            titleEnd: " un composant à la fois.",
            description:
                "Passionné par l'architecture logicielle et l'efficacité du code, je transforme des idées complexes en solutions numériques fluides et performantes. En tant qu'analyste-programmeur, mon approche ne se limite pas à l'écriture de scripts : je conçois des systèmes robustes où chaque détail est pensé pour l'utilisateur final. Mon objectif est d'allier la rigueur de l'analyse à la puissance de l'écosystème JavaScript pour bâtir des produits qui durent.",
            mission:
                "\"Ma mission est de donner vie à vos idées en concevant des applications web et mobiles qui allient une architecture solide à une précision technique impeccable. Mon objectif est de transformer la complexité en simplicité, en créant des outils numériques performants, intuitifs et durables.\"",
            highlights: [
                {
                    title: "Développement web full stack",
                    description:
                        "Conception d'architectures web robustes et évolutives, alliant la puissance de Node.js à l'interactivité de React, pour créer des applications web performantes et intuitives.",
                },
                {
                    title: "Performance et optimisation",
                    description:
                        "Optimisation des performances web grâce à des techniques avancées de mise en cache, de compression et de gestion efficace des ressources, assurant une expérience utilisateur fluide et rapide.",
                },
                {
                    title: "Collaboration et travail d'équipe",
                    description:
                        "Collaboration efficace au sein d'équipes multidisciplinaires, favorisant la communication transparente et l'intégration harmonieuse des compétences pour atteindre des objectifs communs.",
                },
                {
                    title: "Innovation et créativité",
                    description:
                        "Approche innovante et créative dans la résolution de problèmes, en explorant de nouvelles idées et en adoptant des technologies émergentes pour créer des solutions uniques et impactantes.",
                },
            ],
        },
        projects: {
            eyebrow: "Présentation d'oeuvres",
            titleStart: "Projets",
            titleEnd: " récents",
            description:
                "Une sélection de mes projets les plus récents, mettant en avant mes compétences en développement web et ma passion pour la création de solutions innovantes.",
            viewProject: "Voir le projet",
            sourceCode: "Code source",
            more: "Voir plus de projets",
            items: [
                {
                    title: "Mon portefolio",
                    description:
                        "Réalisé avec React, Tailwind CSS et Vite, ce projet met en avant mes compétences en développement web et ma passion pour la création de sites modernes et réactifs.",
                },
                {
                    title: "Landing page",
                    description: "Un projet de landing page réalisé avec React, Tailwind CSS et Python.",
                },
            ],
        },
        experience: {
            eyebrow: "Parcours & expériences",
            titleStart: "Une progression",
            titleEnd: " construite par la pratique",
            description:
                "Étudiant en deuxième année de licence, je développe mes compétences à travers la formation, les stages et les projets de groupe, avec une attention particulière pour le web, les données, le mobile et les réseaux.",
            profileTitle: "Profil actuel",
            profile:
                "Je suis étudiant en deuxième année de licence à HECM. Mon parcours combine des bases académiques solides, des stages techniques chez CITECH Sarl et des projets collaboratifs qui renforcent ma capacité à apprendre vite et à produire du concret.",
            focusAreas: [
                { title: "Données", description: "Modélisation, SQL, MySQL et logique de stockage." },
                { title: "Réseau", description: "Bases réseau, diagnostic et compréhension des infrastructures." },
                { title: "Web", description: "Interfaces React, APIs Express, PHP et Laravel." },
                { title: "Mobile", description: "Apprentissage Flutter pour créer des applications mobiles." },
            ],
            items: [
                {
                    period: "2024 - Aujourd'hui",
                    title: "Licence en informatique de gestion",
                    organization: "HECM, Haute Ecole de Commerce et de Management",
                    location: "Bénin",
                    status: "Formation",
                    description:
                        "Parcours académique orienté analyse, développement logiciel, bases de données et réseaux. Cette formation consolide ma rigueur technique et ma capacité à concevoir des solutions numériques structurées.",
                    achievements: [
                        "Approfondissement des concepts de base de données, modélisation et requêtes SQL.",
                        "Renforcement des compétences en réseau, logique informatique et méthodologie de projet.",
                        "Travaux pratiques et projets de groupe autour du développement web.",
                    ],
                },
                {
                    period: "Juin 2025 - Août 2025",
                    title: "Stagiaire en développement web et réseau",
                    organization: "CITECH Sarl",
                    location: "Bénin",
                    status: "Stage",
                    description:
                        "Première immersion professionnelle dans un environnement technique. J'y ai développé des bases solides en développement backend, gestion de bases de données et administration réseau.",
                    achievements: [
                        "Participation à des travaux pratiques autour de PHP et MySQL.",
                        "Découverte des principes de configuration et de diagnostic réseau.",
                        "Application des acquis scolaires dans des situations professionnelles concrètes.",
                    ],
                },
                {
                    period: "Juin 2026 - Août 2026",
                    title: "Stage prévu en développement mobile et web",
                    organization: "CITECH Sarl",
                    location: "Bénin",
                    status: "Prévu",
                    description:
                        "Nouvelle expérience prévue chez CITECH Sarl, orientée développement mobile, backend web et consolidation des compétences réseau.",
                    achievements: [
                        "Montée en compétence prévue sur Flutter pour le développement mobile.",
                        "Pratique renforcée de Laravel, PHP et des fondamentaux réseau.",
                        "Objectif : produire des interfaces utiles, fiables et mieux structurées.",
                    ],
                },
                {
                    period: "Projets académiques",
                    title: "Développement d'applications en groupe",
                    organization: "HECM et projets personnels",
                    location: "Travail collaboratif",
                    status: "Projet",
                    description:
                        "Réalisation de petits projets en équipe qui m'ont permis de mieux comprendre le cycle de développement, la collaboration et la construction d'interfaces modernes.",
                    achievements: [
                        "Création de fonctionnalités avec React, JavaScript, Node.js et Express.",
                        "Utilisation de Git et GitHub pour organiser le travail en équipe.",
                        "Développement d'une meilleure logique frontend, backend et API.",
                    ],
                },
            ],
        },
        testimonials: {
            eyebrow: "Avis & retours",
            titleStart: "Ils peuvent laisser",
            titleEnd: " un témoignage",
            description:
                "Les visiteurs peuvent partager un retour directement depuis cette page. Le témoignage apparaît automatiquement dans cette section sur leur navigateur.",
            formTitle: "Ajouter un témoignage",
            nameLabel: "Nom",
            roleLabel: "Profil ou relation",
            messageLabel: "Message",
            namePlaceholder: "Votre nom",
            rolePlaceholder: "Client, camarade, collaborateur...",
            messagePlaceholder: "Écrivez votre témoignage...",
            submit: "Publier le témoignage",
            empty: "Aucun témoignage pour le moment. Soyez le premier à laisser un retour.",
            saved: "Témoignage ajouté",
            storageNote:
                "Note : sans base de données, les témoignages sont conservés localement dans le navigateur du visiteur.",
        },
        contact: {
            eyebrow: "Contact",
            titleStart: "Discutons de",
            titleEnd: " votre projet",
            description:
                "Vous pouvez me contacter directement par WhatsApp ou par email. Je réponds dès que possible pour échanger sur votre besoin, une collaboration ou une opportunité.",
            whatsapp: "Me contacter sur WhatsApp",
            email: "Me contacter par email",
            whatsappText: "Bonjour Marius, je viens de visiter votre portfolio et j'aimerais échanger avec vous.",
            emailSubject: "Contact depuis votre portfolio",
            emailBody: "Bonjour Marius,%0D%0A%0D%0AJe viens de visiter votre portfolio et j'aimerais échanger avec vous.",
            availability: "Disponible pour projets, stages et collaborations.",
        },
    },
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            experience: "Experience",
            testimonials: "Testimonials",
            contactLink: "Contact",
            contact: "Contact me",
            languageLabel: "Switch to French",
        },
        hero: {
            role: "Programmer analyst",
            titleStart: "Creator of",
            titleHighlight: "precise",
            titleMiddle: "digital experiences",
            titleEnd: "built with care.",
            intro:
                "Hi, I am Marius Donvide, a computer science student and developer. I build web, mobile and software experiences with modern technologies, with a strong focus on JavaScript, React interactivity and Node.js reliability.",
            contact: "Contact me",
            downloadCv: "Download my CV",
            follow: "Follow me:",
            available: "Available immediately",
            years: "yrs Exp",
            techLabel: "Technologies I work with:",
            scroll: "Scroll",
        },
        about: {
            eyebrow: "About me",
            titleStart: "Architecture & Precision,",
            titleEnd: " one component at a time.",
            description:
                "Passionate about software architecture and efficient code, I turn complex ideas into smooth, high-performing digital solutions. As a programmer analyst, my approach goes beyond writing scripts: I design robust systems where every detail is considered for the end user.",
            mission:
                "\"My mission is to bring ideas to life by designing web and mobile applications that combine solid architecture with technical precision. I aim to transform complexity into simple, reliable and durable digital tools.\"",
            highlights: [
                {
                    title: "Full stack web development",
                    description:
                        "Designing robust and scalable web architectures by combining Node.js power with React interactivity.",
                },
                {
                    title: "Performance and optimization",
                    description:
                        "Improving web performance through caching, resource management and careful interface implementation.",
                },
                {
                    title: "Team collaboration",
                    description:
                        "Working effectively in groups, communicating clearly and contributing to shared technical goals.",
                },
                {
                    title: "Innovation and creativity",
                    description:
                        "Exploring new ideas and technologies to solve problems with useful and thoughtful digital solutions.",
                },
            ],
        },
        projects: {
            eyebrow: "Selected work",
            titleStart: "Recent",
            titleEnd: " projects",
            description:
                "A selection of recent projects showcasing my web development skills, my learning path and my interest in building useful digital experiences.",
            viewProject: "View project",
            sourceCode: "Source code",
            more: "View more projects",
            items: [
                {
                    title: "My portfolio",
                    description:
                        "Built with React, Tailwind CSS and Vite, this project highlights my web development skills and my interest in modern, responsive interfaces.",
                },
                {
                    title: "Landing page",
                    description: "A landing page project built with React, Tailwind CSS and Python.",
                },
            ],
        },
        experience: {
            eyebrow: "Path & experience",
            titleStart: "Progress",
            titleEnd: " shaped by practice",
            description:
                "As a second-year bachelor's student, I grow through academic training, internships and group projects, with a focus on web development, data, mobile development and networking.",
            profileTitle: "Current profile",
            profile:
                "I am a second-year bachelor's student at HECM. My path combines academic foundations, technical internships at CITECH Sarl and collaborative projects that strengthen my ability to learn fast and build concrete results.",
            focusAreas: [
                { title: "Data", description: "Modeling, SQL, MySQL and storage logic." },
                { title: "Networking", description: "Network basics, diagnostics and infrastructure understanding." },
                { title: "Web", description: "React interfaces, Express APIs, PHP and Laravel." },
                { title: "Mobile", description: "Learning Flutter to build mobile applications." },
            ],
            items: [
                {
                    period: "2024 - Present",
                    title: "Bachelor's degree in IT management",
                    organization: "HECM, Haute Ecole de Commerce et de Management",
                    location: "Benin",
                    status: "Education",
                    description:
                        "Academic training focused on analysis, software development, databases and networking, strengthening my technical discipline and system design mindset.",
                    achievements: [
                        "Deepened database concepts, modeling and SQL queries.",
                        "Strengthened networking, computer logic and project methodology skills.",
                        "Completed practical work and group projects around web development.",
                    ],
                },
                {
                    period: "June 2025 - August 2025",
                    title: "Web development and networking intern",
                    organization: "CITECH Sarl",
                    location: "Benin",
                    status: "Internship",
                    description:
                        "First professional immersion in a technical environment, where I built solid foundations in backend development, databases and networking.",
                    achievements: [
                        "Contributed to practical work around PHP and MySQL.",
                        "Discovered network configuration and diagnostics principles.",
                        "Applied academic knowledge in concrete professional situations.",
                    ],
                },
                {
                    period: "June 2026 - August 2026",
                    title: "Planned mobile and web development internship",
                    organization: "CITECH Sarl",
                    location: "Benin",
                    status: "Planned",
                    description:
                        "Upcoming experience at CITECH Sarl focused on mobile development, web backend practice and networking fundamentals.",
                    achievements: [
                        "Planned growth on Flutter for mobile development.",
                        "More practice with Laravel, PHP and networking fundamentals.",
                        "Goal: build useful, reliable and better-structured interfaces.",
                    ],
                },
                {
                    period: "Academic projects",
                    title: "Group application development",
                    organization: "HECM and personal projects",
                    location: "Collaborative work",
                    status: "Project",
                    description:
                        "Small team projects that helped me understand the development cycle, collaboration and modern interface building.",
                    achievements: [
                        "Built features with React, JavaScript, Node.js and Express.",
                        "Used Git and GitHub to organize teamwork.",
                        "Improved my frontend, backend and API development logic.",
                    ],
                },
            ],
        },
        testimonials: {
            eyebrow: "Feedback",
            titleStart: "Visitors can leave",
            titleEnd: " a testimonial",
            description:
                "Visitors can share feedback directly from this page. The testimonial appears automatically in this section on their browser.",
            formTitle: "Add a testimonial",
            nameLabel: "Name",
            roleLabel: "Profile or relation",
            messageLabel: "Message",
            namePlaceholder: "Your name",
            rolePlaceholder: "Client, classmate, collaborator...",
            messagePlaceholder: "Write your testimonial...",
            submit: "Publish testimonial",
            empty: "No testimonials yet. Be the first to leave feedback.",
            saved: "Testimonial added",
            storageNote:
                "Note: without a database, testimonials are stored locally in the visitor's browser.",
        },
        contact: {
            eyebrow: "Contact",
            titleStart: "Let's talk about",
            titleEnd: " your project",
            description:
                "You can contact me directly through WhatsApp or email. I reply as soon as possible to discuss your need, a collaboration or an opportunity.",
            whatsapp: "Contact me on WhatsApp",
            email: "Contact me by email",
            whatsappText: "Hello Marius, I visited your portfolio and I would like to talk with you.",
            emailSubject: "Contact from your portfolio",
            emailBody: "Hello Marius,%0D%0A%0D%0AI visited your portfolio and I would like to talk with you.",
            availability: "Available for projects, internships and collaborations.",
        },
    },
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("fr");

    const value = useMemo(
        () => ({
            language,
            setLanguage,
            toggleLanguage: () => setLanguage((current) => (current === "fr" ? "en" : "fr")),
            t: translations[language],
        }),
        [language]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
