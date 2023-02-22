import style from './card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontsIcon from '@fortawesome/free-solid-svg-icons';
import Alert from '../alert/alert';
import { Employee } from '../../interfaces/employee';

export default function Card(props: Employee) {
  return (
    <section className={style.employee}>
      <div className={style.employee__cabecalho}>
      </div>
      <div className={style.employee__rodape}>
        <img src="https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png" alt="" />
        <div className={style.employee__rodape__infos}>
          <h4>{props.nome}</h4>
          <h5>{props.role}</h5>
          <p>{props.email}</p>
          <div className={style.employee__rodape__actions}>
            <button>
              <FontAwesomeIcon icon={FontsIcon.faEdit} color="#5D3891"/>
            </button>
            <Alert
              children={<FontAwesomeIcon icon={FontsIcon.faTrash} color="#ba2323"/>}
              titulo="Você tem certeza?"
              txtCancelar='Cancelar'
              txtContinuar='Sim, deletar conta'
              description='Essa ação não pode ser desfeita. Isso excluirá permanentemente essa conta e removerá os dados de nossos servidores.'
            />
          </div>
        </div>
      </div>
    </section>
  );
}