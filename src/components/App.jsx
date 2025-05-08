import React from 'react';
import './App.css';

export default function App() {
  return (
    <main className="bg-black text-white">
      <section className="text-center py-16 px-4 fade-in">
        <img src="/logo.png" alt="Innovaseat Logo" className="mx-auto mb-6 w-32 md:w-48" />
        <h1 className="text-4xl md:text-6xl font-bold">Innovaseat</h1>
        <p className="text-xl md:text-2xl text-cyan-400 mt-2">More than a chair</p>
        <img src="/chair.jpg" alt="Poltrona Innovaseat" className="mx-auto mt-10 w-full max-w-md rounded-xl shadow-lg glow" />
        <button className="mt-10 bg-cyan-400 text-black px-6 py-3 rounded-full hover:bg-cyan-300 transition">Tienimi aggiornato</button>
      </section>

      <section className="px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Caratteristiche principali</h2>
        <ul className="space-y-2 text-lg leading-relaxed">
          <li>Impianto audio 3D immersivo con subwoofer dedicato</li>
          <li>Touchscreen integrato nel bracciolo per il controllo totale</li>
          <li>Assistente vocale integrato per comandi rapidi</li>
          <li>Porte USB, USB-C e jack audio sempre a portata di mano</li>
          <li>Ventilazione e riscaldamento gestibili via touch</li>
          <li>Tre modalità energetiche: Risparmio, Normale, Boost</li>
          <li>Regolazione elettrica del poggiapiedi e della seduta</li>
          <li>Ruote retrattili automatiche per mobilità e stabilità</li>
        </ul>
      </section>

      <section className="px-6 py-12 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">Chi siamo</h2>
        <p className="text-lg">
          Innovaseat è nata per rivoluzionare il mondo delle sedute da gaming e ufficio.
          Tecnologia, comfort ed estetica si fondono per offrire un’esperienza unica.
        </p>
      </section>

      <section className="px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Contattaci</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-md mx-auto space-y-4">
          <input type="text" name="nome" placeholder="Il tuo nome" required className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
          <input type="email" name="email" placeholder="La tua email" required className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
          <textarea name="messaggio" placeholder="Scrivici un messaggio" rows="4" required className="w-full px-4 py-2 rounded bg-gray-800 text-white"></textarea>
          <button type="submit" className="w-full bg-cyan-400 text-black py-2 rounded hover:bg-cyan-300 transition">Invia</button>
        </form>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 Innovaseat. Tutti i diritti riservati. Prodotto protetto legalmente.
      </footer>
    </main>
  );
}
