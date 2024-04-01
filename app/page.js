import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import MainLanguages from "@/components/MainLanguages";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className='h-full w-full poppins'>
      <section className='starfall' id='home'>
        <Hero />
      </section>
      <section>
        <Languages type='moon' />
      </section>
      <section className='lang' id='languages'>
        <MainLanguages />
      </section>
      <section>
        <Languages type='sun' />
      </section>
      <section id='projects' className='relative'>
        <Projects />
      </section>
      <section id='experience'>
        <Experience />
      </section>
      <section id='education'>
        <Education />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </main>
  );
}
