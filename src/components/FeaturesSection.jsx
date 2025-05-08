
import React, { useState } from 'react';
import './FeaturesSection.css';

const features = [
  {
    key: 'tech',
    title: 'Tecnologia',
    description: 'Processore on-board, AI con comando vocale e sensori di comfort trasformano la poltrona in una postazione smart che risponde a ogni tua esigenza, dal gaming al lavoro.',
  },
  {
    key: 'comfort',
    title: 'Comfort',
    description: 'Imbottitura multistrato, riscaldamento a zone e raffreddamento regolabile: resti comodo anche nelle maratone più lunghe.',
  },
  {
    key: 'design',
    title: 'Design',
    description: 'Linee pulite, finiture premium e struttura studiata con fisioterapisti: Innovaseat valorizza la stanza e la tua postura.',
  },
];

const FeaturesSection = () => {
  const [openKey, setOpenKey] = useState(null);

  const toggle = (key) => {
    setOpenKey(openKey === key ? null : key);
  };

  return (
    <div className="features-container">
      {features.map((f) => (
        <div key={f.key} className="feature-item">
          <h3 onClick={() => toggle(f.key)} className="feature-title">
            {f.title}
          </h3>
          {openKey === f.key && <p className="feature-desc">{f.description}</p>}
        </div>
      ))}
      <footer className="app-footer">
        © 2025 Innovaseat. Tutti i diritti riservati e protetti legalmente.
      </footer>
    </div>
  );
};

export default FeaturesSection;
