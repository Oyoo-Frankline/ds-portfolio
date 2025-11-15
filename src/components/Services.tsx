import { BarChart3, Database, TrendingUp, PieChart, LineChart, Brain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="w-12 h-12 text-accent" />,
      title: "Data Analysis",
      description: "Transform raw data into meaningful insights through statistical analysis, data cleaning, and exploratory data analysis.",
      features: ["Statistical Analysis", "Data Cleaning", "Trend Analysis", "Report Generation"]
    },
    {
      icon: <PieChart className="w-12 h-12 text-accent" />,
      title: "Business Intelligence",
      description: "Create interactive dashboards and reports using Power BI to help stakeholders make data-driven decisions.",
      features: ["Power BI Dashboards", "DAX Calculations", "KPI Tracking", "Executive Reports"]
    },
    {
      icon: <LineChart className="w-12 h-12 text-accent" />,
      title: "Data Visualization",
      description: "Design compelling visual stories from complex datasets using industry-leading tools and best practices.",
      features: ["Interactive Charts", "Custom Visualizations", "Infographics", "Data Storytelling"]
    },
    {
      icon: <Database className="w-12 h-12 text-accent" />,
      title: "Database Management",
      description: "Design, optimize, and query databases using SQL to ensure efficient data storage and retrieval.",
      features: ["SQL Queries", "Database Design", "Performance Tuning", "Data Migration"]
    },
    {
      icon: <Brain className="w-12 h-12 text-accent" />,
      title: "Machine Learning",
      description: "Build predictive models and apply machine learning techniques to solve complex business problems.",
      features: ["Predictive Modeling", "Classification", "Regression Analysis", "Model Evaluation"]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent" />,
      title: "Data Consulting",
      description: "Strategic guidance on data strategy, analytics implementation, and best practices for your organization.",
      features: ["Data Strategy", "Process Optimization", "Tool Selection", "Training & Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          My Services
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive data solutions to transform your business with actionable insights
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
