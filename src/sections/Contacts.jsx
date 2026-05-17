import { useLanguage } from "@/i18n/useLanguage";
import { Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import { useState } from "react";

const whatsappNumber = "2290155582917";
const emailAddress = "mawunamimarius@gmail.com";

export const Contacts = () => {
    const { t } = useLanguage();
    const [form, setForm] = useState({
        name: "",
        senderEmail: "",
        message: "",
    });
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.contact.whatsappText)}`;
    const emailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(t.contact.emailSubject)}&body=${t.contact.emailBody}`;
    const formEmailUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(t.contact.emailSubject)}&body=${encodeURIComponent(
        `${t.contact.nameLabel}: ${form.name}\n${t.contact.senderEmailLabel}: ${form.senderEmail}\n\n${form.message}`
    )}`;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = formEmailUrl;
    };

    return (
        <section id="contact" className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <div className="glass glow-border rounded-2xl p-6 md:p-10">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Sparkles className="h-7 w-7" />
                        </div>
                        <span className="text-sm font-medium uppercase tracking-wider text-secondary-foreground">
                            {t.contact.eyebrow}
                        </span>
                        <h2 className="mt-4 text-4xl font-bold text-secondary-foreground md:text-5xl">
                            {t.contact.titleStart}
                            <span className="font-serif italic font-normal text-foreground">{t.contact.titleEnd}</span>
                        </h2>
                        <p className="mt-6 text-muted-foreground">{t.contact.description}</p>

                        <div className="mt-8 flex flex-col gap-4">
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

                    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
                        <h3 className="text-2xl font-semibold text-foreground">{t.contact.formTitle}</h3>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                            <label className="block">
                                <span className="mb-2 block text-sm font-medium text-muted-foreground">
                                    {t.contact.nameLabel}
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder={t.contact.namePlaceholder}
                                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary/60"
                                    required
                                />
                            </label>
                            <label className="block">
                                <span className="mb-2 block text-sm font-medium text-muted-foreground">
                                    {t.contact.senderEmailLabel}
                                </span>
                                <input
                                    type="email"
                                    name="senderEmail"
                                    value={form.senderEmail}
                                    onChange={handleChange}
                                    placeholder={t.contact.senderEmailPlaceholder}
                                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary/60"
                                    required
                                />
                            </label>
                        </div>
                        <label className="mt-4 block">
                            <span className="mb-2 block text-sm font-medium text-muted-foreground">
                                {t.contact.messageLabel}
                            </span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder={t.contact.messagePlaceholder}
                                rows="7"
                                className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary/60"
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-px hover:bg-primary/90 sm:w-auto"
                        >
                            {t.contact.send}
                            <Send className="h-4 w-4" />
                        </button>
                        <p className="mt-5 text-xs leading-6 text-muted-foreground">{t.contact.formNote}</p>
                    </form>
                </div>
            </div>
        </section>
    );
};
