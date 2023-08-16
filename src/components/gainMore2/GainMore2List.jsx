import { useEffect, useState } from 'react';
import GainMore2Item from './GainMore2Item';

export default function GainMore2List() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data/gainItems.json')
      .then((resp) => resp.json())
      .then((data) => {
        console.log('data ===', data);
        setItems(data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);

  return (
    <div>
      {items.map((iObj) => (
        <GainMore2Item
          key={iObj.id}
          title={iObj.title}
          descr={iObj.descr}
          icon={iObj.icon}
        />
      ))}
    </div>
  );
}
