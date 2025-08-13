import Hero from "@/app/_components/landing/Hero";
import Services from "./_components/landing/Services";
import Work from "./_components/landing/Work";
import Testimonials from "./_components/landing/Testimonials";
import ContactUs from "./_components/landing/ContactUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Work />
      <Testimonials />

      <ContactUs />
    </div>
  );
}
