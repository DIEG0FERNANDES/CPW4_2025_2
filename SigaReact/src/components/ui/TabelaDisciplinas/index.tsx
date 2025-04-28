import { IoTrash } from "react-icons/io5";

interface Disciplina {
  nome: string;
  turno: string;
  totalAulas: number;
  cargaHoraria: number;
  curso: string;
  professor: string;
  id: number;
}

interface TabelaDisciplinasProps {
  periodo: string;
  disciplinas: Disciplina[];
}

const TabelaDisciplinas = ({
  periodo,
  disciplinas,
}: TabelaDisciplinasProps) => {
  return (
    <>
      <h3>{periodo}</h3>
      <table>
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Turno</th>
            <th>Total Aulas</th>
            <th>Carga horária</th>
            <th>Curso</th>
            <th>Professor</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((disciplina) => (
            <tr key={disciplina.id}>
              <td>{disciplina.nome}</td>
              <td>{disciplina.turno}</td>
              <td>{disciplina.totalAulas}</td>
              <td>{disciplina.cargaHoraria}</td>
              <td>{disciplina.curso}</td>
              <td>{disciplina.professor}</td>
              <td>
                <button>Matricular-se</button>
                <a
                  href={`excluirDisciplina.php?id_disciplina=${disciplina.id}`}
                >
                  <IoTrash />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TabelaDisciplinas;
