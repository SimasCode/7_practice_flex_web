import Pill from '../pill/Pill';

export default function SectionTitle(props) {
  const { pill, title, subtitle } = props;
  return (
    <div className={`gain-container ${props.className}`}>
      {/* <p className='pill'>{pill}</p> */}
      <Pill pillItem={pill} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
