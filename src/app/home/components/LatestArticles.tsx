import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ArticleCard from "@/components/article-card";

export function LatestArticles() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <Button variant="outline" asChild>
            <Link to="/articles" className="flex items-center">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ArticleCard
            title="The Impact of Climate Change on Rural Communities"
            excerpt="Exploring how environmental changes affect agricultural practices and livelihoods."
            imageUrl="/placeholder.svg?height=200&width=400"
            date="February 15, 2025"
            slug="/articles/climate-change-rural-communities"
            category="Environment"
          />
          <ArticleCard
            title="Women's Health: Addressing the Gap in Medical Research"
            excerpt="Investigating the disparities in healthcare research and treatment for women."
            imageUrl="/placeholder.svg?height=200&width=400"
            date="January 28, 2025"
            slug="/articles/womens-health-research-gap"
            category="Health"
          />
          <ArticleCard
            title="Economic Inequality in Urban Centers"
            excerpt="Analyzing the growing wealth gap and its impact on city infrastructure and services."
            imageUrl="/placeholder.svg?height=200&width=400"
            date="January 10, 2025"
            slug="/articles/economic-inequality-urban"
            category="Economics"
          />
        </div>
      </div>
    </section>
  );
}
