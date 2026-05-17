import { useLanguage } from "@/i18n/useLanguage";
import { Mail, MessageCircle, Sparkles } from "lucide-react";

const whatsappNumber = "2290155582917";
const emailAddress = "mawunamimarius@gmail.com";

export const Contacts = () => {
    const { t } = useLanguage();
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.contact.whatsappText)}`;
    const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(t.contact.emailSubject)}&body=${t.contact.emailBody}`;

    return (
        <section id="contact" className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>

            <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="glass glow-border rounded-2xl p-6 text-center md:p-10">
                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Sparkles className="h-7 w-7" />
                    </div>
                    <span className="text-sm font-medium uppercase tracking-wider text-secondary-foreground">
                        {t.contact.eyebrow}
                    </span>
                    <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold text-secondary-foreground md:text-5xl">
                        {t.contact.titleStart}
                        <span className="font-serif italic font-normal text-white">{t.contact.titleEnd}</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">{t.contact.description}</p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-px hover:bg-primary/90"
                        >
                            <MessageCircle className="h-5 w-5" />
                            {t.contact.whatsapp}
                        </a>
                        <a
                            href={emailUrl}
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
                        >
                            <Mail className="h-5 w-5" />
                            {t.contact.email}
                        </a>
                    </div>

                    <p className="mt-6 text-sm text-muted-foreground">{t.contact.availability}</p>
                </div>
            </div>
        </section>
    );
};
