
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturesSection from "./components/FeaturesSection";
import InvestButton from "./components/InvestButton";
import Investitori from "./pages/Investitori";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-black min-h-screen text-white">
              <header className="text-center py-10">
                <h1 className="text-4xl font-bold">Innovaseat</h1>
                <p className="text-xl mt-2">More than a chair</p>
                <div className="mt-6">
                  <InvestButton />
                </div>
              </header>
              <main>
                <FeaturesSection />
              </main>
            </div>
          }
        />
        <Route path="/investitori" element={<Investitori />} />
      </Routes>
    </Router>
  );
};

export default App;
