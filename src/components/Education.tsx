import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      year: "2025",
      degree: "BSc in Computer Science",
      institution: "University of the People",
      description: "Currently pursuing a degree program focused on computer systems, algorithms, and data structures. The coursework emphasizes both theoretical and practical skills in programming and data analysis."
    },
    {
      year: "2025",
      degree: "Data Science and Machine Learning",
      institution: "Africa Leadership Experience (ALX Africa)",
      description: "Currently advancing through the Data Science and Machine Learning program after completing the Data Analytics track. The program focuses on building expertise in data manipulation, visualization, statistical modeling, and machine learning techniques."
    },
    {
      year: "2024",
      degree: "Software Engineering",
      institution: "Power Learn Project Academy",
      description: "Successfully completed an intensive program covering Python development, data structures, algorithms, and essential analytical skills for building scalable data solutions."
    },
    {
      year: "2023",
      degree: "Artificial Intelligence Career Essentials",
      institution: "African Leadership Experience (ALX Africa)",
      description: "Completed the AI Career Essentials (AiCE) programme, gaining hands-on experience with AI tools and developing skills in prompt engineering, data analysis, digital research, and critical thinking."
    },
    {
      year: "2021",
      degree: "BSc. Environment & Natural Resources Management",
      institution: "MMUST",
      description: "Earned a comprehensive degree focused on sustainable environmental management and ecological research. Developed strong analytical, research, and problem-solving skills applicable to data-driven environmental solutions."
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          My Education
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A journey of continuous learning and skill development in data science and analytics
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-accent text-accent-foreground rounded-full p-3 flex-shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {edu.year}
                    </span>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                  </div>
                  <p className="text-accent font-semibold mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
