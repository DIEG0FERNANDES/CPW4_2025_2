import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Disciplinas from "../pages/Disciplinas";
import Biblioteca from "../pages/Biblioteca";
import Boletim from "../pages/Boletim";
import Jogo from "../pages/Jogo";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Biblioteca" element={<Biblioteca />} />
        <Route path="/Disciplinas" element={<Disciplinas />} />
        <Route path="/Boletim" element={<Boletim />} />
        <Route path="/Jogo" element={<Jogo />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
