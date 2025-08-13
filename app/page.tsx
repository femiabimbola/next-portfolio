import About from "@/components/about";
import Contact from "@/components/contact";

// import  Experience from "@/components/experience"
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Divider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return ( 
    // overflow-hidden
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Divider />
      <Skills />
      {/* <Experience /> */}
      <Contact />
    </main>
  );
}
