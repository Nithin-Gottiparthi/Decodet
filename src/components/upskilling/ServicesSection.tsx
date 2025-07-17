
import { Link } from "react-router-dom";
import { GraduationCap, Zap, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      name: "Upskilling",
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      href: "/upskilling",
      active: true
    },
    {
      name: "Digital Transformation",
      icon: <Zap className="h-8 w-8 text-white" />,
      href: "/digital-transformation",
      active: false
    },
    {
      name: "Consultancy",
      icon: <Users className="h-8 w-8 text-white" />,
      href: "/consultancy",
      active: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-accent font-semibold">
            Let's decode your dream future together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.href}
              className={`group p-8 rounded-lg text-center transition-all duration-300 transform hover:scale-105 ${
                service.active 
                  ? 'bg-gradient-accent text-white shadow-glow' 
                  : 'bg-gradient-subtle hover:bg-accent hover:text-white'
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold">{service.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
