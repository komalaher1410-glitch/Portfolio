import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Skills from '../sections/Skills';
import Achievements from '../sections/Achievements';
import GithubStats from '../sections/GithubStats';
import FeaturedProjects from '../sections/FeaturedProjects';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Certifications from '../sections/Certifications';
import Testimonials from '../sections/Testimonials';
import Resume from '../sections/Resume';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <main className="space-y-24 py-10 md:py-14">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Achievements />
      <GithubStats />
      <FeaturedProjects />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Testimonials />
      <Resume />
      <Contact />
    </main>
  );
}
