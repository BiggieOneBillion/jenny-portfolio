import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  // const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-2 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold text-primary mb-4 inline-block">
              JENNIFER UGWA
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Independent Journalist and media trainer reporting on gender, environment, health, and socio-economic
              issues.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-600 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://facebook.com" className="text-gray-600 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:jennifer@example.com" className="text-gray-600 hover:text-primary">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

