import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Project} from "@/sections/Project";
import {Experience} from "@/sections/Experience";
import {Testimoniales} from "@/sections/Testimoniales";
import {Contacts} from "@/sections/Contacts";
import {Navbar} from "@/layout/Navbar";
function App() {
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Project/>
      <Experience/>
      <Testimoniales/>
      <Contacts/>
    </main>
  </div>
}

export default App
