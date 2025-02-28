import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, Users } from "lucide-react";

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

export default function GrantsPage() {
  return (
    <div className="container mx-auto px-2 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8">
        Grants, Fellowships & Awards
      </h1>

      <p className="text-lg mb-12">
        Throughout my career, I've been honored to receive recognition for my
        work and support for impactful journalism projects. These opportunities
        have enabled me to pursue in-depth investigations and bring important
        stories to light.
      </p>

      <div className="grid gap-8">
        {awards.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-start">
              <div className="mr-4">
                <AwardIcon type={item.type} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <Badge className="capitalize mb-2">{item.type}</Badge>
                <p className="text-gray-600 mb-1">
                  {item.organization}, {item.year}
                </p>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Impact of Support</h2>
        <p className="mb-4">
          These grants, fellowships, and awards have been instrumental in
          supporting my work and enabling me to pursue important stories. They
          have provided:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Resources for in-depth, long-term investigations</li>
          <li>Opportunities for specialized training and skill development</li>
          <li>Access to networks of expert sources and fellow journalists</li>
          <li>Platforms to amplify underreported stories and voices</li>
        </ul>
        <p className="mt-4">
          I'm deeply grateful for these opportunities and remain committed to
          producing impactful journalism that serves the public interest.
        </p>
      </div>
    </div>
  );
}
