import { SpotlightCard } from "@/components/SpotlightCard";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { useLanguage } from "@/i18n/useLanguage";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlightIcons = [Code2, Rocket, Users, Lightbulb];

export const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center">
                    {/* Colonne gauche */}
                    <StaggerGroup className="space-y-8" stagger={0.12}>
                        <StaggerItem>
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                {t.about.eyebrow}
                            </span>
                        </StaggerItem>

                        <StaggerItem y={20}>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
                                {t.about.titleStart}
                                <span className="font-serif italic font-normal text-foreground">
                                    {t.about.titleEnd}
                                </span>
                            </h2>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="space-y-4 text-muted-foreground">
                                <p>{t.about.description}</p>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="glass rounded-2xl p-6 glow-border">
                                <p className="text-lg font-medium italic text-foreground">
                                    {t.about.mission}
                                </p>
                            </div>
                        </StaggerItem>
                    </StaggerGroup>

                    {/* Colonne droite */}
                    <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-2" stagger={0.1}>
                        {t.about.highlights.map((item, idx) => {
                            const Icon = highlightIcons[idx];

                            return (
                                <StaggerItem key={item.title} y={30}>
                                    <SpotlightCard className="glass p-6 rounded-2xl h-full transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors duration-300">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground text-sm">{item.description}</p>
                                    </SpotlightCard>
                                </StaggerItem>
                            );
                        })}
                    </StaggerGroup>
                </div>
            </div>
        </section>
    );
};
