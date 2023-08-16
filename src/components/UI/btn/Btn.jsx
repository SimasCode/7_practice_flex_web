import css from './btn.module.css';

export default function Btn(props) {
  const genClasses = props.secondary
    ? `${css.btn} ${css.gray} ${props.className}`
    : `${css.btn} ${props.className}`;

  return <button className={genClasses}>{props.children}</button>;
}
