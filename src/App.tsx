type ItemProp = {
  name: string,
  isPacked: boolean
}

function Item({ name, isPacked }: ItemProp) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  } else {
    return <li className="item">{name} </li>;
  }
  
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
