
const ItemList = (props) => {
  if (!props.items || props.items.length === 0) {
    return <p>No items found.</p>;
  }

  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
