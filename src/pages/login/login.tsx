import Formulario from '../../components/formulario/formulario'
import ilustrationLogin from '../../assets/images/imgLogin.svg';
import style from './login.module.scss'

export default function Login() {
  return (
    <div className={style.viewLogin}>
      <Formulario />
      <img src={ilustrationLogin} alt="" />
    </div>
  )
}