import { IoImage, IoArrowUp } from "react-icons/io5";
import { Header, Nav, Footer } from "../../components";
import estilos from "./index.module.css";
import Tabuleiro from "../../components/ui/Tabuleiro";

const Jogo = () => {
  return (
    <>
      <Header titulo=" - Jogo da Velha" />
      <hr />
      <div className={estilos.content}>
        <Nav />
        <main>
          <h2>Jogo da Velha</h2>
          <Tabuleiro />
        </main>
      </div>
      <a href="#" aria-label="Ir para o topo">
        <IoArrowUp className={estilos.irTopo} />
      </a>
      <Footer />
    </>
  );
};

export default Jogo;
