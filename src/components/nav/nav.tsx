import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontsIcon from '@fortawesome/free-solid-svg-icons';
import style from './nav.module.scss';
import { useNavigate } from 'react-router-dom';
import Register from '../register/register';
import { Employee } from '../../interfaces/employee';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  setEmployee?: Dispatch<SetStateAction<Employee[]>>
  newEmployee: (employee: Employee) => void
}

export default function Nav(props: Props) {
  const navigate = useNavigate();

  const returnInit = () => {
    navigate('/login')
  }

  return (
    <header className={style.cabecalho}>
      <div className={style.cabecalho__listaActions}>
        <button className={style.cabecalho__listaActions__item}>
          <FontAwesomeIcon icon={FontsIcon.faUserPlus} color="#5D3891"/>
          <Register
            newEmployee={employee => props.newEmployee(employee)}
            children='Cadastrar Usuário'
            titulo='Cadastro de Funcionário'
            txtCancelar='Cancelar'
            txtContinuar='Cadastrar'
            description='Preencha as informações do usuário'
          />
        </button>
        <button className={style.cabecalho__listaActions__item}>
          <FontAwesomeIcon icon={FontsIcon.faFilter} color="#5D3891"/>
          <p>Filtrar Usuários</p>
        </button>
        <button onClick={returnInit} className={style.cabecalho__listaActions__item}>
          <FontAwesomeIcon icon={FontsIcon.faSignOut} color="#5D3891"/>
          <p>Encerrar Sessão</p>
        </button>
      </div>
    </header>
  )
}