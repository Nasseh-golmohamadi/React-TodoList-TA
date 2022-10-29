import { useState } from "react";

export default function Form({ todoItems, setTodoItems }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleAdd(e) {
    e.preventDefault();
    const localVariable = {
      id: Math.floor(Math.random() * 1000) + 1,
      text: inputValue,
      isDone: false,
    };
    setTodoItems([...todoItems, localVariable]);
    setInputValue("");
  }

  return (
    <div className="App">
      <form>
        <input
          type="text"
          name="task"
          value={inputValue}
          onChange={handleChange}
        />

        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}
