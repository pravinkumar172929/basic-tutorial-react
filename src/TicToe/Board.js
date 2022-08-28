import React from "react";
import Square from "./Square";

export default function Board() {
  return (
    <div>
      <div className="board-row">
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
      </div>
      <div className="board-row">
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
      </div>
      <div className="board-row">
        <Square value={7} />
        <Square value={8} />
        <Square value={9} />
      </div>
      <h1>start</h1>
      {[1, 2, 3].map((item, i) => (
        <div key={i} className="board-row">
          {[1, 2, 3].map((item) => (
            <Square value={i} />
          ))}
        </div>
      ))}
      <h1>end</h1>

      <h1>start map</h1>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
        <div className="board-row">
          <Square value={i} />
        </div>
      ))}
      <h1>end map</h1>
    </div>
  );
}
