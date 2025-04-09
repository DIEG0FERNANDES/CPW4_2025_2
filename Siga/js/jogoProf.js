var tabuleiro;
var xisTurn;
var celulas;
var vencedor;
var xisPlayer;
var cPlayer;
function jogar() {
  xisPlayer = document.querySelector("[data-player1]").value;
  cPlayer = document.querySelector("[data-player2]").value;
  var jogo = document.querySelector("[data-jogo]");
  jogo.classList.remove("oculto");
  tabuleiro = document.querySelector("[data-tabuleiro]");
  tabuleiro.classList.remove("circulo");
  tabuleiro.classList.remove("xis");
  tabuleiro.classList.add("xis");
  xisTurn = true;
  celulas = document.querySelectorAll(".celula");
  vencedor = document.querySelector("#vencedor");
}
function joga(e) {
  // Colocar a marca (X ou CÃ­rculo)
  const cell = e.target;
  let vitoria = false;
  if (xisTurn) {
    cell.classList.add("xis");
    tabuleiro.classList.remove("xis");
    tabuleiro.classList.add("circulo");
    cell.removeAttribute("onclick");
    vitoria = verificaVitoria("xis", xisPlayer);
  } else {
    cell.classList.add("circulo");
    tabuleiro.classList.remove("circulo");
    tabuleiro.classList.add("xis");
    cell.removeAttribute("onclick");
    vitoria = verificaVitoria("circulo", cPlayer);
  }
  xisTurn = !xisTurn;
  if (!vitoria && verificaEmpate()) {
    // alert("EMPATOU");
    vencedor.innerHTML = " EMPATOU";
    vencedor.style.color = "green";
    vencedor.style.fontSize = "50px";
    vencedor.style.fontWeight = "bold";
    for (let i = 0; i < 9; i++) {
      celulas[i].removeAttribute("onclick");
    }
    tabuleiro.classList.remove("circulo");
    tabuleiro.classList.remove("xis");
  }
}

function verificaEmpate() {
  let i;
  let empate = true;
  for (i = 0; i < 9; i++) {
    if (
      !celulas[i].classList.contains("xis") &&
      !celulas[i].classList.contains("circulo")
    ) {
      empate = false;
    }
  }
  return empate;
}

function verificaVitoria(xisOuCirculo, player) {
  if (
    (celulas[0].classList.contains(xisOuCirculo) &&
      celulas[1].classList.contains(xisOuCirculo) &&
      celulas[2].classList.contains(xisOuCirculo)) ||
    (celulas[3].classList.contains(xisOuCirculo) &&
      celulas[4].classList.contains(xisOuCirculo) &&
      celulas[5].classList.contains(xisOuCirculo)) ||
    (celulas[6].classList.contains(xisOuCirculo) &&
      celulas[7].classList.contains(xisOuCirculo) &&
      celulas[8].classList.contains(xisOuCirculo)) ||
    (celulas[0].classList.contains(xisOuCirculo) &&
      celulas[4].classList.contains(xisOuCirculo) &&
      celulas[8].classList.contains(xisOuCirculo)) ||
    (celulas[2].classList.contains(xisOuCirculo) &&
      celulas[4].classList.contains(xisOuCirculo) &&
      celulas[6].classList.contains(xisOuCirculo)) ||
    (celulas[0].classList.contains(xisOuCirculo) &&
      celulas[3].classList.contains(xisOuCirculo) &&
      celulas[6].classList.contains(xisOuCirculo)) ||
    (celulas[1].classList.contains(xisOuCirculo) &&
      celulas[4].classList.contains(xisOuCirculo) &&
      celulas[7].classList.contains(xisOuCirculo)) ||
    (celulas[2].classList.contains(xisOuCirculo) &&
      celulas[5].classList.contains(xisOuCirculo) &&
      celulas[8].classList.contains(xisOuCirculo))
  ) {
    //alert(xisOuCirculo+" venceu");

    vencedor.innerHTML = player + " com " + xisOuCirculo + "qhay venceufff";
    vencedor.style.color = "green";
    vencedor.style.fontSize = "50px";
    vencedor.style.fontWeight = "bold";
    for (let i = 0; i < 9; i++) {
      celulas[i].removeAttribute("onclick");
    }
    tabuleiro.classList.remove("circulo");
    tabuleiro.classList.remove("xis");

    var save = document.querySelector("#save");
    save.style.visibility = "visible";
    var winner = document.querySelector("#winner");
    winner.value = player;
    alert(winner.value);
    return true;
  }
  return false;
}
