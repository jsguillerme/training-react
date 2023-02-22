import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Employee } from '../../interfaces/employee';
import Nav from '../../components/nav/nav';
import Menu from '../../components/menu/menu';
import style from './home.module.scss';

export default function Home() {

  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: uuidv4(),
      nome: "Guilherme Andrade",
      role: "admin",
      email: "guilherme@email.com"
    }
  ]);

  const newEmployee = (employee: Employee) => {
    setEmployees([...employees, employee])
  }

  return (
    <section className={style.principal}>
      <div className={style.principal__nav}>
        <Nav newEmployee={employee => newEmployee(employee)}/>
      </div>
      <div className={style.principal__menu}>
        <Menu employees={employees}/>
      </div>
    </section>
  );
}