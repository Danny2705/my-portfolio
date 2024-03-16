import Hero from "@/components/Hero";
import Languages from "@/components/Languages";
import MainLanguages from "@/components/MainLanguages";
import Link from "next/link";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <section className='starfall' id='home'>
        <Hero />
      </section>
      <section id='languages'>
        <Languages type='moon' />
      </section>
      <section className='lang'>
        <MainLanguages />
      </section>
      <section id='languages'>
        <Languages type='sun' />
      </section>
      <section id='projects'>Projects</section>
      <section id='experience'>Experience</section>
      <section id='education'>Education</section>
      <section id='contact'>Contact</section>
    </main>
  );
}
