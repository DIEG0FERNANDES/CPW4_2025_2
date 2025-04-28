import "./index.css";
import Celula from "../Celula";
import { useState } from "react";

const Tabuleiro = () => {
  const [celulas, setCelulas] = useState<Array<"xis" | "circulo" | null>>(
    Array(9).fill(null)
  );
  const [vezX, setVezX] = useState(true);
  const [vitoria, setVitoria] = useState(false);

  const combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Linhas
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Colunas
    [0, 4, 8],
    [2, 4, 6], // Diagonais
  ];

  function joga(index: number) {
    if (celulas[index] || vitoria) return;

    const novoTabuleiro = [...celulas];
    novoTabuleiro[index] = vezX ? "xis" : "circulo";
    setCelulas(novoTabuleiro);
    setVezX(!vezX);
    verificaVitoria(novoTabuleiro);
  }

  function verificaVitoria(estadoTabuleiro: (string | null)[]) {
    for (const [a, b, c] of combinacoesVencedoras) {
      if (
        estadoTabuleiro[a] &&
        estadoTabuleiro[a] === estadoTabuleiro[b] &&
        estadoTabuleiro[b] === estadoTabuleiro[c]
      ) {
        setVitoria(true);
        alert(`O jogador "${estadoTabuleiro[a]}" venceu!`);
        return;
      }
    }
  }

  return (
    <div className="tabuleiro">
      {celulas.map((nomeClasse, index) => (
        <Celula
          key={index}
          nomeClasse={nomeClasse}
          vezDoXis={vezX}
          onClick={() => joga(index)}
        />
      ))}
    </div>
  );
};

export default Tabuleiro;
