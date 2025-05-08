import React from "react";

const features = [
  { icon: "🎧", title: "Audio 3D immersivo", description: "Esperienza sonora realistica grazie a speaker integrati e subwoofer." },
  { icon: "🖥️", title: "Schermo integrato da 7 pollici", description: "Il tuo computer di bordo per controllare ogni funzione della poltrona." },
  { icon: "🎙️", title: "AI Integrato", description: "Comanda Innovaseat semplicemente con la tua voce." },
  { icon: "🔋", title: "Batteria LiFePO₄ 12.8V", description: "Fino a 12 ore di autonomia senza compromessi." },
  { icon: "❄️", title: "Raffreddamento regolabile (controllabile vocalmente)", description: "4 ventole PWM per una sensazione di freschezza migliorata." },
  { icon: "🔥", title: "Poltrona termoriscaldata (controllabile vocalmente)", description: "Riscaldamento integrato in 4 zone strategiche." },
  { icon: "🔌", title: "Porte USB e USB-C", description: "Collega e ricarica tutti i tuoi dispositivi in comodità." },
  { icon: "🎇", title: "LED RGB personalizzabili (controllabili vocalmente)", description: "Crea l’atmosfera perfetta, dal gaming alla relax." },
  { icon: "🧠", title: "Modalità risparmio, normale, boost (controllabili vocalmente)", description: "Scegli tra efficienza, comfort o prestazioni massime." }
];

export default function FeaturesSection() {
  return (
    <main className="p-8">
      <h1 className="mb-6 text-center text-3xl font-bold">Funzionalità Innovaseat</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }, i) => (
          <div key={i} className="flex items-start gap-4 rounded-lg bg-gray-100 p-6 shadow">
            <span className="text-3xl">{icon}</span>
            <div>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
