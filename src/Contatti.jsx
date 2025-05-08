import React from 'react';
import { Link } from 'react-router-dom';

export default function Contatti() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-10">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 shadow-lg ring-1 ring-slate-200">
        <h1 className="mb-6 text-center text-4xl font-bold text-slate-800">Contattaci</h1>
        <p className="mb-8 text-center text-slate-600">Domande o collaborazioni? Inviaci un messaggio.</p>
        <form
          className="space-y-4"
          action="https://formspree.io/f/mgvkywzj"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.target;
            const s = document.getElementById('form-status');
            fetch(f.action, { method: 'POST', body: new FormData(f), headers: { Accept: 'application/json' } })
              .then(() => { f.reset(); if (s) s.innerText = 'Messaggio inviato ✔️'; })
              .catch(() => { if (s) s.innerText = 'Errore, riprova ❌'; });
          }}
        >
          <input name="nome" type="text" placeholder="Nome" className="w-full rounded-lg border border-slate-300 p-3" />
          <input name="email" type="email" placeholder="Email" className="w-full rounded-lg border border-slate-300 p-3" />
          <textarea name="msg" rows="5" placeholder="Messaggio" className="w-full rounded-lg border border-slate-300 p-3" />
          <button type="submit" className="w-full rounded-lg bg-indigo-600 py-3 text-white hover:bg-indigo-700">Invia</button>
          <p id="form-status" className="mt-2 text-center text-sm" />
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
          Oppure scrivici a <a href="mailto:innovaseatproject@gmail.com" className="underline">innovaseatproject@gmail.com</a>
        </p>
        <div className="mt-10 text-center">
          <Link to="/" className="text-indigo-600 hover:underline">← Torna alla home</Link>
        </div>
      </div>
    </div>
  );
}
