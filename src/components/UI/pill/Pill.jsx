import css from './pill.module.css';

export default function Pill(props) {
  const genClasses = props.secondary
    ? `${css.pill} ${css.pill2} `
    : `${css.pill}`;
  return <p className={genClasses}>{props.pillItem}</p>;
}
