import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "../pages/Cadastro";
import Home from "../pages/Home";
import Biblioteca from "../pages/Biblioteca";
import Disciplinas from "../pages/Disciplinas";
import Boletim from "../pages/Boletim";
import Jogo from "../pages/Jogo";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Biblioteca" element={<Biblioteca />} />
        <Route path="/Disciplinas" element={<Disciplinas />} />
        <Route path="/Boletim" element={<Boletim />} />
        <Route path="/Jogo" element={<Jogo />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
