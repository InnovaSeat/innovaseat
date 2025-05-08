
import React from "react";
import { Cpu, Thermometer, Layout } from "lucide-react";

const features = [
  {
    icon: <Cpu size={32} />,
    title: "Tecnologia",
    description:
      "Processore on-board, AI con comando vocale e sensori di comfort trasformano la poltrona in una postazione smart che risponde a ogni tua esigenza, dal gaming al lavoro.",
  },
  {
    icon: <Thermometer size={32} />,
    title: "Comfort",
    description:
      "Progettata per offrire il massimo del comfort durante lunghe sessioni di gioco o lavoro.",
  },
  {
    icon: <Layout size={32} />,
    title: "Design",
    description:
      "Un design moderno ed ergonomico che si adatta perfettamente a qualsiasi ambiente.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Caratteristiche</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <div className="text-blue-500">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
