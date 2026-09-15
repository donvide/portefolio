import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Project} from "@/sections/Project";
import {Experience} from "@/sections/Experience";
import {Services} from "@/sections/Services";
import {Skills} from "@/sections/Skills";
import {Testimoniales} from "@/sections/Testimoniales";
import {Contacts} from "@/sections/Contacts";
import {Navbar} from "@/layout/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ThemeProvider } from "@/theme/ThemeContext";
import { NotFound } from "@/sections/NotFound";
import { ProjectsGallery } from "@/pages/ProjectsGallery";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToHash() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else {
            window.scrollTo({ top: 0 });
        }
    }, [location]);

    return null;
}

function Home() {
    return (
        <>
            <Navbar/>
            <main>
                <Hero/>
                <About/>
                <Services/>
                <Skills/>
                <Project/>
                <Experience/>
                <Testimoniales/>
                <Contacts/>
            </main>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <LanguageProvider>
                <ThemeProvider>
                    <div className="min-h-screen overflow-x-hidden">
                        <ScrollProgress/>
                        <ScrollToHash/>
                        <Routes>
                            <Route path="/" element={<Home/>} />
                            <Route path="/projects" element={<ProjectsGallery/>} />
                            <Route path="*" element={<NotFound/>} />
                        </Routes>
                    </div>
                </ThemeProvider>
            </LanguageProvider>
        </BrowserRouter>
    )
}

export default App