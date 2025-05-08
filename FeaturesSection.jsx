import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";

const features = [
  { icon: "🎧", title: "Audio 3D immersivo", description: "Esperienza sonora realistica grazie a speaker integrati e subwoofer." },
  { icon: "🖥️", title: "Schermo integrato da 7 pollici", description: "Il tuo computer di bordo per controllare ogni funzione della poltrona." },
  { icon: "🎙️", title: "AI Integrato", description: "Comanda Innovaseat semplicemente con la tua voce." },
  { icon: "🔋", title: "Batteria LiFePO₄ 12.8V", description: "Fino a 12 ore di autonomia senza compromessi." },
  { icon: "❄️", title: "Raffreddamento regolabile (controllabile vocalmente)", description: "4 ventole PWM per una sensazione di freschezza migliorata." },
  { icon: "🔥", title: "Poltrona termoriscaldata (controllabile vocalmente)", description: "Riscaldamento integrato in 4 zone strategiche." },
  { icon: "🔌", title: "Porte USB e USB‑C", description: "Collega e ricarica tutti i tuoi dispositivi in comodità." },
  { icon: "🎇", title: "LED RGB personalizzabili (controllabili vocalmente)", description: "Crea l’atmosfera perfetta, dal gaming alla relax." },
  { icon: "🧠", title: "Modalità risparmio, normale, boost (controllabili vocalmente)", description: "Scegli tra efficienza, comfort o prestazioni massime." }
];

export default function FeaturesSection() {
  // abilita smooth‑scroll solo mentre il componente è montato
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      {/* LOADER */}
      <div
        id="loader"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
      >
        <img src="/logo.png" alt="Innovaseat logo" className="w-24 md:w-32 drop-shadow-lg animate-pulse" />
        <div className="mt-6 h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <span className="text-xl font-bold">Innovaseat</span>
          <div className="space-x-6">
            <a href="#funzionalita" className="text-gray-700 hover:text-black">Funzionalità</a>
            <a href="#chi-siamo" className="text-gray-700 hover:text-black">Chi siamo</a>
            <a href="#contatti" className="text-gray-700 hover:text-black">Contattaci</a>
          </div>
        </div>
      </nav>

      {/* FUNZIONALITÀ */}
      <section id="funzionalita" className="bg-white py-12 px-4 sm:px-6 md:px-8 text-gray-900">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-4xl font-bold">Funzionalità principali</h2>
          <p className="mb-12 text-center text-lg">Innovaseat è progettata per offrirti il massimo comfort e tecnologia in ogni sessione.</p>

          <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon, title, description }, i) => (
              <div key={i} className="flex gap-4 rounded-2xl bg-gray-100 p-6 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <div className="text-3xl">{icon}</div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold">{title}</h3>
                  <p className="text-sm text-gray-700">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section id="chi-siamo" className="mx-auto mb-20 max-w-3xl px-4 text-center text-gray-700">
        <h2 className="mb-6 text-4xl font-bold">Chi siamo</h2>
        <p className="text-lg">
          Innovaseat nasce da un’idea semplice ma ambiziosa: trasformare la classica poltrona da gaming in un ecosistema intelligente, comodo ed elegante. Con il tuo supporto vogliamo portare questo prototipo sul mercato.
        </p>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="mx-auto mb-20 max-w-2xl rounded-2xl bg-gray-100 p-8 shadow-md">
        <h2 className="mb-6 text-center text-4xl font-bold">Contattaci</h2>
        <p className="mb-6 text-center text-gray-700">Hai domande o vuoi collaborare? Scrivici.</p>
        <form
          className="space-y-4"
          action="https://formspree.io/f/mgvkywzj"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.target;
            const s = document.getElementById("form-status");
            fetch(f.action, { method: "POST", body: new FormData(f), headers: { Accept: "application/json" } })
              .then(() => {
                f.reset();
                if (s) s.innerText = "✅ Messaggio inviato!";
              })
              .catch(() => {
                if (s) s.innerText = "❌ Errore durante l'invio.";
              });
          }}
        >
          <input type="text" name="nome" placeholder="Nome" className="w-full rounded-lg border border-gray-300 p-3" />
          <input type="email" name="email" placeholder="Email" className="w-full rounded-lg border border-gray-300 p-3" />
          <textarea name="messaggio" rows="5" placeholder="Messaggio" className="w-full rounded-lg border border-gray-300 p-3"></textarea>
          <button type="submit" className="w-full rounded-lg bg-black py-3 text-white hover:bg-gray-800">Invia</button>
          <p id="form-status" className="mt-2 text-sm text-green-600"></p>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Oppure scrivici a <a href="mailto:innovaseatproject@gmail.com" className="underline">innovaseatproject@gmail.com</a>
        </p>
      </section>
    </>
  );
}
