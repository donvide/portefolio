import { AnimatedCounter } from "@/components/AnimatedCounter";
import { SpotlightCard } from "@/components/SpotlightCard";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { useLanguage } from "@/i18n/useLanguage";
import { Code2, Database, GitBranch, Layers3, Network, Smartphone } from "lucide-react";

const skillIcons = [Layers3, Code2, Smartphone, Database, GitBranch, Network];

export const Skills = () => {
    const { t } = useLanguage();

    return (
        <section id="skills" className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-highlight/5 blur-3xl"></div>

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <StaggerGroup stagger={0.12}>
                        <StaggerItem y={16}>
                            <span className="text-sm font-medium uppercase tracking-wider text-secondary-foreground">
                                {t.skills.eyebrow}
                            </span>
                        </StaggerItem>
                        <StaggerItem y={20}>
                            <h2 className="mt-4 text-4xl font-bold text-secondary-foreground md:text-5xl">
                                {t.skills.titleStart}
                                <span className="font-serif italic font-normal text-foreground">
                                    {t.skills.titleEnd}
                                </span>
                            </h2>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="mt-6 text-muted-foreground">{t.skills.description}</p>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                                {t.skills.stats.map((stat) => (
                                    <SpotlightCard
                                        key={stat.label}
                                        className="glass rounded-2xl p-5"
                                    >
                                        <div className="text-3xl font-bold text-primary">
                                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                                    </SpotlightCard>
                                ))}
                            </div>
                        </StaggerItem>
                    </StaggerGroup>

                    <StaggerGroup className="grid gap-5 sm:grid-cols-2" stagger={0.08}>
                        {t.skills.groups.map((group, index) => {
                            const Icon = skillIcons[index];

                            return (
                                <StaggerItem key={group.title} y={28}>
                                    <SpotlightCard className="group glass rounded-2xl p-6 h-full transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                                        <div className="mb-5 flex items-center gap-3">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-foreground">
                                                {group.title}
                                            </h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {group.items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full border border-border/70 bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
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
