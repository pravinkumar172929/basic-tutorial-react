import React from "react";

export default function CaseConvertor(props) {
  // destructuring
  const { inputValue, setInputValue } = props;

  return (
    <div>
      <h1>Case Convertor</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          alert(inputValue.toUpperCase());
        }}
      >
        Click to convert
      </button>
    </div>
  );
}
