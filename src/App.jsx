import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Project} from "@/sections/Project";
import {Experience} from "@/sections/Experience";
import {Services} from "@/sections/Services";
import {Skills} from "@/sections/Skills";
import {Testimoniales} from "@/sections/Testimoniales";
import {Contacts} from "@/sections/Contacts";
import {Navbar} from "@/layout/Navbar";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { ThemeProvider } from "@/theme/ThemeContext";
import { NotFound } from "@/sections/NotFound";
function App() {
  const isKnownPath = window.location.pathname === "/";

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen overflow-x-hidden">
          {isKnownPath ? (
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
          ) : (
            <NotFound/>
          )}
        </div>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
