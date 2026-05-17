import { Code2, Lightbulb, Rocket, Users } from "lucide-react"


const highlight = [
    {
        icon: Code2,
        title: "Developpement web full stack",
        description:"Conception d'architectures web robustes et évolutives, alliant la puissance de Node.js à l'interactivité de React, pour créer des applications web performantes et intuitives." 
    } ,
    {
        icon: Rocket,
        title: "Performance et optimisation",
        description:"Optimisation des performances web grâce à des techniques avancées de mise en cache, de compression et de gestion efficace des ressources, assurant une expérience utilisateur fluide et rapide."
    },
    {
        icon: Users,
        title: "Collaboration et travail d'équipe",
        description:"Collaboration efficace au sein d'équipes multidisciplinaires, favorisant la communication transparente et l'intégration harmonieuse des compétences pour atteindre des objectifs communs."
    },
    {
        icon: Lightbulb,
        title: "Innovation et créativité",
        description:"Approche innovante et créative dans la résolution de problèmes, en explorant de nouvelles idées et en adoptant des technologies émergentes pour créer des solutions uniques et impactantes."
    }
]       
export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center"> 
                    {/* Colonne gauche  */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                A propos de moi 
                            </span>
                        </div>
                        
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        Architcture & Précision,
                    <span className="font-serif italic font-normal text-white"> un composant à la fois.</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            Passionné par l'architecture logicielle et l'efficacité du code, je transforme des idées complexes en solutions numériques fluides et performantes. En tant qu'analyste-programmeur, mon approche ne se limite pas à l'écriture de scripts : je conçois des systèmes robustes où chaque détail est pensé pour l'utilisateur final. Mon objectif est d'allier la rigueur de l'analyse à la puissance de l'écosystème JavaScript pour bâtir des produits qui durent.
                        </p>
                    </div>

                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 ">
                        <p className="text-lg font-medium italic text-foreground">
                            "Ma mission est de donner vie à vos idées en concevant des applications web et mobiles qui allient une architecture solide à une précision technique impeccable. Mon objectif est de transformer la complexité en simplicité, en créant des outils numériques performants, intuitifs et durables."
                        </p>
                    </div>
                </div>

                    {/* Colonne droite  */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {highlight.map((item, idx) => (
                        <div 
                        key={idx} 
                        className="glass p-6 rounded-2xl animate-fade-in"
                        style={{animationDelay: `${(idx + 1) * 100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors duration-300">
                            <item.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                        </div>
                        
                        
                    ))}
                </div>
            </div>
        </div>
        </section>
    )
}
