import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Biblioteca,
  Boletim,
  Cadastro,
  Disciplinas,
  Home,
  Jogo,
} from "../pages";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/disciplinas" element={<Disciplinas />} />
        <Route path="/boletim" element={<Boletim />} />
        <Route path="/jogo" element={<Jogo />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
