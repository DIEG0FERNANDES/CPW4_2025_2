import { IoImage } from "react-icons/io5";
import Header from "../../components/Header/Header";
import estilos from "./index.module.css";

const Jogo = () => {
  return (
    <>
      <Header titulo=" - Jogo da Velha" />
      <hr />
      <div className={estilos.content}>
        <nav>
          <div className={estilos.perfil}>
            <IoImage />
            <a href="">conta</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="">sair</a>
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
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
          <h1>Vamos Jogar uma Partida</h1>
          <form id="fleex">
            <div>
              Player 1:
              <input type="text" data-player1 />
            </div>
            <div>
              {" "}
              Player 2:
              <input type="text" data-player2 />
            </div>
            <button type="submit">Save</button>
          </form>
          <button>Jogar</button>

          <div data-jogo>
            <div data-tabuleiro>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div id="vencedor"></div>
            <div>
              <button>Reset</button>
            </div>
          </div>
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
