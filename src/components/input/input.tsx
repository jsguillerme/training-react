import style from './input.module.scss';

interface Props {
  id: string,
  type: string
  defaultValue?: string
  label?: string,
  placeholder: string,
  icon?: JSX.Element,
  required?: boolean,
  valor?: string,
  aoAlterado:  React.Dispatch<React.SetStateAction<string>>
}

export default function Input(props: Props) {

  const aoDigitado = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.aoAlterado(event.target.value)
  }
  return (
    <div className={style.inputDiv}>
      <label
        className={style.inputDiv__label}
        htmlFor={props.id}>{props.label}
      </label>
      <div className={style.inputDiv__container}>
        <span className={style.inputDiv__icon}>{props.icon}</span>
        <input
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          className={style.inputDiv__input}
          required={props.required}
          value={props.valor}
          onChange={aoDigitado}
        />
      </div>
    </div>
  );
}