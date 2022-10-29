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
    <ul>
      {todoItems.map((item) => {
        return (
          <li key={item.id}>
            {isEdited == item.id ? (
              <>
                <input
                  value={edit ? edit : item.text}
                  onChange={(e) => setEdit(e.target.value)}
                />
                <button
                  onClick={() => handleSave(item.id, edit ? edit : item.text)}
                >
                  Save
                </button>
                <button onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={item.isDone}
                  onChange={()=>handleCheck(item.id)}
                />
                {item.isDone ? <s>{item.text}</s> : item.text}
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
