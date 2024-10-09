import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./Home";
import Navbar from "./smallComponents/Navbar";
import Footer from "./smallComponents/Footer";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
