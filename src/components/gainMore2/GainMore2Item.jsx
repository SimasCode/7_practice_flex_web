import css from './GainMore2Item.module.css';

export default function GainMore2Item(props) {
  return (
    <div className={css.grid}>
      <i className={`${css.icons} ${props.icon} ${css.rowSpan2}`}></i>
      <h2>{props.title}</h2>
      <p>{props.descr}</p>
    </div>
  );
}
