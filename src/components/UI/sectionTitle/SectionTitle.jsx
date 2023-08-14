export default function SectionTitle(props) {
  const { pill, title, subtitle } = props;
  return (
    <div>
      <p>{pill}</p>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
