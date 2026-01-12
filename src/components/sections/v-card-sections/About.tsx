"use client";
import AboutCard from "../../common/about/AboutCard";
import { about_me_text } from "@/data/about";
import ArrowLink from "../../common/global/ArrowLink";
import Goals from "../../common/about/Goals";
import VCardSection from "@/components/common/global/VCardSection";
import ProjectsTicker from "@/components/common/projects/ProjectsTicker";
import FavoriteStack from "@/components/common/about/FavoriteStack";
import Skills from "@/components/common/about/Skills";
import Languages from "../../common/about/Languages";
import Clients from "@/components/common/about/Clients";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useThemeVariantsContext } from "@/context/ThemeVariantsContext";
import { cn } from "@/lib/utils";

const About = () => {
  const scrollTo = useScrollToSection();
  const { aboutSection } = useThemeVariantsContext();
  return (
    <VCardSection title="about-me">
      <div
        className={cn(
          "lg:grid lg:grid-cols-12",
          aboutSection === "cards" ? "space-y-8" : "space-y-32"
        )}
      >
        <AboutCard title="About Me" className="col-span-12">
          <p className="text-lg leading-relaxed text-muted-foreground p-4">
            {about_me_text}
          </p>
        </AboutCard>

        <AboutCard title="What I Use">
          <FavoriteStack />
        </AboutCard>

        <div
          className={cn(
            "lg:col-span-12 lg:grid lg:grid-cols-12 lg:space-y-0",
            aboutSection === "cards"
              ? "lg:gap-8 space-y-8"
              : "lg:gap-16 space-y-32"
          )}
        >
          <AboutCard title="Skills" className="2xl:col-span-7 xl:col-span-6">
            <Skills />
          </AboutCard>

          <AboutCard title="Languages" className="2xl:col-span-5 xl:col-span-6">
            <Languages />
          </AboutCard>
        </div>

        <div className="col-span-12">
          <AboutCard title="Resent Projects">
            <div className="space-y-8">
              <ProjectsTicker />

              <ArrowLink
                text="All Projects"
                size="xl"
                className="lg:mx-0 mx-auto"
                onClick={() => scrollTo("portfolio")}
              />
            </div>
          </AboutCard>
        </div>



        <AboutCard title="my Goals">
          <Goals />
        </AboutCard>
      </div>
    </VCardSection>
  );
};

export default About;
