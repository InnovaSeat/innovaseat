
import React from "react";

const Investitori = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Investi in Innovaseat</h1>
      <p className="text-center text-lg mb-12 text-white/80">
        Dalla visione alla prossima rivoluzione del comfort intelligente.
      </p>

      <div className="max-w-5xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1 | Perché investire in Innovaseat?</h2>
          <p className="mb-4">
            Innovaseat fonde design premium, tecnologie IoT e intelligenza artificiale in una sola piattaforma-seduta.
            Con il mercato globale del gaming & home-office in crescita costante, puntiamo a diventare la prima “smart chair” realmente integrata: raddoppio del TAM (Total Addressable Market) entro il 2028 secondo i dati Newzoo & Statista.
          </p>
          <h3 className="text-xl font-semibold mb-2">Vantaggi per l’investitore</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Brevetti proprietari (raffreddamento PWM + heating zonale)</li>
            <li>Business model ibrido: hardware a margine e servizi software (app companion, firmware OTA, abbonamenti premium)</li>
            <li>Time-to-market rapido: primi prototipi funzionanti, supply-chain validata in Europa e Asia</li>
            <li>Brand positioning già avviato (community di early-adopter e top streamer interessati)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2 | Opportunità di crescita</h2>
          <table className="w-full text-left border border-white/20">
            <thead className="bg-white/10">
              <tr>
                <th className="p-2 border border-white/20">Fase</th>
                <th className="p-2 border border-white/20">Obiettivo</th>
                <th className="p-2 border border-white/20">Ticket disponibile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-white/20">Seed+ (Q3 2025)</td>
                <td className="p-2 border border-white/20">Certificazione CE / UL + tooling stampi</td>
                <td className="p-2 border border-white/20">100 k €</td>
              </tr>
              <tr>
                <td className="p-2 border border-white/20">Serie A (Q1 2026)</td>
                <td className="p-2 border border-white/20">Lancio e-commerce in 3 mercati EU + USA</td>
                <td className="p-2 border border-white/20">500 k € – 1 M €</td>
              </tr>
              <tr>
                <td className="p-2 border border-white/20">Serie B (2027)</td>
                <td className="p-2 border border-white/20">Linea accessori + integrazione home-automation</td>
                <td className="p-2 border border-white/20">3 M €+</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-xl font-semibold mt-6 mb-2">Come unirsi</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Term-sheet rapido (10 gg) con clausola di exclusivity limitata</li>
            <li>Data-room digitale disponibile su richiesta (business plan, BOM, analisi IP)</li>
            <li>Possibilità di co-lead con VC hardware-consumer già impegnato nel round</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3 | Contatto investitori</h2>
          <p className="mb-4">Hai una domanda o vuoi fissare una call?</p>
          <table className="w-full text-left border border-white/20 mb-6">
            <thead className="bg-white/10">
              <tr>
                <th className="p-2 border border-white/20">Campo</th>
                <th className="p-2 border border-white/20">Descrizione</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-white/20">Nome / Società</td>
                <td className="p-2 border border-white/20">Chi rappresenti</td>
              </tr>
              <tr>
                <td className="p-2 border border-white/20">Email diretta</td>
                <td className="p-2 border border-white/20">Per l’invio del NDA</td>
              </tr>
              <tr>
                <td className="p-2 border border-white/20">Ticket indicativo</td>
                <td className="p-2 border border-white/20">Range di investimento (facoltativo)</td>
              </tr>
              <tr>
                <td className="p-2 border border-white/20">Messaggio</td>
                <td className="p-2 border border-white/20">Richieste specifiche, disponibilità per videocall</td>
              </tr>
            </tbody>
          </table>

          <p className="mb-2">📧 <strong>E-mail dedicata:</strong> innovaseatproject@gmail.com</p>
          <p>📅 <strong>Calendly 15 min call:</strong> link riservato dopo il primo contatto</p>
        </section>
      </div>
    </div>
  );
};

export default Investitori;
