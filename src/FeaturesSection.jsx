import React, { useEffect } from "react";
import {
  Headphones,
  Monitor,
  Mic,
  BatteryCharging,
  Snowflake,
  Flame,
  Usb,
  Lightbulb,
  Gauge
} from "lucide-react";

const features = [
  { Icon: Headphones, title: "Audio 3D immersivo", description: "Speaker integrati e subwoofer." },
  { Icon: Monitor, title: "Schermo integrato da 7″", description: "Computer di bordo per ogni funzione." },
  { Icon: Mic, title: "AI integrato", description: "Comandi vocali intelligenti." },
  { Icon: BatteryCharging, title: "Batteria LiFePO₄ 12.8 V", description: "Fino a 12 h di autonomia." },
  { Icon: Snowflake, title: "Raffreddamento regolabile", description: "4 ventole PWM – controllo vocale." },
  { Icon: Flame, title: "Poltrona termoriscaldata", description: "4 zone di calore – controllo vocale." },
  { Icon: Usb, title: "USB & USB‑C", description: "Ricarica tutti i tuoi dispositivi." },
  { Icon: Lightbulb, title: "LED RGB personalizzabili", description: "Atmosfera perfetta per ogni mood." },
  { Icon: Gauge, title: "Modalità risparmio / boost", description: "Efficienza o prestazioni, a voce." }
];

export default function FeaturesSection() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const timer = setTimeout(() => document.getElementById("loader")?.remove(), 1200);
    return () => {
      clearTimeout(timer);
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      {/* Loader elegante */}
      <div id="loader" className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white">
        <img src="/logo.png" alt="Innovaseat" className="w-40 animate-pulse drop-shadow-xl" />
        <div className="mt-8 h-14 w-14 animate-spin rounded-full border-4 border-white/40 border-t-transparent" />
      </div>

      {/* Navbar scura */}
      <nav className="sticky top-0 z-40 bg-slate-800/80 backdrop-blur shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
          <span className="text-2xl font-semibold tracking-wide">Innovaseat</span>
          <div className="space-x-8 text-sm uppercase tracking-wide">
            <a href="#funzionalita" className="hover:text-indigo-300">Funzionalità</a>
            <a href="#chi-siamo" className="hover:text-indigo-300">Chi&nbsp;siamo</a>
            <a href="#contatti" className="hover:text-indigo-300">Contattaci</a>
          </div>
        </div>
      </nav>

      {/* Hero / Funzionalità */}
      <section id="funzionalita" className="bg-slate-50 py-20 px-4 sm:px-6 md:px-8 text-slate-900">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-center text-5xl font-extrabold tracking-tight text-slate-800">Funzionalità</h2>
          <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-slate-600">
            Innovaseat combina design raffinato e tecnologia avanzata per un’esperienza unica.
          </p>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ Icon, title, description }, i) => (
              <div key={i} className="rounded-3xl bg-white/80 p-8 shadow-lg ring-1 ring-slate-200 backdrop-blur transition hover:scale-105 hover:shadow-xl">
                <Icon className="mb-4 h-8 w-8 text-indigo-600" />
                <h3 className="mb-2 text-xl font-semibold text-slate-800">{title}</h3>
                <p className="text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chi siamo */}
      <section id="chi-siamo" className="bg-white py-20 px-4 text-slate-700">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-slate-800">Chi siamo</h2>
          <p className="text-lg leading-relaxed">
            Innovaseat nasce dall’idea di trasformare la classica poltrona da gaming in un ecosistema elegante e smart. Siamo designer indipendenti con la missione di portare comfort e tecnologia in ogni postazione.
          </p>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="bg-slate-100 py-20 px-4">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 shadow-lg ring-1 ring-slate-200">
          <h2 className="mb-6 text-center text-4xl font-bold text-slate-800">Contattaci</h2>
          <p className="mb-8 text-center text-slate-600">Domande o proposte? Inviaci un messaggio.</p>

          <form
            className="space-y-4"
            action="https://formspree.io/f/mgvkywzj"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.target;
              const s = document.getElementById("form-status");
              fetch(f.action, { method: "POST", body: new FormData(f), headers: { Accept: "application/json" } })
                .then(() => { f.reset(); if (s) s.innerText = "Messaggio inviato ✔️"; })
                .catch(() => { if (s) s.innerText = "Errore, riprova ❌"; });
            }}
          >
            <input name="nome"  type="text"  placeholder="Nome"     className="w-full rounded-lg border border-slate-300 p-3" />
            <input name="email" type="email" placeholder="Email"    className="w-full rounded-lg border border-slate-300 p-3" />
            <textarea name="msg" rows="5" placeholder="Messaggio" className="w-full rounded-lg border border-slate-300 p-3" />
            <button type="submit" className="w-full rounded-lg bg-indigo-600 py-3 text-white hover:bg-indigo-700">Invia</button>
            <p id="form-status" className="mt-2 text-center text-sm" />
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Oppure scrivici a <a href="mailto:innovaseatproject@gmail.com" className="underline">innovaseatproject@gmail.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
