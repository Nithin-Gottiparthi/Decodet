
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Digital Transformation", href: "/digital-transformation" },
    { name: "Consultancy", href: "/consultancy" },
  ];

  const aboutItems = [
    { name: "About Us", href: "/about" },
    { name: "Our Leadership Team", href: "/about/leadership" },
    { name: "Life at Decodet", href: "/about/life" },
    { name: "Join Our Team", href: "/about/careers" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Decodet Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Upskilling Link */}
            <Link
              to="https://decodet.com"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://decodet.com";
              }}
            >
              Upskilling
            </Link>

            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {aboutItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.href} className="cursor-pointer">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="hero" size="sm">
              <Link to="/contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                    }`}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}

              {/* About items in mobile */}
              <div className="border-t pt-4">
                <div className="text-sm font-medium text-muted-foreground mb-2">About</div>
                {aboutItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-sm text-muted-foreground hover:text-primary pl-4 py-1"
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Upskilling Link */}
              <Link
                to="https://decodet.com"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  closeMobileMenu();
                  window.location.href = "https://decodet.com";
                }}
              >
                Upskilling
              </Link>

              <Button asChild variant="hero" size="sm" className="w-fit">
                <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
