import About from "@/components/about";
import Intro from "@/components/intro";
import Divider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 overflow-hidden ">
      <Intro />
      <Divider />
      <About />
    </main>
  );
}
