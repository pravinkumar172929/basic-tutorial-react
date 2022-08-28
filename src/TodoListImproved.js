import React, { useState } from "react";

export default function TodoListImproved() {
  const [inputItem, setInputItem] = useState("");
  const [listItems, setListItems] = useState([]);

  const clickHandler = () => {
    setListItems([
      ...listItems,
      { id: Date.now(), listInputValue: inputItem, isDone: false },
    ]);
  };

  const deleteItemFunction = (item) => {
    const filteredArr = listItems.filter(
      (itemToDelete) => itemToDelete.id !== item.id
    );
    setListItems(filteredArr);
  };

  const doneItemFunction = (item) => {
    const newArr = listItems.map((itemToDone) => {
      if (itemToDone.id === item.id) {
        itemToDone.isDone = !itemToDone.isDone;
      }
      return itemToDone;
    });
    setListItems(newArr);
  };

  return (
    <div>
      <h1>Todo List Improved</h1>
      <input
        type="text"
        value={inputItem}
        onChange={(e) => setInputItem(e.target.value)}
      />
      <button
        onClick={() => {
          console.log("todoListImproved => inputItem: ", inputItem);
          clickHandler();
        }}
      >
        Add Item
      </button>

      <ul>
        {listItems.map((item, i) => (
          <div>
            <li
              key={i}
              style={{ textDecoration: item.isDone ? "line-through" : "" }}
            >
              {item.listInputValue}
              <button
                onClick={() => {
                  doneItemFunction(item);
                }}
              >
                Done
              </button>

              <button
                onClick={() => {
                  deleteItemFunction(item);
                }}
              >
                Delete
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
