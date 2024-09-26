
import "./App.css";
import { Home } from "./Home";
import NavbarMain from "./Navbar";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <div className="bg-gradient-to-t bg-slate-50 min-h-screen p-0 m-0">
      <NavbarMain />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
