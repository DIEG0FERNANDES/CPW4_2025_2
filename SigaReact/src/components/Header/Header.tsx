import "./Header.css";

const Header = (props: { titulo: string }) => {
  return (
    <header>
      <h1>Sistema Acadêmico {props.titulo}</h1>
    </header>
  );
};

export default Header;
