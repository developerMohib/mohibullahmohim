import { Code, Rocket, Zap } from "lucide-react";

export  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "Understanding your requirements and creating a detailed project roadmap",
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Creating wireframes and interactive prototypes for your approval",
      icon: Code,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: 3,
      title: "Development",
      description: "Building your application with clean, maintainable code",
      icon: Rocket,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 4,
      title: "Testing & Quality",
      description: "Rigorous testing to ensure everything works perfectly",
      icon: Code,
      color: "from-orange-500 to-red-500"
    },
    {
      step: 5,
      title: "Launch & Support",
      description: "Deployment and ongoing maintenance support",
      icon: Zap,
      color: "from-yellow-500 to-amber-500"
    }
  ];