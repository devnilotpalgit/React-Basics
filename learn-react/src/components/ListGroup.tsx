import { useState } from "react";

function ListGroup() {
  const items = ["Apple", "Mango", "Banana", "JackFruit"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h2>List of Random Items</h2>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
