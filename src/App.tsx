
import "./App.css";
import { Home } from "./Home";
import NavbarMain from "./Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gradient-to-t from-slate-50 to-slate-200 min-h-screen p-0 m-0">
      <NavbarMain />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
