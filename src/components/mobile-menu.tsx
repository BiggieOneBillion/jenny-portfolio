import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const search = useSearchParams();

  useEffect(() => {
    if (search[0].get("open") === "true") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [search]);

  return (
    <main>
      <div className="relative">
        <Link to={"?open=true"} className="cursor-pointer block">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Link>
      </div>

      {open && (
        <section
          className={`fixed inset-0 z-50 bg-black/80 ${
            open
              ? "data-[state=open]:animate-in"
              : "data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
          }`}
        >
          <div
            className={`fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out 
              data-[state=closed]:duration-300 data-[state=open]:duration-500 
              inset-y-0 right-0 bg-white h-screen w-3/4 border-l 
              ${
                open
                  ? "data-[state=open]:slide-in-from-right"
                  : "data-[state=closed]:slide-out-to-right"
              }
              sm:max-w-sm`}
          >
            <Link to={'?open=false'}
              className="absolute right-4 top-4"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Link>

            <nav className="flex flex-col space-y-4 mt-8">
              <Link
                to="/"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                About Me
              </Link>
              <Link
                to="/articles"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Articles
              </Link>
              <Link
                to="/grants"
                className="text-lg font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Grants/Fellowships/Awards
              </Link>
              <Button asChild className="mt-2">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Contact Me
                </Link>
              </Button>
            </nav>
          </div>
        </section>
      )}
    </main>
  );
};

export default MobileMenu;
