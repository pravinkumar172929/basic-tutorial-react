import React, { useState } from "react";
import CaseConvertor from "./CaseConvertor";
import Counter from "./Counter";
import GreaterValue from "./GreaterValue";
import TodoListImproved from "./TodoListImproved";
// import TicToe from "./TicToe/TicToe";
import TodoListSimple from "./TodoListSimple";

// for basic alert
const clickHandler = () => {
  alert("Hi! Welcome to react");
};

export default function App() {
  // for case convertor

  const [inputValue, setInputValue] = useState("");

  // for greater number
  const [inputVal1, setInputVal1] = useState(0);
  const [inputVal2, setInputVal2] = useState(0);

  return (
    <div>
      <button onClick={clickHandler}>Click Me!</button>

      {/* case covertor using props */}
      <CaseConvertor inputValue={inputValue} setInputValue={setInputValue} />

      {/* Greater Value */}
      <GreaterValue
        inputVal1={inputVal1}
        inputVal2={inputVal2}
        setInputVal1={setInputVal1}
        setInputVal2={setInputVal2}
      />

      {/* counter */}
      <Counter />

      {/* To Do List simple*/}
      <TodoListSimple />

      {/* To Do List Improved */}
      <TodoListImproved />
    </div>
  );
}
