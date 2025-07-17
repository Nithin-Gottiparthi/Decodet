
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface JobRole {
  title: string;
  icon: string;
}

interface JobRolesProps {
  roles: JobRole[];
  whoCanApply?: string[]; // Made optional since we're removing this section
}

const JobRoles = ({ roles }: JobRolesProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Career Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock diverse career paths with our comprehensive training program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 border-2 hover:border-accent/20">
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4">{role.icon}</div>
                <CardTitle className="text-xl">{role.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-1 bg-gradient-accent rounded-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobRoles;
