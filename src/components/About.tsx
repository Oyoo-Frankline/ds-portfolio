const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I'm a Data Analyst and Data Scientist passionate about uncovering insights from complex datasets and building intelligent, data-driven solutions that empower decision-making.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            With training from Africa Leadership Experience (ALX Africa) and Power Learn Project Academy, I've developed expertise in data manipulation, statistical analysis, machine learning, and business intelligence.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I work with industry-standard tools like Excel, MySQL, Power BI, and DAX for business intelligence and reporting. For data science and advanced analytics, I leverage Python libraries including NumPy, Pandas, and Matplotlib to extract meaningful patterns and create compelling visualizations.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            My approach combines technical proficiency with business acumen, ensuring that data insights translate into actionable strategies. Whether it's building interactive dashboards, performing predictive analytics, or automating data pipelines, I focus on delivering solutions that drive measurable impact.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">25+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">2+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">20+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
