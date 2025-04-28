import { IoArrowUp } from "react-icons/io5";
import { Header, Nav, Footer } from "../../components";
import TabelaBoletim from "../../components/ui/TabelaBoletim";
import estilos from "./index.module.css";

const Boletim = () => {
  const disciplinas = [
    {
      nome: "Projeto e Design",
      professor: "Camila",
      cargaHoraria: 75,
      aulas: 100,
      faltas: 0,
      percentualFaltas: "0%",
      n1: 0,
      n2: 0,
      media: 0,
      situacao: "EM CURSO",
      id: 12,
    },
    {
      nome: "Dispositivos Móveis",
      professor: "Túlio",
      cargaHoraria: 80,
      aulas: 100,
      faltas: 25,
      percentualFaltas: "25%",
      n1: 5,
      n2: 5,
      media: 5,
      situacao: "REPROVADO",
      id: 13,
    },
  ];

  return (
    <>
      <Header titulo=" - Boletim" />
      <hr />
      <div className={estilos.content}>
        <Nav />
        <main>
          <h2>Boletim</h2>
          <TabelaBoletim disciplinas={disciplinas} />
        </main>
      </div>
      <a href="#" aria-label="Ir para o topo">
        <IoArrowUp className={estilos.irTopo} />
      </a>
      <Footer />
    </>
  );
};

export default Boletim;
