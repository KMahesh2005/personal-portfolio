import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Server, GitBranch, Monitor } from "lucide-react";

const skills = [
  {
    name: "Java",
    percentage: 80,
    color: "bg-blue-600",
    icon: Code,
    description: "Object-Oriented Programming, Data Structures, and Backend fundamentals"
  },
  {
    name: "Python",
    percentage: 75,
    color: "bg-yellow-500",
    icon: Code,
    description: "Problem solving, scripting, and basic data handling"
  },
  {
    name: "React.js",
    percentage: 78,
    color: "bg-cyan-500",
    icon: Globe,
    description: "Component-based UI development and responsive design"
  },
  {
    name: "Node.js",
    percentage: 70,
    color: "bg-green-600",
    icon: Server,
    description: "Backend development and REST API creation"
  },
  {
    name: "JavaScript",
    percentage: 82,
    color: "bg-yellow-400",
    icon: Code,
    description: "Frontend logic, DOM manipulation, and modern ES6 concepts"
  },
  {
    name: "CSS",
    percentage: 85,
    color: "bg-indigo-500",
    icon: Globe,
    description: "Responsive layouts, Flexbox, Grid, and UI styling"
  },
  {
    name: "MySQL",
    percentage: 75,
    color: "bg-orange-500",
    icon: Database,
    description: "Database design, joins, queries, and optimization"
  },
  {
    name: "Oracle SQL",
    percentage: 70,
    color: "bg-red-500",
    icon: Database,
    description: "PL/SQL basics and relational database management"
  },
  {
    name: "Firebase",
    percentage: 65,
    color: "bg-amber-500",
    icon: Database,
    description: "Realtime database integration and authentication"
  },
  {
    name: "Git & Tools",
    percentage: 80,
    color: "bg-gray-700",
    icon: GitBranch,
    description: "Git, VS Code, Eclipse IDE, version control workflow"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Technical Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A combination of programming, web development, databases, and modern development tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.name}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200/50 hover:border-blue-200/80"
              >
                <CardContent className="p-6">

                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <Icon className={`w-6 h-6 ${skill.color}`} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {skill.name}
                      </h3>

                      <div className="relative mt-4">
                        <Progress
                          value={skill.percentage}
                          className="h-2 bg-gray-100"
                        />
                        <div
                          className={`absolute top-0 left-0 h-2 rounded-full ${skill.color}`}
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">
                          Proficiency
                        </span>
                        <span className="text-sm font-bold text-blue-600">
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-gray-600">
                    {skill.description}
                  </p>

                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Extra Skills Box */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Additional Strengths
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="font-semibold mb-2">Prompt Engineering</h4>
                <p className="text-sm text-blue-100">
                  Crafting effective AI prompts and leveraging generative AI tools for productivity.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Vibe Coding</h4>
                <p className="text-sm text-blue-100">
                  Rapid prototyping and creative solution building with modern frameworks.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Operating System</h4>
                <p className="text-sm text-blue-100">
                  Windows environment, system setup, and development workflow management.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}