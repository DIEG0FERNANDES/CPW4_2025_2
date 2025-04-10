import { IoArrowUp, IoImage, IoTrash } from "react-icons/io5";
import Header from "../../components/Header";

import estilos from "./index.module.css";

const Boletim = () => {
  return (
    <>
      <Header titulo=" - Boletim" />
      <hr />
      <div className={estilos.content}>
        <nav>
          <div className={estilos.perfil}>
            <IoImage />
            <a href="">conta</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="">sair</a>
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
          <table>
            <tbody>
              <tr>
                <th>Estudante:</th>
                <td>Camila</td>
                <th>RA:</th>
                <td>5555</td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <th>Unidade Curricular</th>
                <th>CH</th>
                <th>Aulas</th>
                <th>Total Faltas</th>
                <th>% Faltas</th>
                <th>N1</th>
                <th>N2</th>
                <th>Média</th>
                <th>Situação</th>
                <th>Opções</th>
              </tr>
              <tr>
                <td>
                  Projeto e Design
                  <br />
                  <small>Camila </small>
                </td>
                <td>75 </td>
                <td>100 </td>
                <td>0 </td>
                <td>0%</td>
                <td>0 </td>
                <td>0 </td>
                <td>0 </td>
                <td>EM CURSO </td>
                <td>
                  <a href="excluirMatricula.php?id_d=12&id_u=16">
                    <IoTrash />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  EXEMPLO Dispositivos Móveis <br />
                  <small>Túlio</small>
                </td>
                <td>80</td>
                <td>100</td>
                <td>25</td>
                <td>25%</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>REPROVADO</td>
                <td>
                  <IoTrash />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <small>
                    <strong>Legenda:</strong>
                    <br />
                    <small>
                      <strong>CH/Aulas: </strong>Carga horária da Unidade
                      Curricular em horas / Quantidade de aulas ou encontros
                      presenciais previstos.
                    </small>
                  </small>
                  <p>
                    *Esses registros podem sofrer alterações até o final do
                    periodo letivo.
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
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
export default Boletim;
