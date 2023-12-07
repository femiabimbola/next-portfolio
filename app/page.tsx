import About from "@/components/about";
import Contact from "@/components/contact";
import Experince from "@/components/experience";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Divider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 overflow-hidden ">
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Divider />
      <Skills />
      <Experince />
      <Contact />
      <Footer />
    </main>
  );
}
