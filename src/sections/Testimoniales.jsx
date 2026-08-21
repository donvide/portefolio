import { SpotlightCard } from "@/components/SpotlightCard";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";
import { useLanguage } from "@/i18n/useLanguage";
import { Quote, Star } from "lucide-react";

const getInitials = (name) =>
    name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

export const Testimoniales = () => {
    const { t } = useLanguage();

    return (
        <section id="testimonials" className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-16 right-0 h-72 w-72 rounded-full bg-highlight/5 blur-3xl"></div>

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <StaggerGroup className="mx-auto mb-16 max-w-3xl text-center" stagger={0.12}>
                    <StaggerItem y={16}>
                        <span className="text-sm font-medium uppercase tracking-wider text-secondary-foreground">
                            {t.testimonials.eyebrow}
                        </span>
                    </StaggerItem>
                    <StaggerItem y={20}>
                        <h2 className="mt-4 text-4xl font-bold text-secondary-foreground md:text-5xl">
                            {t.testimonials.titleStart}
                            <span className="font-serif italic font-normal text-foreground">
                                {t.testimonials.titleEnd}
                            </span>
                        </h2>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="mt-6 text-muted-foreground">{t.testimonials.description}</p>
                    </StaggerItem>
                </StaggerGroup>

                <StaggerGroup
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    stagger={0.1}
                >
                    {t.testimonials.items.map((testimonial) => (
                        <StaggerItem key={testimonial.name} y={32} className="h-full">
                            <SpotlightCard className="glass rounded-2xl p-6 flex h-full flex-col transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_35px_rgb(32_178_166_/_0.12)]">
                                <div className="mb-4 flex items-center justify-between">
                                    <Quote className="h-7 w-7 text-primary/50" />
                                    <div className="flex gap-0.5">
                                        {Array.from({ length: 5 }).map((_, starIndex) => (
                                            <Star
                                                key={starIndex}
                                                className="h-3.5 w-3.5 fill-highlight text-highlight"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <p className="flex-1 text-sm leading-7 text-muted-foreground">
                                    “{testimonial.message}”
                                </p>

                                <div className="mt-6 flex items-center gap-3 border-t border-border/70 pt-5">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                                        {getInitials(testimonial.name)}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </StaggerItem>
                    ))}
                </StaggerGroup>
            </div>
        </section>
    );
};
