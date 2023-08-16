export default function GainMoreItem(props) {
  return (
    <div className='gain-single-card-container'>
      <i className={`gain-icons ${props.icon}`}></i>
      <h2 className='gain-title'>{props.title}</h2>
      <p className='gain-description'>{props.description}</p>
    </div>
  );
}
