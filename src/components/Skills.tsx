import powerbiImg from "@/assets/icons/powerbi.png";
import excelImg from "@/assets/icons/excel.png";
import mysqlImg from "@/assets/icons/mysql.png";
import pythonImg from "@/assets/icons/python.png";
import anacondaImg from "@/assets/icons/icons8-anaconda-48.png";
import jupyterImg from "@/assets/icons/icons8-jupyter-48.png";
import azureImg from "@/assets/icons/icons8-azure-48.png";
import gitImg from "@/assets/icons/icons8-git-48.png";
import githubImg from "@/assets/icons/icons8-github-50.png";
import gitlabImg from "@/assets/icons/icons8-gitlab-24.png";
import matplotlibImg from "@/assets/icons/icons8-matplotlib-48.png";
import numpyImg from "@/assets/icons/icons8-numpy-48.png";
import pandasImg from "@/assets/icons/icons8-pandas-48.png";
import pytorchImg from "@/assets/icons/icons8-pytorch-64.png";
import tableauImg from "@/assets/icons/icons8-tableau-software-48.png";
import tensorflowImg from "@/assets/icons/icons8-tensorflow-48.png";
import vscodeImg from "@/assets/icons/vs code.png";
import scikitlearnImg from "@/assets/icons/scikit learn.webp";
import seabornImg from "@/assets/icons/seaborn.png";
import algorithmImg from "@/assets/icons/algorithm.png";
import dockerImg from "@/assets/icons/docker.png";
import datastructuresImg from "@/assets/icons/data structures.png";
import mongodbImg from "@/assets/icons/mongo db.png";

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      items: [
        { name: "Python", icon: pythonImg },
        { name: "SQL", icon: mysqlImg },
      ],
    },
    {
      title: "Computer Science Fundamentals",
      items: [
        { name: "Data Structures", icon: datastructuresImg },
        { name: "Algorithms", icon: algorithmImg },
        { name: "Complexity Analysis (Big-O)" },
        { name: "Problem Solving" },
        { name: "System Design" },
      ],
    },
    {
      title: "Tools & Environments",
      items: [
        { name: "Anaconda / Conda", icon: anacondaImg },
        { name: "Jupyter Notebook / Lab", icon: jupyterImg },
        { name: "VS Code", icon: vscodeImg },
        { name: "Docker", icon: dockerImg },
      ],
    },
    {
      title: "Data Processing",
      items: [
        { name: "pandas", icon: pandasImg },
        { name: "NumPy", icon: numpyImg },
      ],
    },
    {
      title: "Machine Learning",
      items: [
        { name: "scikit-learn", icon: scikitlearnImg },
        { name: "TensorFlow", icon: tensorflowImg },
        { name: "PyTorch", icon: pytorchImg },
        { name: "Keras" },
      ],
    },
    {
      title: "Data Visualization",
      items: [
        { name: "matplotlib", icon: matplotlibImg },
        { name: "seaborn", icon: seabornImg },
        { name: "Plotly" },
        { name: "Microsoft Excel", icon: excelImg },
        { name: "Power BI", icon: powerbiImg },
        { name: "Tableau", icon: tableauImg },
      ],
    },
    {
      title: "Cloud Platforms",
      items: [{ name: "Azure", icon: azureImg }],
    },
    {
      title: "Databases",
      items: [
        { name: "MySQL", icon: mysqlImg },
        { name: "MongoDB", icon: mongodbImg },
      ],
    },
    {
      title: "Version Control",
      items: [
        { name: "Git", icon: gitImg },
        { name: "GitHub", icon: githubImg },
        { name: "GitLab", icon: gitlabImg },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          My Skills
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Categorized skills across programming, data, machine learning and
          tools.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div key={cat.title} className="p-6 bg-card rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((it) => (
                  <div
                    key={it.name}
                    className="flex items-center gap-2 px-3 py-1 bg-muted/40 rounded-full text-sm"
                  >
                    {it.icon ? (
                      <img
                        src={it.icon as string}
                        alt={`${it.name} icon`}
                        className="w-5 h-5 rounded-sm"
                      />
                    ) : null}
                    <span className="font-medium">{it.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
