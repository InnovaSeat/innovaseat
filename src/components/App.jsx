import React from 'react';
import './App.css';

export default function App() {
  return (
    <main className="bg-black text-white font-sans">
      <section className="text-center py-16 px-4 fade-in">
        <img src="/logo.png" alt="Innovaseat Logo" className="mx-auto mb-4 w-48 md:w-64" />
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

      <section className="px-6 py-12 text-center grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="text-cyan-400 text-4xl mb-4">⚙️</div>
          <h2 className="text-xl font-semibold mb-2 text-cyan-400">Tecnologia</h2>
          <p className="text-lg">
            Al tuo comando: Processore on-board, AI vocale e sensori di comfort trasformano la poltrona in una postazione smart che risponde a ogni tua esigenza, dal gaming al lavoro.
          </p>
        </div>
        <div>
          <div className="text-cyan-400 text-4xl mb-4">🛋️</div>
          <h2 className="text-xl font-semibold mb-2 text-cyan-400">Extra Comfort</h2>
          <p className="text-lg">
            Imbottitura multistrato, riscaldamento a zone e raffreddamento regolabile: resti comodo anche nelle maratone più lunghe.
          </p>
        </div>
        <div>
          <div className="text-cyan-400 text-4xl mb-4">🎨</div>
          <h2 className="text-xl font-semibold mb-2 text-cyan-400">Design che arreda, ergonomia che sostiene</h2>
          <p className="text-lg">
            Linee pulite, finiture premium e struttura studiata con fisioterapisti: Innovaseat valorizza la stanza e la tua postura.
          </p>
        </div>
      </section>

      <section id="contatti" className="px-6 py-12 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-6 text-center">Non fartelo raccontare, tieniti pronto al lancio</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="max-w-xl mx-auto space-y-4">
          <input type="text" name="nome" placeholder="Il tuo nome" required className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
          <input type="email" name="email" placeholder="La tua email" required className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
          <textarea name="messaggio" placeholder="Scrivici un messaggio" rows="4" required className="w-full px-4 py-2 rounded bg-gray-800 text-white"></textarea>
          <button type="submit" className="w-full bg-cyan-400 text-black py-2 rounded hover:bg-cyan-300 transition">Invia</button>
        </form>
      </section>

      <section className="bg-black text-white py-12 text-center border-t border-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Sei un investitore?</h2>
        <p className="mb-6 max-w-xl mx-auto text-lg">
          Siamo aperti a collaborazioni strategiche. Se vuoi contribuire alla crescita di Innovaseat, contattaci direttamente.
        </p>
        <a href="mailto:innovaseatproject@gmail.com" className="inline-block bg-cyan-400 text-black px-6 py-3 rounded-full hover:bg-cyan-300 transition">
          Contatto Investitori
        </a>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 Innovaseat. Tutti i diritti riservati. Prodotto protetto legalmente.
      </footer>
    </main>
  );
}
