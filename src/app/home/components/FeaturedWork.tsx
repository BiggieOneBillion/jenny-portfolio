import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function FeaturedWork() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Featured project on environmental reporting"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Environmental Justice in the Niger Delta
            </h3>
            <p className="text-gray-600 mb-6">
              A six-part investigative series examining the environmental and
              social impacts of oil extraction in the Niger Delta region. This
              project combined data analysis, community interviews, and
              historical research to document decades of environmental
              degradation and its effects on local communities.
            </p>
            <Button asChild>
              <Link to="/articles">Read the Series</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">
              Women's Health Initiative
            </h3>
            <p className="text-gray-600 mb-6">
              A collaborative project with healthcare professionals documenting
              women's experiences navigating healthcare systems across West
              Africa. This work highlighted systemic barriers to quality care
              and showcased community-led solutions improving health outcomes
              for women.
            </p>
            <Button asChild>
              <Link to="/articles">Explore the Project</Link>
            </Button>
          </div>
          <div className="relative h-[300px] lg:h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Featured project on women's health"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
