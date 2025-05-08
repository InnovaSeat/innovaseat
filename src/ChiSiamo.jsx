import React from 'react';
import { Link } from 'react-router-dom';

export default function ChiSiamo() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-10 text-slate-800">
      <h1 className="mb-6 text-5xl font-extrabold">Chi siamo</h1>
      <p className="mb-8 max-w-xl text-center text-lg">
        Innovaseat è un progetto indipendente che vuole rivoluzionare le sedute da gaming
        integrando tecnologie smart, comfort ed eleganza.
      </p>
      <Link to="/" className="rounded-lg bg-indigo-600 px-6 py-3 text-white shadow hover:bg-indigo-700">
        ← Torna alla home
      </Link>
    </div>
  );
}
