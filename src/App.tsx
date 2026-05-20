import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Navbar from "./smallComponents/Navbar";
import Footer from "./smallComponents/Footer";

function App() {
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
