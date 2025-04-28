import { IoArrowUp } from "react-icons/io5";
import { Header, Nav, Footer } from "../../components";
import estilos from "./index.module.css";

const Biblioteca = () => {
  return (
    <>
      <Header titulo=" - Biblioteca" />
      <hr />
      <div className={estilos.content}>
        <Nav /> {/* Usando o componente Nav diretamente */}
        <main>
          <h2 className="outstanding-title">Biblioteca</h2>
          <p>
            As Bibliotecas do IFMS são responsáveis por promover e disseminar o
            acesso à informação, apoiando as atividades de ensino, pesquisa,
            extensão e inovação no IFMS.
          </p>

          <section>
            <h3>📚 Acervo</h3>
            <p>
              Buscar publicações (livros, revistas, artigos, etc.) no acervo
              físico:
            </p>
            <ul>
              <li>
                <a
                  href="http://biblioteca.ifms.edu.br/pergamum/biblioteca/index.php"
                  title="Catálogo online - Pergamum"
                  target="_blank"
                >
                  Catálogo online (Sistema Pergamum)
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h3>🌐 Bibliotecas Virtuais</h3>
            <ul>
              <li>
                <a
                  href="/matricula/logar-bv-pearson"
                  title="BVPearson"
                  target="_blank"
                >
                  BV-Pearson
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h3>📖 Periódicos</h3>
            <ul>
              <li>
                <a
                  href="http://www-periodicos-capes-gov-br.ez365.periodicos.capes.gov.br/index.php"
                  title="Minha Biblioteca"
                  target="_blank"
                >
                  Periódicos Capes
                </a>
                : publicações científicas nacionais e internacionais de todas as
                áreas do conhecimento.
              </li>
            </ul>
          </section>

          <section>
            <h3>📜 Regulamento</h3>
            <p>
              <a
                href="http://www.ifms.edu.br/centrais-de-conteudo/documentos-institucionais/regulamentos/regulamento-da-biblioteca.pdf"
                target="_blank"
                title="Regulamento da biblioteca"
              >
                Regulamento da biblioteca
              </a>
            </p>
            <p>
              Caso ocorra alguma inconsistência, favor procurar a Central de
              Relacionamento (CEREL) do seu campus.
            </p>
          </section>
        </main>
      </div>
      <a href="#" aria-label="Ir para o topo">
        <IoArrowUp className={estilos.irTopo} />
      </a>
      <Footer />
    </>
  );
};

export default Biblioteca;
