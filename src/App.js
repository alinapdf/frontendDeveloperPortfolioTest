import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
