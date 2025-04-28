import "./index.css";
import Celula from "../Celula";
import { useState } from "react";

const Tabuleiro = () => {
  //celulas = document.querySelectorAll(".celula");
  const [celulas, setCelulas] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [vezX, setVezX] = useState(true);
  let [vitoria, setVitoria] = useState(false);

  function joga(i: number) {
    // Colocar a marca (X ou CÃ­rculo)
    if (celulas[i] != null || vitoria == true) {
      return;
    }
    // let novoTabuleiro = [celulas[0], celulas[1], celulas[2], celulas[3], celulas[4], celulas[5], celulas[6], celulas[7], celulas[8]]
    let novoTabuleiro = [...celulas];

    if (vezX == true) {
      novoTabuleiro[i] = "xis";
      setVezX(false);
    } else {
      novoTabuleiro[i] = "circulo";
      setVezX(true);
    }
    setCelulas(novoTabuleiro);
    verificaVitoria(novoTabuleiro);
  }
  function verificaVitoria(estadoTabuleiro: (string | null)[]) {
    if (
      estadoTabuleiro[0] !== null &&
      estadoTabuleiro[0] == estadoTabuleiro[1] &&
      estadoTabuleiro[1] == estadoTabuleiro[2]
    ) {
      setVitoria(true);
      alert("Alguém ganhou");
    }
  }

  return (
    <div className="tabuleiro">
      <Celula
        nomeClasse={celulas[0]}
        vezDoXis={vezX}
        onClick={function () {
          joga(0);
        }}
      />
      <Celula
        nomeClasse={celulas[1]}
        vezDoXis={vezX}
        onClick={function () {
          joga(1);
        }}
      />
      <Celula
        nomeClasse={celulas[2]}
        vezDoXis={vezX}
        onClick={function () {
          joga(2);
        }}
      />
      <Celula
        nomeClasse={celulas[3]}
        vezDoXis={vezX}
        onClick={function () {
          joga(3);
        }}
      />
      <Celula
        nomeClasse={celulas[4]}
        vezDoXis={vezX}
        onClick={function () {
          joga(4);
        }}
      />
      <Celula
        nomeClasse={celulas[5]}
        vezDoXis={vezX}
        onClick={function () {
          joga(5);
        }}
      />
      <Celula
        nomeClasse={celulas[6]}
        vezDoXis={vezX}
        onClick={function () {
          joga(6);
        }}
      />
      <Celula
        nomeClasse={celulas[7]}
        vezDoXis={vezX}
        onClick={function () {
          joga(7);
        }}
      />
      <Celula
        nomeClasse={celulas[8]}
        vezDoXis={vezX}
        onClick={function () {
          joga(8);
        }}
      />
    </div>
  );
};

export default Tabuleiro;
