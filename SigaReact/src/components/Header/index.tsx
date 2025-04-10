import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";

const Header = (props: { titulo: string }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    navigate("/Home"); // Redireciona para a rota '/Home'
  };

  return (
    <header>
      <h1>Sistema Acadêmico {props.titulo}</h1>
      {location.pathname === "/" && (
        <form className="login" onSubmit={handleSubmit}>
          <input type="email" placeholder="e-mail" name="email" />
          <input type="password" placeholder="senha" id="senha3" name="senha" />
          <button type="submit">Logar</button>
        </form>
      )}
    </header>
  );
};

export default Header;
