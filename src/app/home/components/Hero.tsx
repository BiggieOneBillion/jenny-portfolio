import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container px-2 mx-auto py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start ">
          <p className="text-lg mb-2">Hi, I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Jennifer Ugwa
          </h1>
          <p className="md:text-lg text-gray-700 mb-6 text-center md:text-left">
            An Independent Journalist and media trainer reporting on gender,
            environment, health, and socio-economic issues. I am passionate
            about writing features and narrative pieces that spotlight systemic
            issues and underserved groups.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to="/about">Read More</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="/placeholder.svg?height=600&width=450"
            alt="Jennifer Ugwa"
            width={450}
            height={600}
            className="rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
