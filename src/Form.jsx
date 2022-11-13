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

    localStorage.setItem(
      "todos",
      JSON.stringify([...todoItems, localVariable])
    );
  }

  return (
    <div className="App">
      <form>
        <input
          type="text"
          name="task"
          value={inputValue}
          onChange={handleChange}
          className="w-4/5 text-base p-2 m-8 rounded-md"
          placeholder="اینجا تایپ کنید..."
        />
        <button className="bg-cyan-200 rounded-md p-2 px-8" onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
}
