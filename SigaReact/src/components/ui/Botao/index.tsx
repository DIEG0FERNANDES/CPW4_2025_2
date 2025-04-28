import estilos from "./index.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

const Button = ({ text, className, ...rest }: ButtonProps) => {
  return (
    <button className={`${estilos.bnt} ${className || ""}`} {...rest}>
      {text}
    </button>
  );
};

export default Button;
