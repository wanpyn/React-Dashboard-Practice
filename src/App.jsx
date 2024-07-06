import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Forms from "./Forms";
import HomePage from "./HomePage";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Dashboard isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
