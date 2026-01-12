"use server";
import VCardSectionsLayout from "@/components/common/global/VCardSectionsLayout";
import Contact from "@/components/sections/Contact";
import Home from "@/components/sections/Home";
import About from "@/components/sections/v-card-sections/About";
import Experience from "@/components/sections/v-card-sections/Experience";
import Portfolio from "@/components/sections/v-card-sections/Portfolio";
import Services from "@/components/sections/v-card-sections/Services";

const Page = () => {
  return (
    <>
      <Home />

      <VCardSectionsLayout>
        <About />
        <Services />
        <Experience />
        <Portfolio />
      </VCardSectionsLayout>

      <Contact />
    </>
  );
};

export default Page;
