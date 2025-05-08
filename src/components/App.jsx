import React from 'react';
import './App.css';

export default function App() {
  return (
    <main className="bg-black text-white font-sans">
      <section className="text-center py-16 px-4 fade-in">
        <img src="/logo.png" alt="Innovaseat Logo" className="mx-auto mb-4 w-40 md:w-56" />
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">Innovaseat</h1>
        <p className="text-xl md:text-2xl text-cyan-400 mt-2">More than a chair</p>
        <div className="relative mt-10 max-w-4xl mx-auto">
          <img src="/chair.jpg" alt="Poltrona Innovaseat" className="w-full rounded-xl shadow-lg glow" />
          <p className="text-sm text-gray-400 mt-2 text-center italic">
            Immagine generata a scopo illustrativo. Il prodotto finale potrebbe variare.
          </p>
        </div>
        <a href="#contatti" className="mt-10 inline-block bg-cyan-400 text-black px-6 py-3 rounded-full hover:bg-cyan-300 transition">Tienimi aggiornato</a>
      </section>

      <section className="px-6 py-12 text-center grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-cyan-400">Tecnologia</h2>
          <ul className="text-lg space-y-1">
            <li>Impianto audio 3D con subwoofer</li>
            <li>Touchscreen integrato nel bracciolo</li>
            <li>Assistente vocale per comandi rapidi</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-cyan-400">Comfort</h2>
          <ul className="text-lg space-y-1">
            <li>Ventilazione e riscaldamento regolabili</li>
            <li>Regolazione elettrica seduta e poggiapiedi</li>
            <li>Tre modalità: Risparmio, Normale, Boost</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-cyan-400">Design</h2>
          <ul className="text-lg space-y-1">
            <li>Porte USB, USB-C e jack audio</li>
            <li>Ruote retrattili automatiche</li>
            <li>Stile elegante e configurabile</li>
          </ul>
        </div>
      </section>

      <section id="contatti" className="px-6 py-12 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contattaci</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-xl mx-auto space-y-4">
          <input type="text" name="nome" placeholder="Il tuo nome" required className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
          <input type="email" name="email" placeholder="La tua email" required className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
          <textarea name="messaggio" placeholder="Scrivici un messaggio" rows="4" required className="w-full px-4 py-2 rounded bg-gray-800 text-white"></textarea>
          <button type="submit" className="w-full bg-cyan-400 text-black py-2 rounded hover:bg-cyan-300 transition">Invia</button>
        </form>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 Innovaseat. Tutti i diritti riservati. Prodotto protetto legalmente.
      
<section className="bg-black text-white py-12 text-center border-t border-gray-800">
  <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Sei un investitore?</h2>
  <p className="mb-6 max-w-xl mx-auto text-lg">
    Siamo aperti a collaborazioni strategiche. Se vuoi contribuire alla crescita di Innovaseat, contattaci direttamente.
  </p>
  <a href="mailto:invest@innovaseat.com" className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-full hover:bg-cyan-300 transition">
    Contatto Investitori
  </a>
</section>
</footer>

    </main>
  );
}
