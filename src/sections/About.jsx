import { useLanguage } from "@/i18n/useLanguage";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react"


const highlightIcons = [Code2, Rocket, Users, Lightbulb];

export const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center"> 
                    {/* Colonne gauche  */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                {t.about.eyebrow}
                            </span>
                        </div>
                        
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        {t.about.titleStart}
                    <span className="font-serif italic font-normal text-white">{t.about.titleEnd}</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            {t.about.description}
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 ">
                        <p className="text-lg font-medium italic text-foreground">
                            {t.about.mission}
                        </p>
                    </div>
                </div>

                    {/* Colonne droite  */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {t.about.highlights.map((item, idx) => {
                        const Icon = highlightIcons[idx];

                        return (
                        <div 
                        key={idx} 
                        className="glass p-6 rounded-2xl animate-fade-in"
                        style={{animationDelay: `${(idx + 1) * 100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors duration-300">
                            <Icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                    )})}
                </div>
            </div>
        </div>
        </section>
    )
}
