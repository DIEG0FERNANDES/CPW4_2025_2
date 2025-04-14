import "./index.css";

const Celula = (props: {
  nomeClasse: string | null;
  vezDoXis: boolean;
  onClick: () => void;
}) => {
  let classe = "celula";
  if (props.nomeClasse == "xis") {
    classe += " xis";
  } else {
    if (props.nomeClasse == "circulo") {
      classe += " circulo";
    } else {
      if (props.vezDoXis == true) {
        classe = classe + " hoverDoXis";
      } else {
        classe = classe + " hoverDoCirculo";
      }
    }
  }
  return <div className={classe} onClick={props.onClick}></div>;
};

export default Celula;
