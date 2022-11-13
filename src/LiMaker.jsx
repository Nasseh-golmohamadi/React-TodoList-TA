import { useState } from "react";

export default function LiMaker({ todoItems, setTodoItems }) {
  const [isEdited, setIsEdited] = useState(null);
  const [edit, setEdit] = useState("");

  function handleDelete(id) {
    const FilterElement = todoItems.filter((element) => {
      return element.id !== id;
    });

    setTodoItems(FilterElement);
  }

  function handleEdit(id) {
    setIsEdited(id);
    setEdit(null);

    // todoItems.map((item) => {
    //   if (item.id === id) {
    //     setEdit(item.text);
    //   }
    // });
  }

  // const temp = todoItems.find((element) => {
  //   return element.id == item.id;
  // });
  // temp.text = edit;

  function handleSave(id, value) {
    todoItems.find((element) => {
      return element.id === id;
    }).text = value;

    setTodoItems([...todoItems]);
    setIsEdited(null);
    setEdit(null);
  }

  function handleCancel() {
    setIsEdited(null);
    setEdit(null);
  }

  function handleCheck(id) {
    const isIsDoneIsChecked = todoItems.find((item) => {
      return item.id === id;
    });
    isIsDoneIsChecked.isDone = !isIsDoneIsChecked.isDone;
    setTodoItems([...todoItems]);
  }

  return (
    <ul className="text-base p-2 m-8">
      {todoItems.map((item) => {
        return (
          <li className="bg-teal-300 my-3 p-2 rounded-md" key={item.id}>
            {isEdited == item.id ? (
              <section className="flex justify-between justify-items-center">
                <input
                  value={edit ? edit : item.text}
                  onChange={(e) => setEdit(e.target.value)}
                />
                <div className="flex gap-1">
                  <button
                    className="bg-lime-400 rounded-md p-1"
                    onClick={() => handleSave(item.id, edit ? edit : item.text)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-teal-400 rounded-md  p-1"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </section>
            ) : (
              <section className="flex justify-between justify-items-center">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={item.isDone}
                    onChange={() => handleCheck(item.id)}
                    className="w-6"
                  />
                  {item.isDone ? <s>{item.text}</s> : item.text}
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-rose-700 rounded-md p-1"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-slate-700 rounded-md p-1"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                </div>
              </section>
            )}
          </li>
        );
      })}
    </ul>
  );
}
