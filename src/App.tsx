
import "./App.css";
import { Home } from "./Home";
import NavbarMain from "./Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <NavbarMain />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
