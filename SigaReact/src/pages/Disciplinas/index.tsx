import Footer from "../../components/Footer";
import Header from "../../components/Header";
import estilos from "./index.module.css";

import { IoArrowUp, IoImage } from "react-icons/io5";
import { IoTrash } from "react-icons/io5";
const Disciplinas = () => {
  return (
    <>
      <Header titulo=" - Disciplinas" />
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
          <h2>Disciplinas</h2>
          <h3>1º Período</h3>
          <table>
            <tr>
              <th>Disciplina</th>
              <th>Turno</th>
              <th>Total Aulas</th>
              <th>Carga horária</th>
              <th>Curso</th>
              <th>Professor</th>
              <th>Opções</th>
            </tr>

            <tr>
              <td>Algoritmos 1</td>
              <td>Noturno</td>
              <td>80</td>
              <td>60</td>
              <td>PROEJA-Informática para Internet</td>
              <td>Aurelio Junior</td>
              <td>
                <button>Matricular-se</button>
                <a href="excluirDisciplina.php?id_disciplina=11">
                  <IoTrash />
                </a>
              </td>
            </tr>

            <tr>
              <td>Projeto e Design</td>
              <td>Noturno</td>
              <td>100</td>
              <td>75</td>
              <td>PROEJA-Informática para Internet</td>
              <td>Camila</td>
              <td>
                <button>Matricular-se</button>
                <a href="excluirDisciplina.php?id_disciplina=12">
                  <IoTrash />
                </a>
              </td>
            </tr>

            <tr>
              <td>Filosofia 1</td>
              <td>Noturno</td>
              <td>40</td>
              <td>30</td>
              <td>PROEJA-Informática para Internet</td>
              <td>Ricardo </td>
              <td>
                <button>Matricular-se</button>
                <a href="excluirDisciplina.php?id_disciplina=13">
                  <IoTrash />
                </a>
              </td>
            </tr>

            <tr>
              <td>Redes de Computadores</td>
              <td>Noturno</td>
              <td>80</td>
              <td>60</td>
              <td>PROEJA-Informática para Internet</td>
              <td>Leandro Steffen</td>
              <td>
                <button>Matricular-se</button>
                <a href="excluirDisciplina.php?id_disciplina=14">
                  <IoTrash />
                </a>
              </td>
            </tr>

            <tr>
              <td>Algoritmos 2</td>
              <td>Noturno</td>
              <td>80</td>
              <td>60</td>
              <td>Licenciatura em Computação</td>
              <td>Aurelio Junior</td>
              <td>
                <button>Matricular-se</button>
                <a href="excluirDisciplina.php?id_disciplina=15">
                  <IoTrash />
                </a>
              </td>
            </tr>

            <tr>
              <td>Banco de Dados</td>
              <td>Noturno</td>
              <td>100</td>
              <td>75</td>
              <td>Licenciatura em Computação</td>
              <td>Aurelio Junior</td>
              <td>
                <button>Matricular-se</button>
                <a href="excluirDisciplina.php?id_disciplina=16">
                  <IoTrash />
                </a>
              </td>
            </tr>

            <tr>
              <td>Filosofia 2</td>
              <td>Noturno</td>
              <td>40</td>
              <td>30</td>
              <td>Licenciatura em Computação</td>
              <td>Ricardo </td>
              <td>
                <button>Matricular-se</button>
                <a href="excluirDisciplina.php?id_disciplina=17">
                  <IoTrash />
                </a>
              </td>
            </tr>
          </table>
          <h3>2º Período</h3>
          <table>
            <tr>
              <th>Disciplina</th>
              <th>Turno</th>
              <th>Total Aulas</th>
              <th>Carga horária</th>
              <th>Curso</th>
              <th>Professor</th>
              <th>Opções</th>
            </tr>

            <tr>
              <td>Disciplinas período 2</td>
              <td>Matutino</td>
              <td>4</td>
              <td>90</td>
              <td>Técnico em Informática</td>
              <td>Joelson</td>
              <td>
                <button>Matricular-se</button>
                <IoTrash />
              </td>
            </tr>
            <tr>
              <td>Disciplinas período 2</td>
              <td>Matutino</td>
              <td>4</td>
              <td>90</td>
              <td>Técnico em Informática</td>
              <td>Joelson</td>
              <td>
                <button>Matricular-se</button>
                <IoTrash />
              </td>
            </tr>
          </table>
          <h3>3º Período</h3>
          <table>
            <tr>
              <th>Disciplina</th>
              <th>Turno</th>
              <th>Total Aulas</th>
              <th>Carga horária</th>
              <th>Curso</th>
              <th>Professor</th>
              <th>Opções</th>
            </tr>
            <tr>
              <td>Disciplinas período 3</td>
              <td>Matutino</td>
              <td>4</td>
              <td>90</td>
              <td>Técnico em Informática</td>
              <td>Joelson</td>
              <td>
                <button>Matricular-se</button>
                <IoTrash />
              </td>
            </tr>
            <tr>
              <td>Disciplinas período 3</td>
              <td>Matutino</td>
              <td>4</td>
              <td>90</td>
              <td>Técnico em Informática</td>
              <td>Joelson</td>
              <td>
                <button>Matricular-se</button>
                <IoTrash />
              </td>
            </tr>
          </table>
        </main>
      </div>
      <a href="#">
        <IoArrowUp className={estilos.irTopo} />
      </a>
      <Footer />
    </>
  );
};

export default Disciplinas;
