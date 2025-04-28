import { IoArrowUp } from "react-icons/io5";
import { Footer, Header, Input, Nav } from "../../components";
import Container from "../../components/layout/Container";

// importação de estilização
import "../../styles/_global.css";
import estilos from "./index.module.css";
const Cadastro = () => {
  return (
    <>
      <Header />
      <Container className={estilos.content}>
        <Nav />
        <main>
          <h2>Cadastre-se</h2>
          <form>
            <p>
              <label htmlFor="perfil">Cadastre-se como:</label>
              <select id="perfil" name="perfil">
                <option value="" disabled selected>
                  Selecione...
                </option>
                <option value="estudante">Estudante</option>
                <option value="professor">Professor</option>
              </select>
            </p>
            <p>
              <label htmlFor="nome">Nome: </label>
              <Input type="text" name="nome" placeholder="nome" required />
            </p>
            <p>
              <label htmlFor="email">E-Mail: </label>
              <Input type="email" name="email" placeholder="e-mail" required />
            </p>
            <p id="paiSenha1">
              <label htmlFor="senha">Senha: </label>
              <Input
                type="password"
                id="senha1"
                name="senha"
                placeholder="senha"
                required
              />
            </p>
            <p id="paiSenha2">
              <label htmlFor="confirmarSenha">Repita a senha: </label>
              <Input
                type="password"
                id="senha2"
                name="confirmarSenha"
                placeholder="repita a senha"
                required
              />
            </p>
            <p>
              <label htmlFor="foto">Foto: </label>
              <Input type="file" name="foto" />
            </p>
            <p>
              <label htmlFor="cpf">CPF (somente números):</label>
              <input
                type="tel"
                id="cpf"
                name="cpf"
                placeholder="CPF"
                pattern="\d{11}"
                required
              />
            </p>
            <p>
              <label htmlFor="nascimento">Data de nascimento:</label>
              <input type="date" id="nascimento" name="nascimento" required />
            </p>
          </form>
        </main>
        <section>
          <h2>Últimas notícias</h2>
          <p>Aberto processo seletivo</p>
        </section>
      </Container>
      <a href="#" aria-label="Ir para o topo">
        <IoArrowUp className="irTopo" />
      </a>
      <Footer />
    </>
  );
};

export default Cadastro;
