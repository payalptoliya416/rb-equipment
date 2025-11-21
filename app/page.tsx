import AboutUs from "@/components/home/AboutUs";
import ChooseUs from "@/components/home/ChooseUs";
import CTA from "@/components/common/CTA";
import Equipment from "@/components/home/Equipment";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import HowWork from "@/components/home/HowWork";
import Partner from "@/components/home/Partner";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {

  return (
    <>
      <main>
       <Hero/>
       <AboutUs/>
       <Equipment/>
       <ChooseUs/>
       <HowWork/>
       <Testimonial/>
       <Partner/>
       <FAQ/>
       <CTA/>
      </main>
    </>
  );
}
