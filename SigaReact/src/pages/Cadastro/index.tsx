import Footer from "../../components/Footer";
import Header from "../../components/Header";
import estilos from "./index.module.css";
import { IoArrowUp, IoEye } from "react-icons/io5";

const Index = () => {
  return (
    <>
      <Header titulo="" />
      <div className={estilos.content}>
        <nav>
          <ul>
            <li>
              <a href="http://www.ifms.edu.br/">Site do IFMS</a>
            </li>
          </ul>
        </nav>

        <main>
          <h2>Cadastre-se</h2>

          <form className={estilos.form}>
            <p>
              Cadastre-se como
              <select>
                <option value="estudante">Estudante</option>
                <option value="professor">Professor</option>
              </select>
            </p>
            <p>
              Nome:
              <input type="text" placeholder="nome" />
            </p>
            <p>
              Email:
              <input type="text" placeholder="e-mail" />
            </p>
            <p id="paiSenha1">
              Senha:
              <input type="password" placeholder="senha" />
              <IoEye />
            </p>
            <p>
              Repita a senha:
              <input type="password" placeholder="repita a senha" />
              <IoEye />
            </p>
            <p>
              Foto:
              <input type="file" />
            </p>
            <p>
              CPF (somente números):
              <input type="number" placeholder="CPF" />
            </p>
            <p>
              Data de nascimento (dd/mm/aaaa)
              <input type="date" />
            </p>

            <button type="submit" className={estilos.button}>
              Cadastrar
            </button>
          </form>
        </main>
        <section>
          <h2>Últimas notícias</h2>
          <p>Aberto processo seletivo</p>
        </section>
      </div>
      <a href="#">
        <IoArrowUp className={estilos.irTopo} />
      </a>
      <Footer />
    </>
  );
};

export default Index;
