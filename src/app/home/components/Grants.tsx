import { Award, BookOpen, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { InfiniteMovingCards } from "@/components/infinte-moving-cards";

const awards = [
  {
    type: "award",
    title: "Environmental Reporting Excellence Award",
    organization: "African Media Initiative",
    year: "2024",
    description:
      "Recognized for outstanding reporting on environmental issues affecting marginalized communities.",
  },
  {
    type: "fellowship",
    title: "Investigative Journalism Fellowship",
    organization: "Global Investigative Journalism Network",
    year: "2023",
    description:
      "Selected for a year-long fellowship to investigate climate change impacts across West Africa.",
  },
  {
    type: "grant",
    title: "Women's Economic Empowerment Reporting Grant",
    organization: "International Women's Media Foundation",
    year: "2023",
    description:
      "Received funding to document women-led economic initiatives in post-conflict regions.",
  },
  {
    type: "award",
    title: "Health Reporting Impact Award",
    organization: "African Health Journalism Association",
    year: "2022",
    description:
      "Awarded for a series on maternal health challenges in rural communities.",
  },
  {
    type: "fellowship",
    title: "Environmental Journalism Fellowship",
    organization: "Earth Journalism Network",
    year: "2022",
    description:
      "Participated in a six-month program focused on climate change reporting and solutions journalism.",
  },
  {
    type: "grant",
    title: "Investigative Reporting Grant",
    organization: "Fund for Investigative Journalism",
    year: "2021",
    description:
      "Awarded a grant to investigate corruption in healthcare procurement systems.",
  },
];

function AwardIcon({ type }: { type: string }) {
  switch (type) {
    case "award":
      return <Award className="h-6 w-6 text-yellow-500" />;
    case "fellowship":
      return <Users className="h-6 w-6 text-blue-500" />;
    case "grant":
      return <BookOpen className="h-6 w-6 text-green-500" />;
    default:
      return null;
  }
}

export function Grants() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= awards.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Math.max(0, awards.length - itemsPerPage)
        : prevIndex - itemsPerPage
    );
  };

  const visibleAwards = awards.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-2">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Honored to receive recognition and support for impactful journalism
            projects that bring important stories to light.
          </p>
        </div>

        <div className="relative">
          <InfiniteMovingCards>
            <div className=" flex item-center lg:grid lg:grid-cols-3 gap-6">
              {visibleAwards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white w-[350px] p-6 rounded-lg shadow-sm border transition-all duration-300 hover:shadow-md"
                >
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                    <AwardIcon type={award.type} />
                  </div>
                  <Badge className="mb-2 capitalize">{award.type}</Badge>
                  <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {award.organization}, {award.year}
                  </p>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </div>
              ))}
            </div>
          </InfiniteMovingCards>

         
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/grants">View All Awards</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
