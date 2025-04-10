// src/app/page.tsx
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Project from "@/app/projects/page";
import Experience from "@/app/experience/page";

export default function HomePage() {
  return (
    <div>
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}
