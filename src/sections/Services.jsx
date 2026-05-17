import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/i18n/useLanguage";
import { Braces, Database, Globe2, Network, PanelsTopLeft, Smartphone } from "lucide-react";

const serviceIcons = [Globe2, Smartphone, PanelsTopLeft, Braces, Database, Network];

export const Services = () => {
    const { t } = useLanguage();

    return (
        <section id="services" className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="text-sm font-medium uppercase tracking-wider text-secondary-foreground">
                        {t.services.eyebrow}
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-secondary-foreground md:text-5xl">
                        {t.services.titleStart}
                        <span className="font-serif italic font-normal text-foreground">{t.services.titleEnd}</span>
                    </h2>
                    <p className="mt-6 text-muted-foreground">{t.services.description}</p>
                </Reveal>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {t.services.items.map((service, index) => {
                        const Icon = serviceIcons[index];

                        return (
                            <Reveal
                                key={service.title}
                                delay={index * 90}
                                className="group glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_35px_rgb(32_178_166_/_0.12)]"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                                    {service.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
