import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      category: "Business Intelligence",
      description: "Interactive Power BI dashboard analyzing sales trends, regional performance, and revenue forecasting for a retail company. Features advanced DAX calculations and drill-through capabilities.",
      technologies: ["Power BI", "DAX", "Excel", "SQL"],
      link: "#"
    },
    {
      title: "Customer Segmentation Analysis",
      category: "Data Science",
      description: "Applied clustering algorithms using Python to segment customers based on purchasing behavior. Delivered actionable insights that increased targeted marketing efficiency by 35%.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
      link: "#"
    },
    {
      title: "Inventory Optimization System",
      category: "Data Analysis",
      description: "Developed a comprehensive inventory analysis solution using Excel and MySQL, reducing stock-outs by 40% and optimizing reorder points through statistical forecasting.",
      technologies: ["Excel", "MySQL", "Power Query"],
      link: "#"
    },
    {
      title: "Healthcare Analytics Platform",
      category: "Business Intelligence",
      description: "Created an end-to-end analytics solution for a healthcare provider, tracking patient outcomes, operational efficiency, and resource utilization through interactive Power BI reports.",
      technologies: ["Power BI", "DAX", "SQL", "Python"],
      link: "#"
    },
    {
      title: "Financial Trend Analysis",
      category: "Data Visualization",
      description: "Built compelling visualizations of financial data using Matplotlib and Power BI to identify market trends and investment opportunities for stakeholders.",
      technologies: ["Python", "Matplotlib", "Power BI", "Excel"],
      link: "#"
    },
    {
      title: "Supply Chain Analytics",
      category: "Data Analysis",
      description: "Analyzed supply chain data to identify bottlenecks and optimize logistics. Reduced delivery times by 25% through data-driven process improvements.",
      technologies: ["Python", "Pandas", "MySQL", "Power BI"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my recent work and the data solutions I've delivered
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 flex flex-col">
              <CardHeader>
                <div className="text-sm font-semibold text-accent mb-2">{project.category}</div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-data-light text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full group" asChild>
                  <a href={project.link} className="flex items-center justify-center gap-2">
                    View Project
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
