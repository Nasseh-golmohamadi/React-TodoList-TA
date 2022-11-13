import Form from "./Form";
import { useState } from "react";
import LiMaker from "./LiMaker";

function App() {
  const [todoItems, setTodoItems] = useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  );

  // function handleLocal() {
  //   const localS = localStorage.getItem("todos");
  //   return localS ? JSON.parse(localS) : [];
  // }

  return (
    <div className="w-3/4 bg-zinc-400  mx-auto mt-8 p-4 rounded-md">
      <h1 className="text-5xl text-teal-300 m-8 ml-40">کارهای مهم روزانه خودتون رو یادداشت کنید</h1>
      <Form todoItems={todoItems} setTodoItems={setTodoItems} />
      <LiMaker todoItems={todoItems} setTodoItems={setTodoItems} />
    </div>
  );
}

export default App;
