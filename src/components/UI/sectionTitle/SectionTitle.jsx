import Pill from '../pill/Pill';
import css from './sectionTitle.module.css';

export default function SectionTitle(props) {
  const { pill, title, subtitle } = props;
  return (
    <div className={`${css.ta} ${props.className}`}>
      {/* <p className='pill'>{pill}</p> */}
      <Pill pillItem={pill} />
      <h2 className={css.title}>{title}</h2>
      <p className={css.subtitle}>{subtitle}</p>
    </div>
  );
}
