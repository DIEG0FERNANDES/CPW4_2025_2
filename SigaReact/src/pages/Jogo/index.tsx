import { IoImage } from "react-icons/io5";
import Header from "../../components/Header";
import estilos from "./index.module.css";
import Tabuleiro from "../../components/Tabuleiro";

const Jogo = () => {
  return (
    <>
      <Header titulo=" - Jogo da Velha" />
      <hr />
      <div className={estilos.content}>
        <nav>
          <div className={estilos.perfil}>
            <IoImage className={estilos.foto} />
            <div>
              <a href="/">conta</a>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="/">sair</a>
            </div>
          </div>
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/Biblioteca">Biblioteca</a>
            </li>
            <li>
              <a href="/Disciplinas">Disciplinas</a>
            </li>
            <li>
              <a href="/Boletim">Boletim</a>
            </li>
            <li>
              <a href="/Jogo">Jogar</a>
            </li>
          </ul>
        </nav>

        <main>
          <Tabuleiro />
        </main>
      </div>
      <footer>
        <hr />
        <p>&copy;Todos os direitos reservados;</p>
      </footer>
    </>
  );
};
export default Jogo;
