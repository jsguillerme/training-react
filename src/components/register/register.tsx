import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FontsIcon from '@fortawesome/free-solid-svg-icons';
import * as Dialog from '@radix-ui/react-dialog';
import { FormEvent, useState } from 'react';
import Input from '../input/input';
import style from './register.module.scss';
import { Dispatch, SetStateAction } from 'react';
import { Employee } from '../../interfaces/employee';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  children?: string | JSX.Element | JSX.Element[]
  titulo: string
  description: string
  txtCancelar: string
  txtContinuar: string
  newEmployee: (employee: Employee) => void
}

export default function Register(props: Props) {
  const [employeeName, setemployeeName] = useState('');
  const [employeePass, setemployeePass] = useState('');
  const [employeeRole, setemployeeRole] = useState('');
  const [employeeEmail, setemployeeEmail] = useState('');

  const aoCadastrar = (event: FormEvent) => {
    props.newEmployee({
      id: uuidv4(),
      nome: employeeName,
      email: employeeEmail,
      role: "admin"
    })
    setemployeeName('')
    setemployeePass('')
    setemployeeEmail('')
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button">
          {props.children}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={style.DialogOverlay} />
        <Dialog.Content className={style.DialogContent}>
          <Dialog.Title className={style.DialogContent__DialogTitle}>{props.titulo}</Dialog.Title>
          <Dialog.Description className={style.DialogContent__DialogDescription}>
            {props.description}
          </Dialog.Description>
          <fieldset className={style.DialogContent__Fieldset}>
            <Input
              id="employeeName"
              type='text'
              placeholder='Digite o nome completo'
              label='Nome Completo'
              valor={employeeName}
              aoAlterado={valor => setemployeeName(valor)}
              required={true}
              icon={<FontAwesomeIcon icon={FontsIcon.faUser} />}
            />
          </fieldset>
          <fieldset className={style.DialogContent__Fieldset}>
            <Input
              id="employeePass"
              type='password'
              placeholder='Informe a senha por favor'
              label='Password'
              valor={employeePass}
              aoAlterado={valor => setemployeePass(valor)}
              required={true}
              icon={<FontAwesomeIcon icon={FontsIcon.faKey} />}
            />
          </fieldset>
          <fieldset className={style.DialogContent__Fieldset}>
            <Input
              id="employeeEmail"
              type='email'
              placeholder='Digite o e-mail'
              label='E-mail'
              valor={employeeEmail}
              aoAlterado={valor => setemployeeEmail(valor)}
              required={true}
              icon={<FontAwesomeIcon icon={FontsIcon.faEnvelope} />}
            />
          </fieldset>
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end', gap: 10 }}>
            <Dialog.Close>
              <button className={style.DialogContent__ButtonTxtCancelar}>{props.txtCancelar}</button>
            </Dialog.Close>
            <Dialog.Close>
              <button onSubmit={aoCadastrar} className={style.DialogContent__ButtonTxtContinuar}>{props.txtContinuar}</button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}