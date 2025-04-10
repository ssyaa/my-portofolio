
import type { Metadata } from "next";
import { ReactNode } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import About from "@/app/about/page"
import Contact from "@/app/contact/page"
import Project from "@/app/projects/page"
import Experience from "@/app/experience/page"


export const metadata: Metadata = {
  title: "Tasya Aulia Putri",
  description: "Portofolio pribadi saya",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
        <Navbar />
        <About />
        <Experience/>
        <Project />
        <Contact />
        <Footer />
    </div>
  );
}
