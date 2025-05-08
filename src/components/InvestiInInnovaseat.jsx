import React from 'react';
import './App.css';

export default function InvestiInInnovaseat() {
  return (
    <main className="bg-black text-white font-sans">
      <section className="text-center py-16 px-4 fade-in">
        <h1 className="text-4xl md:text-6xl font-bold">Investi in Innovaseat</h1>
        <p className="text-xl md:text-2xl text-cyan-400 mt-2">
          Dalla visione alla prossima rivoluzione del comfort intelligente.
        </p>
      </section>

      <section className="px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">1 | Perché investire in Innovaseat?</h2>
        <p className="text-lg leading-relaxed">
          Innovaseat fonde design premium, tecnologie IoT e intelligenza artificiale in una sola piattaforma-seduta.
          Con il mercato globale del gaming & home-office in crescita costante, puntiamo a diventare la prima “smart chair”
          realmente integrata: raddoppio del TAM (Total Addressable Market) entro il 2028 secondo i dati Newzoo & Statista.
        </p>

        <h3 className="text-xl font-semibold mt-6">Vantaggi per l’investitore</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Brevetti proprietari (raffreddamento PWM + heating zonale)</li>
          <li>Business model ibrido: hardware a margine e servizi software (app companion, firmware OTA, abbonamenti premium)</li>
          <li>Time-to-market rapido: primi prototipi funzionanti, supply-chain validata in Europa e Asia</li>
          <li>Brand positioning già avviato (community di early-adopter e top streamer interessati)</li>
        </ul>
      </section>

      <section className="px-6 py-12 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4">2 | Opportunità di crescita</h2>
        <p className="text-lg leading-relaxed">
          Fase | Obiettivo | Ticket disponibile
        </p>
        <ul className="space-y-4 mt-6">
          <li>Seed+ (Q3 2025) | Certificazione CE / UL + tooling stampi | 100 k €</li>
          <li>Serie A (Q1 2026) | Lancio e-commerce in 3 mercati EU + USA | 500 k € – 1 M €</li>
          <li>Serie B (2027) | Linea accessori + integrazione home-automation | 3 M €+</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">Come unirsi</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Term-sheet rapido (10 gg) con clausola di exclusivity limitata</li>
          <li>Data-room digitale disponibile su richiesta (business plan, BOM, analisi IP)</li>
          <li>Possibilità di co-lead con VC hardware-consumer già impegnato nel round</li>
        </ul>
      </section>

      <section className="px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">3 | Contatto investitori</h2>
        <p className="text-lg mb-6">Hai una domanda o vuoi fissare una call?</p>
        <form action="mailto:innovaseatproject@gmail.com" method="POST" className="max-w-xl mx-auto space-y-4">
          <input type="text" name="nome" placeholder="Nome / Società" required className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
          <input type="email" name="email" placeholder="Email diretta" required className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
          <input type="text" name="ticket" placeholder="Ticket indicativo" className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
          <textarea name="messaggio" placeholder="Messaggio" rows="4" required className="w-full px-4 py-2 rounded bg-gray-800 text-white"></textarea>
          <button type="submit" className="w-full bg-cyan-400 text-black py-2 rounded hover:bg-cyan-300 transition">Invia</button>
        </form>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 Innovaseat. Tutti i diritti riservati. Prodotto protetto legalmente.
      </footer>
    </main>
  );
}
