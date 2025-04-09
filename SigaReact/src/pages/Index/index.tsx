import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import estilos from "./index.module.css";

const Index = () => {
  return (
    <>
      <Header />
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
              <input type="text" name="" id="" placeholder="nome" />
            </p>
            <p>
              Email:
              <input type="text" name="" id="" placeholder="e-mail" />
            </p>
            <p id="paiSenha1">
              Senha:
              <input type="password" name="" id="" placeholder="senha" />
            </p>
            <p id="paiSenha2">
              Repita a senha:
              <input
                type="password"
                name=""
                id=""
                placeholder="repita a senha"
              />
            </p>
            <p>
              Foto:
              <input type="file" name="" id="" />
            </p>
            <p>
              CPF (somente números):
              <input type="number" name="" id="" placeholder="CPF" />
            </p>
            <p>
              Data de nascimento (dd/mm/aaaa)
              <input type="date" name="" id="" />
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
      <Footer />
    </>
  );
};

export default Index;
