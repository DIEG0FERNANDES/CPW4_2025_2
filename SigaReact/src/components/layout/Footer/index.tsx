import "./index.css";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Definir páginas onde o botão "Voltar" deve aparecer
  const specificPages = ["/Biblioteca", "/Disciplinas", "/Boletim"];
  const isSpecificPage = specificPages.includes(location.pathname);

  return (
    <>
      <hr />
      {isSpecificPage && (
        <button onClick={() => navigate(-1)} aria-label="Voltar">
          Voltar
        </button>
      )}
      <footer className="footer">© Todos os direitos reservados;</footer>
    </>
  );
};

export default Footer;
