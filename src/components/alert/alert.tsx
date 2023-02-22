import React from 'react';
import style from './alert.module.scss';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

interface Props {
  children: string | JSX.Element | JSX.Element[]
  titulo: string
  description: string
  txtCancelar: string
  txtContinuar: string
}

const Alert = (props: Props) => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button className="Button">{props.children}</button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className={style.AlertDialogOverlay} />
      <AlertDialog.Content className={style.AlertDialogContent}>
        <AlertDialog.Title className={style.AlertDialogContent__AlertDialogTitle}>{props.titulo}</AlertDialog.Title>
        <AlertDialog.Description className={style.AlertDialogContent__AlertDialogDescription}>
          {props.description}
        </AlertDialog.Description>
        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
          <AlertDialog.Cancel asChild>
            <button className={style.AlertDialogContent__ButtonTxtCancelar}>{props.txtCancelar}</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button className={style.AlertDialogContent__ButtonTxtContinuar}>{props.txtContinuar}</button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default Alert;