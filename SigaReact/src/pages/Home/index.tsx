import { IoArrowUp } from "react-icons/io5";
import { Footer, Header, Nav } from "../../components";
import estilos from "./index.module.css";

const Home = () => {
  return (
    <>
      <Header titulo="" />
      <hr />
      <div className={estilos.content}>
        <Nav /> {/* Utilizando o componente de navegação já criado */}
        <main>
          <h2>Olá, Diego</h2>
          <p>Prezado(a) Diego,</p>
          <p>
            A partir de agora você passará a ter acesso aos seus dados no
            Sistema Acadêmico do IFMS.
          </p>
          <p>
            Essa é a segunda de várias etapas que virão. A primeira foi o acesso
            ao boletim, agora, nesta fase você poderá consultar em tempo real
            quais as unidades que está matriculado no semestre, ver horários de
            aula e permanência, bem como acessar notas e faltas, além do
            boletim.
          </p>
          <p>
            Se você está fazendo mais de um curso no IFMS poderá alternar entre
            suas diferentes matrículas no canto superior esquerdo da tela,
            abaixo do texto “Sistema Acadêmico”.
          </p>
          <p>
            No menu "<a href="/Disciplinas">Disciplinas</a>" você verá a relação
            de todas as unidades que está matriculado no semestre atual.
            Clicando sobre o nome de cada uma, você verá os horários de
            permanência do(a) professor(a) e os horários e locais de aula.
          </p>
          <p>
            No menu "<a href="notas.html">Notas</a>" você conseguirá visualizar
            todas as notas já lançadas, tanto das unidades atuais quanto das de
            semestres anteriores, além da quantidade de faltas.
          </p>
          <p>
            Já em "<a href="/Boletim">Boletim</a>" você conseguirá verificar,
            além de sua nota, o número de faltas e o percentual que elas
            representam. Lembre-se de que deve ter pelo menos 75% de frequência.
          </p>
          <p>
            Em um futuro próximo, novas funcionalidades serão disponibilizadas
            na Área do Estudante, como solicitação de rematrícula, acesso ao
            plano de ensino do professor, matriz curricular do curso, atestado
            de matrícula, histórico escolar, entre outras.
          </p>
          <p>Fique à vontade para dar sugestões para melhoria desse espaço.</p>
          <p>Aproveitem!</p>
          <p>Pró-Reitoria de Ensino e Reitoria</p>
        </main>
        <section>
          <h2>Últimas notícias</h2>
          <ul>
            <li>Aberto processo seletivo</li>
          </ul>
        </section>
      </div>
      <a href="#" aria-label="Ir para o topo">
        <IoArrowUp className={estilos.irTopo} />
      </a>
      <Footer />
    </>
  );
};

export default Home;
