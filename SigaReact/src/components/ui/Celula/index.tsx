import { IoClose, IoEllipse } from "react-icons/io5";
import "./index.css";

interface CelulaProps extends React.HTMLAttributes<HTMLDivElement> {
  nomeClasse: "xis" | "circulo" | null;
  vezDoXis: boolean;
  onClick: () => void;
}

const Celula = ({ nomeClasse, vezDoXis, onClick, ...rest }: CelulaProps) => {
  const classeBase = "celula";
  const classe = nomeClasse
    ? `${classeBase} ${nomeClasse}`
    : `${classeBase} ${vezDoXis ? "hoverDoXis" : "hoverDoCirculo"}`;

  return (
    <div className={classe} onClick={onClick} {...rest}>
      {nomeClasse === "xis" && <IoClose />}
      {nomeClasse === "circulo" && <IoEllipse />}
    </div>
  );
};

export default Celula;
