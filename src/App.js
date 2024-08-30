import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";
import Layout from "./components/Layout";
import Fotter from "./components/fotter";
import Navbar from "./components/Header";

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Fotter />
      </Layout>
    </div>
  );
}

export default App;
