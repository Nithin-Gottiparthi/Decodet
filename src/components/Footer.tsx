import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/images/logow.png" 
              alt="Decodet Logo" 
              className="h-12 w-auto"
            />
            <p className="text-sm opacity-90">
              Empowering businesses through Digital Innovation, Strategic Expertise, and Learning.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/digital-transformation" className="hover:text-accent transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link to="/consultancy" className="hover:text-accent transition-colors">
                  Consultancy Services
                </Link>
              </li>
              <li>
                <a 
                  href="/upskilling" 
                  className="hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  Upskilling
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about/leadership" className="hover:text-accent transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/about/careers" className="hover:text-accent transition-colors">
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link to="/about/life" className="hover:text-accent transition-colors">
                  Life at Decodet
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@decodet.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 92814 42288</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Business Address</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Decodet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;