
import React from "react";
import { Link } from "react-router-dom";

const InvestButton = () => {
  return (
    <Link
      to="/investitori"
      className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-700 transition"
    >
      Per Imprenditori
    </Link>
  );
};

export default InvestButton;
