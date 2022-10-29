import Form from "./Form";
import { useState } from "react";
import LiMaker from "./LiMaker";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  return (
    <>
      <Form todoItems={todoItems} setTodoItems={setTodoItems} />
      <LiMaker todoItems={todoItems} setTodoItems={setTodoItems} />
    </>
  );
}

export default App;
