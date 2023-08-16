import GainMoreItem from './GainMoreItem';

export default function GainCardsList(props) {
  // console.log(props.item);
  return (
    <div className='gain-cards-container'>
      {props.item.map((obj) => (
        <GainMoreItem
          key={obj.id}
          icon={obj.icon}
          title={obj.title}
          description={obj.descr}
        />
      ))}
    </div>
  );
}
