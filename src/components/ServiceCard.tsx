
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  isExternal?: boolean;
}

const ServiceCard = ({ title, description, icon, href, isExternal = false }: ServiceCardProps) => {
  return (
    <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:scale-105 border-2 hover:border-accent/20">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        {isExternal ? (
          <Button 
            asChild 
            variant="outline" 
            className="w-full group"
          >
            <a href={href} target="_blank" rel="noopener noreferrer">
              Learn More
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        ) : (
          <Button 
            asChild 
            variant="outline" 
            className="w-full group"
          >
            <Link to={href}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
