import { IoTrash } from "react-icons/io5";

interface Disciplina {
  nome: string;
  professor: string;
  cargaHoraria: number;
  aulas: number;
  faltas: number;
  percentualFaltas: string;
  n1: number;
  n2: number;
  media: number;
  situacao: string;
  id: number;
}

interface TabelaBoletimProps {
  disciplinas: Disciplina[];
}

const TabelaBoletim = ({ disciplinas }: TabelaBoletimProps) => {
  return (
    <table>
      <thead>
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
      </thead>
      <tbody>
        {disciplinas.map((disciplina) => (
          <tr key={disciplina.id}>
            <td>
              {disciplina.nome} <br />
              <small>{disciplina.professor}</small>
            </td>
            <td>{disciplina.cargaHoraria}</td>
            <td>{disciplina.aulas}</td>
            <td>{disciplina.faltas}</td>
            <td>{disciplina.percentualFaltas}</td>
            <td>{disciplina.n1}</td>
            <td>{disciplina.n2}</td>
            <td>{disciplina.media}</td>
            <td>{disciplina.situacao}</td>
            <td>
              <IoTrash />
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={10}>
            <small>
              <strong>Legenda:</strong> CH/Aulas = Carga horária em horas /
              Quantidade de aulas previstas.
            </small>
            <p>
              *Esses registros podem sofrer alterações até o final do período
              letivo.
            </p>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default TabelaBoletim;
