import { IoArrowUp, IoImage } from "react-icons/io5";
import Header from "../../components/Header";
import estilos from "./index.module.css";

const Biblioteca = () => {
  return (
    <>
      <Header titulo=" - Biblioteca" />
      <hr />
      <div className={estilos.content}>
        <nav>
          <div className={estilos.perfil}>
            <IoImage className={estilos.foto} />
            <div>
              <a href="/">conta</a>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a href="/">sair</a>
            </div>
          </div>
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/Biblioteca">Biblioteca</a>
            </li>
            <li>
              <a href="/Disciplinas">Disciplinas</a>
            </li>
            <li>
              <a href="/Boletim">Boletim</a>
            </li>
            <li>
              <a href="/Jogo">Jogar</a>
            </li>
          </ul>
        </nav>
        <main>
          <h2 className="outstanding-title">Biblioteca</h2>
          <p>
            As Bibliotecas do IFMS são responsáveis por promover e disseminar o
            acesso à informação, apoiando as atividades de ensino, pesquisa,
            extensão e inovação no IFMS.
          </p>
          <b>Acervo</b>
          <b>
            Buscar publicações (livros, revistas, artigos, etc.) no acervo
            físico
          </b>
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
          <b>Bibliotecas virtuais</b>
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
          <b>Periódicos</b>
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
          <b>Regulamento</b>
          <p>
            <a
              href="http://www.ifms.edu.br/centrais-de-conteudo/documentos-institucionais/regulamentos/regulamento-da-biblioteca.pdf"
              target="_blank"
              title="Regulamento da biblioteca"
            >
              Regulamento da biblioteca
            </a>
          </p>
          Caso ocorra alguma inconsistência favor procurar a Central de
          Relacionamento (CEREL) do seu campus.
        </main>
      </div>
      <a href="#">
        <IoArrowUp className={estilos.irTopo} />
      </a>
      <footer>
        <hr />
        <button>Voltar</button>
        <p>&copy;Todos os direitos reservados;</p>
      </footer>
    </>
  );
};

export default Biblioteca;
