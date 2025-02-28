export function Testimonials() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold mb-12 text-center">
          What People Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Jennifer's reporting on environmental issues in our community brought much-needed attention to the challenges we've been facing for years. Her thorough research and compassionate approach made all the difference."
            author="Dr. Amina Okafor"
            role="Environmental Activist"
          />
          <TestimonialCard
            quote="Working with Jennifer on our women's health initiative was an incredible experience. Her ability to communicate complex medical issues in an accessible way helped us reach a much wider audience than we ever could have on our own."
            author="Dr. Sarah Mensah"
            role="Women's Health Specialist"
          />
          <TestimonialCard
            quote="Jennifer's journalism training workshop transformed our community reporting network. Her practical guidance and ethical approach have elevated the quality of our local news coverage significantly."
            author="Emmanuel Adeyemi"
            role="Community Media Coordinator"
          />
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="mb-4">
        <svg
          className="h-6 w-6 text-primary"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
}
