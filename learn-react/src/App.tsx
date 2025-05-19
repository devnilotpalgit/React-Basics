import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Apple", "Mango", "Banana", "JackFruit"];
  const items2 = ["Football", "Cricket", "Basketball", "Hockey"];
  return (
    <div>
      <ListGroup items={items} headings={"Fruits"} />
      <ListGroup items={items2} headings={"Sports"} />
    </div>
  );
}

export default App;
