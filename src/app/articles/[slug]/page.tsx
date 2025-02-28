// import Image from "next/image"
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  Calendar,
  User,
  Tag,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";

// This would typically come from a CMS or database
const getArticleData = (slug: string) => {
  // Sample article data
  const articles = {
    "climate-change-rural-communities": {
      title: "The Impact of Climate Change on Rural Communities",
      date: "February 15, 2025",
      author: "Jennifer Ugwa",
      categories: ["Environment", "Climate", "Rural Development"],
      featuredImage: "/placeholder.svg?height=500&width=1200",
      excerpt:
        "Exploring how environmental changes affect agricultural practices and livelihoods in rural areas across Nigeria.",
      content: `
        <p class="mb-4">Climate change is increasingly affecting rural communities across Nigeria, with changing weather patterns disrupting traditional agricultural practices and threatening livelihoods. This investigative piece explores the challenges faced by farmers in three different ecological zones and the adaptive strategies they are developing.</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">The Changing Landscape</h2>
        
        <p class="mb-4">In northern Nigeria, desertification is advancing at an alarming rate. Farmers who once relied on predictable rainfall patterns now face extended droughts followed by flash floods that wash away topsoil and crops. "We used to know exactly when to plant," explains Ibrahim Musa, a farmer from Katsina State. "Now the rains come too late, or too much at once. It's becoming impossible to plan."</p>
        
        <p class="mb-4">The situation is different but equally challenging in the coastal regions, where rising sea levels and increased storm intensity threaten both fishing communities and coastal agriculture. Salt water intrusion is rendering previously fertile land unusable, forcing entire communities to relocate inland.</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Adaptation Strategies</h2>
        
        <p class="mb-4">Despite these challenges, rural communities are developing innovative adaptation strategies. In Plateau State, farmers are experimenting with drought-resistant crop varieties and implementing water conservation techniques. Community-based seed banks are preserving indigenous crop diversity, which often proves more resilient to changing conditions than commercial varieties.</p>
        
        <p class="mb-4">Women are playing a crucial role in these adaptation efforts. In several communities, women's cooperatives have established small-scale irrigation systems and diversified income sources beyond traditional agriculture. "We can't rely only on farming anymore," says Amina Danladi, leader of a women's cooperative in Kaduna State. "We're learning new skills and finding different ways to support our families."</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Policy Implications</h2>
        
        <p class="mb-4">While community-led initiatives show promise, they need to be supported by appropriate policies and infrastructure investments. Current agricultural policies often favor large-scale commercial farming over smallholder agriculture, despite the latter being more adaptable to changing conditions and employing the majority of rural Nigerians.</p>
        
        <p class="mb-4">Climate finance mechanisms also frequently fail to reach the most vulnerable communities. International climate adaptation funds are typically channeled through national governments, with limited transparency regarding how and where these resources are deployed.</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Looking Forward</h2>
        
        <p class="mb-4">As climate change accelerates, the resilience of rural communities will depend on both local innovation and supportive policy environments. Participatory approaches that incorporate traditional knowledge with scientific research offer the most promising path forward.</p>
        
        <p class="mb-4">This investigation will continue with a follow-up piece examining successful climate adaptation projects and how they might be scaled up to benefit more communities across Nigeria and West Africa.</p>
      `,
    },
    "womens-health-research-gap": {
      title: "Women's Health: Addressing the Gap in Medical Research",
      date: "January 28, 2025",
      author: "Jennifer Ugwa",
      categories: ["Health", "Gender", "Research"],
      featuredImage: "/placeholder.svg?height=500&width=1200",
      excerpt:
        "Investigating the disparities in healthcare research and treatment for women in developing countries.",
      content: `
        <p class="mb-4">Medical research has historically overlooked women's health issues, leading to significant gaps in understanding and treating conditions that primarily affect women. This investigation examines the extent of this research gap in developing countries and its impact on women's healthcare outcomes.</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">The Research Gap</h2>
        
        <p class="mb-4">Despite making up half the global population, women's health issues receive disproportionately less research funding and attention. This disparity is even more pronounced in developing countries, where resources for medical research are already limited.</p>
        
        <p class="mb-4">Analysis of research publications from the past decade shows that conditions primarily affecting women receive only about 30% of the research attention compared to those affecting both genders equally or primarily men. This gap widens further when examining clinical trials, where women are consistently underrepresented.</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Impact on Healthcare</h2>
        
        <p class="mb-4">The consequences of this research gap are far-reaching. Diagnostic criteria developed primarily from studies on men may not accurately identify conditions in women, leading to delayed or missed diagnoses. Treatment protocols may also be less effective or have different side effect profiles in women.</p>
        
        <p class="mb-4">"I was misdiagnosed three times before finally receiving the correct diagnosis," shares Fatima Okonkwo, who suffered from endometriosis for years before receiving appropriate treatment. "Each doctor told me something different, and some even suggested it was all in my head."</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Changing the Landscape</h2>
        
        <p class="mb-4">Efforts to address this research gap are emerging, though progress remains slow. Several research institutions have implemented policies requiring the inclusion of women in clinical trials and the analysis of sex-specific outcomes. Funding agencies are also beginning to prioritize women's health research.</p>
        
        <p class="mb-4">Grassroots advocacy has played a crucial role in raising awareness about these disparities. Organizations led by women healthcare professionals are conducting community-based research that centers women's experiences and needs.</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">The Path Forward</h2>
        
        <p class="mb-4">Addressing the research gap in women's health requires systemic changes across the medical research ecosystem. This includes increased funding for women's health research, policies ensuring diverse representation in clinical trials, and training for healthcare providers on sex and gender differences in disease presentation and treatment response.</p>
        
        <p class="mb-4">Most importantly, women's voices and experiences must be centered in research design and implementation. Participatory research approaches that engage women as partners rather than subjects show promise in producing more relevant and applicable findings.</p>
        
        <p class="mb-4">The next article in this series will examine innovative research initiatives that are successfully addressing women's health needs in resource-limited settings.</p>
      `,
    },
    "economic-inequality-urban": {
      title: "Economic Inequality in Urban Centers",
      date: "January 10, 2025",
      author: "Jennifer Ugwa",
      categories: ["Economics", "Urban Development", "Inequality"],
      featuredImage: "/placeholder.svg?height=500&width=1200",
      excerpt:
        "Analyzing the growing wealth gap and its impact on city infrastructure and services in major African cities.",
      content: `
        <p class="mb-4">Urban centers across Africa are experiencing rapid growth, but this development is increasingly uneven, creating stark contrasts between affluent neighborhoods and underserved communities. This investigation examines the causes and consequences of urban economic inequality in major African cities.</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">The Growing Divide</h2>
        
        <p class="mb-4">In Lagos, Africa's largest city, luxury high-rises and gated communities stand in sharp contrast to informal settlements where basic services like clean water and electricity remain unreliable or nonexistent. Similar patterns are visible in Nairobi, Johannesburg, Cairo, and other major urban centers across the continent.</p>
        
        <p class="mb-4">Data analysis reveals that the wealth gap in these cities has widened significantly over the past decade. In Lagos, the top 10% of earners now control over 60% of the city's wealth, while the bottom 40% share less than 5%.</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Infrastructure and Services</h2>
        
        <p class="mb-4">This economic divide is reflected in the distribution of infrastructure and services. Affluent neighborhoods benefit from reliable utilities, well-maintained roads, and private security, while low-income areas struggle with inadequate sanitation, frequent power outages, and limited access to healthcare and education.</p>
        
        <p class="mb-4">"We pay taxes, but we don't see the benefits in our community," explains Grace Adebayo, a resident of Ajegunle, one of Lagos' largest low-income neighborhoods. "The roads flood every rainy season, and we've been waiting for years for the promised water connection."</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Policy Failures and Successes</h2>
        
        <p class="mb-4">Urban planning policies have often exacerbated rather than mitigated inequality. Development frequently prioritizes commercial districts and high-income residential areas, while informal settlements are either neglected or subjected to forced evictions without adequate resettlement plans.</p>
        
        <p class="mb-4">However, some cities are implementing more inclusive approaches. In Dar es Salaam, community-based upgrading programs have improved infrastructure in informal settlements while preserving social networks and livelihoods. Participatory budgeting initiatives in several cities are giving residents more say in how municipal resources are allocated.</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">The Role of Technology</h2>
        
        <p class="mb-4">Digital technology is playing a complex role in urban inequality. While it offers opportunities for improved service delivery and economic inclusion, there's a risk of creating new forms of exclusion for those without digital access or skills.</p>
        
        <p class="mb-4">Innovative initiatives are working to bridge this digital divide. Tech hubs in low-income areas are providing training and internet access, while mobile platforms are extending financial services to previously unbanked populations.</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Towards More Equitable Cities</h2>
        
        <p class="mb-4">Creating more equitable urban environments requires integrated approaches that address both physical infrastructure and social services. Inclusive urban planning must recognize and build upon the strengths of all communities, including informal settlements that have developed organic solutions to urban challenges.</p>
        
        <p class="mb-4">Most importantly, urban residents themselves must have a meaningful voice in development decisions that affect their lives and livelihoods. The next article in this series will examine successful models of participatory urban governance and their potential for scaling across African cities.</p>
      `,
    },
  };

  return articles[slug as keyof typeof articles] || null;
};

export default function ArticlePage() {
  const params = useParams();

  console.log(params);

  const article = getArticleData(params.slug!);

  if (!article) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-8">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/articles">Back to Articles</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 py-12">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/articles" className="flex items-center">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          {article.title}
        </h1>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {article.date}
          </div>
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            {article.author}
          </div>
        </div>
      </div>

      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] mb-8">
        <img
          src={article.featuredImage || "/placeholder.svg"}
          alt={article.title}
          className="object-cover rounded-lg h-full w-full"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-semibold mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {article.categories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center bg-white px-3 py-1 rounded-full text-sm border"
                  >
                    <Tag className="mr-1 h-3 w-3" />
                    {category}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">About the Author</h3>
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Jennifer Ugwa"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Jennifer Ugwa</h4>
                  <p className="text-sm text-gray-600">
                    Independent Journalist
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Jennifer specializes in reporting on gender, environment,
                health, and socio-economic issues across Africa.
              </p>
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link to="/about">View Profile</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
