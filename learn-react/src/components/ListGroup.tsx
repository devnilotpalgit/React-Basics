function ListGroup() {
  const items = ["Apple", "Mango", "Banana", "JackFruit"];
  return (
    <>
      <h2>List of Random Items</h2>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
