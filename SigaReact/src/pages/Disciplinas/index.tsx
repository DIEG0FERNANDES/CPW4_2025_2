import { IoArrowUp } from "react-icons/io5";
import { Header, Nav, Footer } from "../../components";
import TabelaDisciplinas from "../../components/ui/TabelaDisciplinas";
import estilos from "./index.module.css";

const Disciplinas = () => {
  const disciplinasPeriodo1 = [
    {
      nome: "Algoritmos 1",
      turno: "Noturno",
      totalAulas: 80,
      cargaHoraria: 60,
      curso: "PROEJA-Informática para Internet",
      professor: "Aurelio Junior",
      id: 11,
    },
    {
      nome: "Projeto e Design",
      turno: "Noturno",
      totalAulas: 100,
      cargaHoraria: 75,
      curso: "PROEJA-Informática para Internet",
      professor: "Camila",
      id: 12,
    },
    {
      nome: "Filosofia 1",
      turno: "Noturno",
      totalAulas: 40,
      cargaHoraria: 30,
      curso: "PROEJA-Informática para Internet",
      professor: "Ricardo",
      id: 13,
    },
  ];

  return (
    <>
      <Header titulo=" - Disciplinas" />
      <hr />
      <div className={estilos.content}>
        <Nav />
        <main>
          <h2>Disciplinas</h2>
          <TabelaDisciplinas
            periodo="1º Período"
            disciplinas={disciplinasPeriodo1}
          />
        </main>
      </div>
      <a href="#" aria-label="Ir para o topo">
        <IoArrowUp className={estilos.irTopo} />
      </a>
      <Footer />
    </>
  );
};

export default Disciplinas;
