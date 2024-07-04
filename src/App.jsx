import Dashboard from "./Dashboard";
import { useState } from "react";
import Sidebar from "./Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dashboard isOpen={!isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
    </>
  );
}

export default App;
