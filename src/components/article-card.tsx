import { Link } from "react-router-dom";
// import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  slug: string;
  category: string;
}

const ArticleCard = ({
  title,
  excerpt,
  imageUrl,
  date,
  slug,
  category,
}: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="object-cover h-full w-full"
        />
      </div>
      <CardContent className="pt-6 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link
          to={slug}
          className="text-primary font-medium text-sm hover:underline"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
