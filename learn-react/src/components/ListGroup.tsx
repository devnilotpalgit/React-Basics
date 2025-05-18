import { MouseEvent } from "react";
function ListGroup() {
  const items = ["Apple", "Mango", "Banana", "JackFruit"];
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h2>List of Random Items</h2>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
