import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Forms from "./Forms";
import HomePage from "./HomePage";
import UIElements from "./UIElements";
import Charts from "./Charts";
import Table from "./Table";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Dashboard isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/ui-elements" element={<UIElements />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/tables" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
