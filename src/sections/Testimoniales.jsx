import { useLanguage } from "@/i18n/useLanguage";
import { MessageSquareQuote, Send, UserRound } from "lucide-react";
import { useState } from "react";

const STORAGE_KEY = "marius-portfolio-testimonials";

const getStoredTestimonials = () => {
    const savedTestimonials = window.localStorage.getItem(STORAGE_KEY);
    return savedTestimonials ? JSON.parse(savedTestimonials) : [];
};

export const Testimoniales = () => {
    const { t } = useLanguage();
    const [testimonials, setTestimonials] = useState(getStoredTestimonials);
    const [form, setForm] = useState({
        name: "",
        role: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const testimonial = {
            id: crypto.randomUUID(),
            name: form.name.trim(),
            role: form.role.trim(),
            message: form.message.trim(),
            date: new Date().toISOString(),
        };

        if (!testimonial.name || !testimonial.message) {
            return;
        }

        const nextTestimonials = [testimonial, ...testimonials];
        setTestimonials(nextTestimonials);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextTestimonials));
        setForm({ name: "", role: "", message: "" });
        setStatus(t.testimonials.saved);
        window.setTimeout(() => setStatus(""), 2400);
    };

    return (
        <section id="testimonials" className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-16 right-0 h-72 w-72 rounded-full bg-highlight/5 blur-3xl"></div>

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="text-sm font-medium uppercase tracking-wider text-secondary-foreground">
                        {t.testimonials.eyebrow}
                    </span>
                    <h2 className="mt-4 text-4xl font-bold text-secondary-foreground md:text-5xl">
                        {t.testimonials.titleStart}
                        <span className="font-serif italic font-normal text-foreground">{t.testimonials.titleEnd}</span>
                    </h2>
                    <p className="mt-6 text-muted-foreground">{t.testimonials.description}</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <form onSubmit={handleSubmit} className="glass glow-border rounded-2xl p-6">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <MessageSquareQuote className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-foreground">{t.testimonials.formTitle}</h3>
                                {status && <p className="mt-1 text-sm text-primary">{status}</p>}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="block">
                                <span className="mb-2 block text-sm font-medium text-muted-foreground">
                                    {t.testimonials.nameLabel}
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder={t.testimonials.namePlaceholder}
                                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary/60"
                                    required
                                />
                            </label>

                            <label className="block">
                                <span className="mb-2 block text-sm font-medium text-muted-foreground">
                                    {t.testimonials.roleLabel}
                                </span>
                                <input
                                    type="text"
                                    name="role"
                                    value={form.role}
                                    onChange={handleChange}
                                    placeholder={t.testimonials.rolePlaceholder}
                                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary/60"
                                />
                            </label>

                            <label className="block">
                                <span className="mb-2 block text-sm font-medium text-muted-foreground">
                                    {t.testimonials.messageLabel}
                                </span>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder={t.testimonials.messagePlaceholder}
                                    rows="5"
                                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary/60"
                                    required
                                />
                            </label>

                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-px hover:bg-primary/90 sm:w-auto"
                            >
                                {t.testimonials.submit}
                                <Send className="h-4 w-4" />
                            </button>
                        </div>

                        <p className="mt-5 text-xs leading-6 text-muted-foreground">{t.testimonials.storageNote}</p>
                    </form>

                    <div className="space-y-4">
                        {testimonials.length === 0 ? (
                            <div className="glass rounded-2xl p-6 text-center text-muted-foreground">
                                {t.testimonials.empty}
                            </div>
                        ) : (
                            testimonials.map((testimonial) => (
                                <article
                                    key={testimonial.id}
                                    className="group glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_35px_rgb(32_178_166_/_0.12)]"
                                >
                                    <div className="mb-4 flex items-start justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <UserRound className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                                                {testimonial.role && (
                                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                                )}
                                            </div>
                                        </div>
                                        <MessageSquareQuote className="h-5 w-5 text-primary/70" />
                                    </div>
                                    <p className="text-sm leading-7 text-muted-foreground">{testimonial.message}</p>
                                </article>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
