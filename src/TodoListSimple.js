import React, { useState } from "react";

export default function TodoListSimple() {
  const [inputItem, setInputItem] = useState("");
  const [arrItem, setArrItem] = useState([]);

  const addItemFunction = () => {
    console.log("TodoListSimple => inputItem: ", inputItem);
    setArrItem([...arrItem, inputItem]);
  };

  return (
    <div>
      <h1>Todo List Simple</h1>
      <input
        type="text"
        value={inputItem}
        onChange={(e) => {
          setInputItem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addItemFunction();
        }}
      >
        Add Item
      </button>

      <ul>
        {arrItem.map((item, i) => (
          <li key={i}>
            {item}
            <button
              onClick={() => {
                const filteredArr = arrItem.filter(
                  (itemToDel) => itemToDel != item
                );
                setArrItem(filteredArr);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
