import { Award, BookOpen, FileText, Users } from "lucide-react";

export function AreasOfFocus() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-2">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Areas of Focus</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My reporting covers a range of interconnected issues that affect
            communities across Africa, with a particular emphasis on amplifying
            underrepresented voices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FocusCard
            icon={<FileText className="h-6 w-6 text-primary" />}
            title="Environmental Reporting"
            description="Investigating climate change impacts, conservation efforts, and environmental justice issues."
          />
          <FocusCard
            icon={<Users className="h-6 w-6 text-primary" />}
            title="Gender Issues"
            description="Exploring gender equality, women's rights, and the intersection of gender with other social factors."
          />
          <FocusCard
            icon={<BookOpen className="h-6 w-6 text-primary" />}
            title="Health Reporting"
            description="Covering healthcare access, public health challenges, and medical research disparities."
          />
          <FocusCard
            icon={<Award className="h-6 w-6 text-primary" />}
            title="Socio-economic Issues"
            description="Analyzing economic inequality, development challenges, and community-based solutions."
          />
        </div>
      </div>
    </section>
  );
}

interface FocusCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FocusCard({ icon, title, description }: FocusCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
