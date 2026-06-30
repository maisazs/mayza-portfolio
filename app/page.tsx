import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { Contact } from "@/components/sections/Contact";
import { PageLoader } from "@/components/ui/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />

      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Header />

      <main id="conteudo">
        <Hero />
        <Manifesto />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <WorkProcess />
        <Contact />
      </main>

      <Footer />
    </>
  );
}