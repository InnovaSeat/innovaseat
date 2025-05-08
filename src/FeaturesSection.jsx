import React, { useEffect } from "react";
import { XCircle } from "lucide-react";

const features = [
  { icon: "🎧", title: "Audio 3D immersivo", description: "Speaker integrati e subwoofer." },
  { icon: "🖥️", title: "Schermo integrato da 7″", description: "Computer di bordo per ogni funzione." },
  { icon: "🎙️", title: "AI integrato", description: "Comandi vocali intelligenti." },
  { icon: "🔋", title: "Batteria LiFePO₄ 12.8 V", description: "Fino a 12 h di autonomia." },
  { icon: "❄️", title: "Raffreddamento regolabile", description: "4 ventole PWM—controllo vocale." },
  { icon: "🔥", title: "Poltrona termoriscaldata", description: "4 zone di calore, controllo vocale." },
  { icon: "🔌", title: "USB / USB-C", description: "Ricarica tutti i tuoi dispositivi." },
  { icon: "🎇", title: "LED RGB personalizzabili", description: "Atmosfera perfetta per ogni mood." },
  { icon: "🧠", title: "Modalità risparmio / boost", description: "Efficienza o prestazioni, a voce." }
];

export default function FeaturesSection() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => (document.documentElement.style.scrollBehavior = "auto");
  }, []);

  return (
    <>
      <div id="loader" className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
        <img src="/logo.png" alt="Innovaseat" className="w-24 animate-pulse" />
        <div className="mt-6 h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" />
      </div>

      <nav className="sticky top-0 z-40 bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <span className="text-xl font-bold">Innovaseat</span>
          <div className="space-x-6">
            <a href="#funzionalita" className="text-gray-700 hover:text-black">Funzionalità</a>
            <a href="#chi-siamo" className="text-gray-700 hover:text-black">Chi&nbsp;siamo</a>
            <a href="#contatti" className="text-gray-700 hover:text-black">Contattaci</a>
          </div>
        </div>
      </nav>

      <section id="funzionalita" className="bg-white py-12 px-4 sm:px-6 md:px-8 text-gray-900">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-center text-4xl font-bold">Funzionalità principali</h2>
          <p className="mb-12 text-center text-lg">Innovaseat unisce comfort e tecnologia in un’unica poltrona.</p>

          <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon, title, description }, i) => (
              <div key={i} className="flex gap-4 rounded-2xl bg-gray-100 p-6 shadow transition hover:shadow-lg">
                <div className="text-3xl">{icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-sm text-gray-700">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="chi-siamo" className="mx-auto mb-20 max-w-3xl px-4 text-center text-gray-700">
        <h2 className="mb-6 text-4xl font-bold">Chi siamo</h2>
        <p className="text-lg">
          Innovaseat è un progetto indipendente che vuole rivoluzionare le sedute da gaming
          integrando tecnologie smart, comfort e design. Con il tuo supporto lo porteremo sul mercato.
        </p>
      </section>

      <section id="contatti" className="mx-auto mb-20 max-w-2xl rounded-2xl bg-gray-100 p-8 shadow">
        <h2 className="mb-6 text-center text-4xl font-bold">Contattaci</h2>
        <p className="mb-6 text-center text-gray-700">Domande o collaborazioni? Scrivici.</p>

        <form
          className="space-y-4"
          action="https://formspree.io/f/mgvkywzj"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.target;
            const s = document.getElementById('form-status');
            fetch(f.action, { method: 'POST', body: new FormData(f), headers: { Accept: 'application/json' } })
              .then(() => { f.reset(); if (s) s.innerText = '✅ Messaggio inviato!'; })
              .catch(() => { if (s) s.innerText = '❌ Errore durante l’invio.'; });
          }}>
          <input name="nome"  type="text"  placeholder="Nome"     className="w-full rounded-lg border border-gray-300 p-3" />
          <input name="email" type="email" placeholder="Email"    className="w-full rounded-lg border border-gray-300 p-3" />
          <textarea name="msg" rows="5" placeholder="Messaggio"   className="w-full rounded-lg border border-gray-300 p-3" />
          <button type="submit" className="w-full rounded-lg bg-black py-3 text-white hover:bg-gray-800">Invia</button>
          <p id="form-status" className="mt-2 text-sm text-green-600" />
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Oppure scrivici a&nbsp;
          <a href="mailto:innovaseatproject@gmail.com" className="underline">innovaseatproject@gmail.com</a>
        </p>
      </section>
    </>
  );
}
