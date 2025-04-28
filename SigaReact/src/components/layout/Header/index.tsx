import estilos from "./index.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/Home");
  };

  return (
    <header className={estilos.header}>
      <h2>Sistema Acadêmico</h2>

      {location.pathname === "/" && (
        <form className={estilos.login} onSubmit={handleSubmit}>
          <input type="email" placeholder="e-mail" name="email" required />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="senha"
            name="senha"
            required
          />
          <button
            className={estilos.senhaButton}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label="Mostrar ou ocultar senha"
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
          <button className={estilos.button} type="submit">
            Logar
          </button>
        </form>
      )}
    </header>
  );
};

export default Header;
