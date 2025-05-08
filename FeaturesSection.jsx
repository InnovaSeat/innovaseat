
import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";

const features = [
  {
    icon: "🎧",
    title: "Audio 3D immersivo",
    description: "Esperienza sonora realistica grazie a speaker integrati e subwoofer."
  },
  {
    icon: "🖥️",
    title: "Schermo integrato da 7 pollici",
    description: "Il tuo computer di bordo per controllare ogni funzione della poltrona."
  },
  {
    icon: "🎙️",
    title: "AI Integrato",
    description: "Comanda Innovaseat semplicemente con la tua voce."
  },
  {
    icon: "🔋",
    title: "Batteria LiFePO₄ 12.8V",
    description: "Fino a 12 ore di autonomia senza compromessi."
  },
  {
    icon: "❄️",
    title: "Raffreddamento regolabile (controllabile vocalmente)",
    description: "4 ventole PWM per una sensazione di freschezza migliorata."
  },
  {
    icon: "🔥",
    title: "Poltrona termoriscaldata per un massimo comfort (controllabile vocalmente)",
    description: "Riscaldamento integrato in 4 zone strategiche."
  },
  {
    icon: "🔌",
    title: "Porte USB e USB-C",
    description: "Collega e ricarica tutti i tuoi dispositivi in comodità."
  },
  {
    icon: "🎇",
    title: "LED RGB personalizzabili (controllabili vocalmente)",
    description: "Crea l’atmosfera perfetta, dal gaming alla relax."
  },
  {
    icon: "🧠",
    title: "Modalità risparmio, normale, boost (controllabili vocalmente)",
    description: "Scegli tra efficienza, comfort o prestazioni massime."
  }
];

export default function FeaturesSection() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes logoGlow {
        0% { opacity: 0; transform: scale(0.9); filter: brightness(0.5) blur(2px); }
        100% { opacity: 1; transform: scale(1); filter: brightness(1) blur(0); }
      }
      .animate-logoGlow {
        animation: logoGlow 1.2s ease-out forwards;
      }
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; visibility: hidden; }
      }
      .animate-fadeIn {
        animation: fadeIn 0.8s ease-out both;
      }
      .animate-fadeOut {
        animation: fadeOut 0.8s ease-out 1s forwards;
      }
    `;
    document.head.appendChild(style);

    const loader = document.getElementById("loader");
    if (loader) setTimeout(() => loader.remove(), 2000);

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Funzionalità Innovaseat</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-6 flex items-start space-x-4">
            <div className="text-3xl">{feature.icon}</div>
            <div>
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
