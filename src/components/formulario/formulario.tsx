import Botao from '../botao/botao';
import Input from '../input/input'
import style from './formulario.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as FontsIcon from '@fortawesome/free-solid-svg-icons';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Formulario() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');

  const verifyLogin = (event: FormEvent) => {
    event.preventDefault();
    const baseURL = "http://localhost:3000";
    const objData = {
      email: email,
      password: password
    }

    console.log(objData);
    

    axios
      .post(`${baseURL}/auth/login`, objData, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'application/json'
        }
      })
      .then((response) => {
        if (response.status === 200) {
          navigate('/home')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className={style.formulario}>
      <form className={style.formulario__inputs} onSubmit={verifyLogin}>
        <Input
          id="inputEmail"
          type='email'
          placeholder='Digite o seu e-mail'
          label='E-mail'
          valor={email}
          aoAlterado={valor => setEmail(valor)}
          required={true}
          icon={<FontAwesomeIcon icon={FontsIcon.faEnvelope} />}
        />
        <Input
          id="inputPassword"
          type='password'
          placeholder='Digite a sua senha'
          label='Password'
          valor={password}
          aoAlterado={valor => setPassword(valor)}
          required={true}
          icon={<FontAwesomeIcon icon={FontsIcon.faKey} />}
        />
        <div className={style.formulario__actions}>
          <p>
            <a href="">Esqueceu a senha?</a>
          </p>
          <Botao >
            Entrar
          </Botao>
        </div>
      </form>
    </div>
  )
}