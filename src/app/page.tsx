import { Hero } from "./home/components/Hero";
import { AreasOfFocus } from "./home/components/AreasOfFocus";
import { LatestArticles } from "./home/components/LatestArticles";
import { FeaturedWork } from "./home/components/FeaturedWork";
import { Testimonials } from "./home/components/Testimonials";
import { ContactCTA } from "./home/components/ContactCTA";
import { Grants } from "./home/components/Grants";

export default function Home() {
  return (
    <>
      <Hero />
      <AreasOfFocus />
      <LatestArticles />
      <FeaturedWork />
      <Testimonials />
      <ContactCTA />
      <Grants />
    </>
  );
}
