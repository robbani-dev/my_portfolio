import About from "@/components/about/About"
import Contact from "@/components/contact/Contact"
import Education from "@/components/education/Education"
import Hero from "@/components/hero/Hero"
import Projects from "@/components/projects/Projects"
import Skills from "@/components/skills/Skills"

const page = () => {
    return (
        <div>

            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education/>
            <Contact/>

        </div>
    )
}
export default page