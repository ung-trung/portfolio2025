import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export const AboutMe = () => {
  return (
    <section id="about" className="mt-20 mb-16 scroll-mt-20">
      <h2 className="mb-2 box-decoration-clone bg-clip-text text-[1.7rem] font-bold">
        About me
        <span className="bg-gradient-to-r from-yellow-300 to-yellow-600 box-decoration-clone bg-clip-text text-transparent">
          .
        </span>
      </h2>
      <div className="max-w-prose">
        <p className="mt-4">
          I build web platforms that solve real problems. My work has helped
          streamline pricing operations, modernize hotel booking systems, and
          ship scalable SaaS products.
        </p>
        <p className="mt-4">
          I care about clean code, intuitive UX, and building with purpose. I
          design cloud-native apps, automate workflows, and use AI to optimize
          development.
        </p>
        <p className="mt-4">
          I&apos;ve mentored junior developers and love working in
          collaborative, fast-moving teams where ideas turn into real impact.
        </p>
      </div>
      <div className="mt-9 flex flex-row flex-wrap gap-4">
        <Button asChild size="lg" className="group shiny-hover">
          <a href="/cv.pdf" target="_blank">
            <Download className="duration-200 group-hover:translate-y-0.5" />
            Download CV
          </a>
        </Button>
        <Button variant="secondary" asChild size="lg" className="group">
          <Link href="#contact">Contact me</Link>
        </Button>
      </div>
    </section>
  );
};
