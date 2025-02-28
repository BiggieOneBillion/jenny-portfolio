import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import MobileMenu from "./mobile-menu"

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-2  flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-lg font-bold text-primary">
            JENNIFER UGWA
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary">
            About Me
          </Link>
          <Link
            to="/articles"
            className="text-sm font-medium hover:text-primary"
          >
            Articles
          </Link>
          <Link to="/grants" className="text-sm font-medium hover:text-primary">
            Grants/Fellowships/Awards
          </Link>
          <Button asChild>
            <Link to="/contact">Contact Me</Link>
          </Button>
        </nav>
        
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
