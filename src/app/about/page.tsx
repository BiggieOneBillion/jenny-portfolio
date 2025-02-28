// import Image from "next/image"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-2 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8">About Me</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <p className="text-lg mb-6">
            I am Jennifer Ugwa, an independent journalist and media trainer with
            a focus on gender, environment, health, and socio-economic issues.
            My work aims to spotlight systemic issues and amplify the voices of
            underserved groups through compelling narrative journalism.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Background</h2>
          <p className="mb-6">
            With over 8 years of experience in journalism, I have reported from
            various regions across Africa, documenting stories that often go
            untold. My investigative work has been published in leading
            publications and has contributed to policy changes and increased
            awareness on critical issues affecting communities.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Expertise</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Investigative journalism focusing on environmental issues and
              climate change impacts
            </li>
            <li>
              Gender-focused reporting and analysis on women's rights and
              equality
            </li>
            <li>
              Health policy reporting and access to healthcare in underserved
              communities
            </li>
            <li>
              Socio-economic inequality and its impacts on urban and rural
              development
            </li>
            <li>
              Media training and journalism education for emerging reporters
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Education and Training
          </h2>
          <p className="mb-6">
            I hold a Master's degree in Journalism from the University of Lagos
            and have completed specialized training in investigative journalism,
            data journalism, and multimedia storytelling. My continuous
            professional development includes participation in workshops and
            fellowships focused on environmental reporting and gender issues in
            media.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Professional Affiliations
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Member, International Federation of Journalists</li>
            <li>Associate, Nigerian Union of Journalists</li>
            <li>Fellow, African Women in Media</li>
          </ul>

          <div className="mt-8">
            <Button asChild>
              <Link to="/contact" className="flex items-center">
                Work with Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-8">
            <img
              src="/placeholder.svg?height=600&width=400"
              alt="Jennifer Ugwa"
              width={400}
              height={600}
              className="rounded-md mb-6 w-full"
            />

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <p className="mb-2">
                <strong>Email:</strong> jennifer@example.com
              </p>
              <p className="mb-2">
                <strong>Location:</strong> Lagos, Nigeria
              </p>
              <p className="mb-4">
                <strong>Available for:</strong> Reporting assignments, media
                training, speaking engagements
              </p>
              <Button variant="outline" asChild className="w-full">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>

            <div className="bg-gray-50 p-6 rounded-md">
              <h3 className="text-xl font-semibold mb-4">Recent Recognition</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-medium">Environmental Reporting Award</p>
                  <p className="text-sm text-gray-600">
                    African Media Initiative, 2024
                  </p>
                </li>
                <li>
                  <p className="font-medium">
                    Investigative Journalism Fellowship
                  </p>
                  <p className="text-sm text-gray-600">
                    Global Investigative Journalism Network, 2023
                  </p>
                </li>
                <li>
                  <p className="font-medium">
                    Women in Media Leadership Program
                  </p>
                  <p className="text-sm text-gray-600">
                    Thomson Reuters Foundation, 2022
                  </p>
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  to="/grants"
                  className="text-primary hover:underline text-sm"
                >
                  View all awards and grants
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
