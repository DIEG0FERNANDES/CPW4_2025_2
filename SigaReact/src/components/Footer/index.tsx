import "./Footer.css";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Verifique se está em uma das páginas específicas
  const isSpecificPage =
    location.pathname === "/Biblioteca" ||
    location.pathname === "/Disciplinas" ||
    location.pathname === "/Boletim";

  return (
    <>
      <hr />
      {isSpecificPage && <button onClick={() => navigate(-1)}>Voltar</button>}
      <footer>©Todos os direitos reservados;</footer>
    </>
  );
};

export default Footer;
