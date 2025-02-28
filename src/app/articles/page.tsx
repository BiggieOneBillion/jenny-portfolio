import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import ArticleCard from "@/components/article-card";
import { Link, useSearchParams } from "react-router-dom";

const articles = [
  {
    title: "The Impact of Climate Change on Rural Communities",
    excerpt:
      "Exploring how environmental changes affect agricultural practices and livelihoods in rural areas across Nigeria.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    date: "February 15, 2025",
    slug: "/articles/climate-change-rural-communities",
    category: "Environment",
  },
  {
    title: "Women's Health: Addressing the Gap in Medical Research",
    excerpt:
      "Investigating the disparities in healthcare research and treatment for women in developing countries.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    date: "January 28, 2025",
    slug: "/articles/womens-health-research-gap",
    category: "Health",
  },
  {
    title: "Economic Inequality in Urban Centers",
    excerpt:
      "Analyzing the growing wealth gap and its impact on city infrastructure and services in major African cities.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    date: "January 10, 2025",
    slug: "/articles/economic-inequality-urban",
    category: "Socio-economic Issues",
  },
  {
    title: "The Crisis of Water Scarcity in Sub-Saharan Africa",
    excerpt:
      "Examining the causes and consequences of water shortages and their impact on communities and development.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    date: "December 5, 2024",
    category: "Environment",
  },
  {
    title: "Gender Equality in the Workplace: Progress and Challenges",
    excerpt:
      "Assessing the current state of gender equality in various industries and the obstacles that remain.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    date: "November 18, 2024",
    category: "Gender Issues",
  },
  {
    title: "The Impact of Digital Technology on Journalism in Africa",
    excerpt:
      "Exploring how digital tools are transforming journalism practices and media consumption across the continent.",
    imageUrl: "/placeholder.svg?height=200&width=400",
    date: "October 30, 2024",
    category: "Media",
  },
];

const categories = [
  "All",
  "Environment",
  "Health",
  "Gender Issues",
  "Socio-economic Issues",
  "Media",
];

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = articles.filter((article) =>
    selectedCategory === "All" ? true : article.category === selectedCategory
  );

  const search = useSearchParams();

  useEffect(() => {
    const category = search[0].get("category");
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    }
  }, [search]);

  return (
    <div className="container mx-auto px-2 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8">Articles</h1>

      <div className="mb-12">
        <h2
          className="text-2xl font-semibold mb-4 cursor-pointer"
          onClick={() => alert(21)}
        >
          Featured Categories
        </h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              to={"?category=" + category}
              key={category}
            >
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                type="button"
              >
                {category}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            excerpt={article.excerpt}
            imageUrl={article.imageUrl}
            date={article.date}
            slug={article.slug || "#"}
            category={article.category}
          />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No articles found for this category.
        </div>
      )}

      {/* {filteredArticles.length > 0 && (
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      )} */}
    </div>
  );
}
