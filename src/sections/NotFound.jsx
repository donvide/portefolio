import { Button } from "@/components/Button";
import { useLanguage } from "@/i18n/useLanguage";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    const { t } = useLanguage();

    return (
        <main className="flex min-h-screen items-center justify-center px-4">
            <section className="glass glow-border max-w-xl rounded-2xl p-8 text-center">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Home className="h-7 w-7" />
                </div>
                <h1 className="text-4xl font-bold text-secondary-foreground">{t.notFound.title}</h1>
                <p className="mt-4 text-muted-foreground">{t.notFound.description}</p>
                <div className="mt-8">
                    <Link to="/">
                        <Button>{t.notFound.action}</Button>
                    </Link>
                </div>
            </section>
        </main>
    );
};
