import { Button } from "@/components/Button";
import { useLanguage } from "@/i18n/useLanguage";
import { ArrowRight, ChevronDown, Download, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { AnimateBorderButton } from "../components/AnimateBorderButton";

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

export const Hero = () => {
    const { t } = useLanguage();

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

    return <section className="relative min-h-screen flex items-center  overflow-hidden">
        {/* Background Elements */}

        <div className="absolute inset-0 pointer-events-none">
            <img src="/hero-bg.jpg" alt="Hero background" className="w-full h-full object-cover opacity-40"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
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
         <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 ">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* colonne gauche - contenue du text  */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 p-2 rounded-full glass text-sm text-primary ">
                            <span className="w-3 h-3 bg-primary rounded-full animate-pulse"/>
                            {t.hero.role}
                        </span>
                    </div>

                    {/* Titre principal  */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100  glass-text">
                            {t.hero.titleStart} <span className="text-primary glow-text">{t.hero.titleHighlight}</span>
                            <br />
                            {t.hero.titleMiddle}
                            <br />
                            <span className="font-serif italic font-normal text-white">
                                {t.hero.titleEnd}
                            </span>
                        </h1>
                        <p 
                          className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800 glass-text"
                        >
                           {t.hero.intro}
                        </p>
                    </div>

                 {/* Bouton d'appel à l'action  */}
                 <div className="flex flex-wrap gap-6 animate-fade-in animation-delay-300">
                    <Button size="lg" onClick={handleScrollToContact}>{t.hero.contact} <ArrowRight size={16}/></Button>
                    <AnimateBorderButton>
                        <Download size={18} /> {t.hero.downloadCv}
                    </AnimateBorderButton>
                 </div>

                 {/* Réseaux sociaux  */}
                 <div className="flex items-center gap-4 animate-fade-in animation-delay-500">
                    <span className="text-sm text-muted-foreground">{t.hero.follow}</span>
                    {[
                        {icon:Github, href:"#"},
                        {icon:Linkedin, href:"#"},
                        {icon:Instagram, href:"#"},
                        {icon:Twitter, href:"#"},
                    ].map((social, idx) => (
                        <a key={idx} href={social.href} className="inline-flex items-center gap-2 p-2 rounded-full glass text-sm hover:bg-primary/10 hover:text-primary transition-all duration-300">
                           {<social.icon size={16}/>} 
                        </a>
                    ))}
                 </div>
                </div>
                {/* colonne droite - Photo de profil  */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Image de profil  */}
                    <div className="relative max-w-md mx-auto">
                        <div
                        className="absolute inset-0
                        rounded-3xl bg-gradient-to-br
                        from-primary/30 via-transparent
                        to-primary/10 blur-2xl animate-pulse"
                        />
                       <div className="relative z-10 glass rounded-3xl p-2 glow-border overflow-hidden">
                        <img 
                        src="/marius.jpeg" 
                        alt="marius" 
                        className="w-full aspect-[4/5] object-cover rounded-3xl"/>

                        {/* badge de suivi */}
                        <div className="absolute -bottom-4  -right-4 glass rounded-xl px-4 py-3 animate-float">
                            <div className="flex items-center gap-3">
                             <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                            <span className="text-sm font-medium text-white">{t.hero.available}</span>
                            </div>
                        </div>
                        {/* stat badge  */}
                        <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                            <div className="text-2xl font-bold text-primary ">+2</div>
                            <div className="text-xs text-muted-foreground font-medium">{t.hero.years}</div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>

                {/* Compétences  */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">
                    {t.hero.techLabel}
                </p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee ">
                        {[...skills, ...skills].map((skills, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300">{skills}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
         </div>

         <div className="absolute bottom-8 left-1/2 z-20 transform -translate-x-1/2 animate-fade-in animation-delay-800 pointer-events-auto" >
            <a 
            href="#about" 
            onClick={handleScrollToAbout}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary/80 transition-colors duration-300">
                <span className="text-xs uppercase tracking-wider ">{t.hero.scroll}</span>
                <ChevronDown size={36} className="animate-bounce"/>
            </a>
         </div>
         </section>
   
}
