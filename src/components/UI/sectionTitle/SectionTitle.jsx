export default function SectionTitle(props) {
  const { pill, title, subtitle } = props;
  return (
    <div className='gain-container'>
      <p className='pill'>{pill}</p>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
