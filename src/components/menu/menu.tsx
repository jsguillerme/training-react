import { Employee } from '../../interfaces/employee';
import Card from '../card/card';
import style from './menu.module.scss';

interface Props {
  employees: Employee[]
}

export default function Menu(props: Props) {

  return (
    <section className={style.menu}>
      {props.employees.map((funcionario: Employee) => {
        return (
          <Card
            key={funcionario.id}
            nome={funcionario.nome}
            role={funcionario.role}
            email={funcionario.email}
          />
        )
      })}
    </section>
  );
}