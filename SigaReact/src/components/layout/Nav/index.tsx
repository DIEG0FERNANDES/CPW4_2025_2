import estilos from "./index.module.css";
import { IoImage } from "react-icons/io5";
import { useLocation } from "react-router-dom";

interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { label: "Home", path: "/Home" },
  { label: "Biblioteca", path: "/Biblioteca" },
  { label: "Disciplinas", path: "/Disciplinas" },
  { label: "Boletim", path: "/Boletim" },
  { label: "Jogar", path: "/Jogo" },
];

const Nav = () => {
  const location = useLocation();

  return (
    <nav className={estilos.nav}>
      {location.pathname === "/" ? (
        <ul className={estilos.navList}>
          <li>
            <a href="http://www.ifms.edu.br/" className={estilos.navLink}>
              Site do IFMS
            </a>
          </li>
        </ul>
      ) : (
        <>
          <div className={estilos.perfil}>
            <IoImage className={estilos.foto} />
            <div className={estilos.perfilLinks}>
              <a href="/" className={estilos.navLink}>
                Conta
              </a>
              <span className={estilos.separator}>|</span>
              <a href="/" className={estilos.navLink}>
                Sair
              </a>
            </div>
          </div>
          <ul className={estilos.navList}>
            {navLinks.map((link) => (
              <li key={link.path} className={estilos.navItem}>
                <a href={link.path} className={estilos.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
};

export default Nav;
