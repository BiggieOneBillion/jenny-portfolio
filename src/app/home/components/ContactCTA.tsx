import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-2 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
        <p className="max-w-2xl mx-auto mb-8 hidden md:block">
          I'm available for reporting assignments, media training, speaking
          engagements, and consultations. Get in touch to discuss how we can
          collaborate.
        </p>
        <p className="max-w-2xl mx-auto mb-8 md:hidden">
          I'm available for reporting assignments, <br /> media training, speaking
          engagements, and consultations. Get in touch to discuss how we can
          collaborate.
        </p>
        <Button
          variant="outline"
          asChild
          className="bg-white hover:bg-gray-100 text-primary"
        >
          <Link to="/contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  );
}
