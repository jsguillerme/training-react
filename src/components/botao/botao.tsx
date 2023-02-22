import style from './botao.module.scss'

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  value?: string,
  disabled?: boolean,
  children: string | JSX.Element | JSX.Element[];
}

export default function Botao(props: Props) {
  return (
      <button
        className={style.botao}
        type={props.type}
        value={props.value}
        disabled={props.disabled}
        >
          {props.children}
        </button>
  )
}