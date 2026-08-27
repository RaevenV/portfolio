import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Navbar from "./smallComponents/Navbar";
import Footer from "./smallComponents/Footer";
import Cursor from "./smallComponents/Cursor";
import { initLenis } from "./lib/smoothScroll";

function App() {
  useEffect(() => initLenis(), []);

  return (
    <>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
