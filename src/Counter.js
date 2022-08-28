import React, { useState } from "react";
import { Container, Button, Grid } from "@mui/material";

export default function Counter() {
  const [count, setCount] = useState(0);

  const countPlusFunction = () => {
    setCount(count + 1);
  };

  const countMinusFunction = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => countPlusFunction()}>+</button>

      {/* <Button variant="contained" onClick={() => countPlusFunction()}>
        +
      </Button> */}

      <p
        className={
          count === 0 ? "blackColor" : count > 0 ? "blueColor" : "redColor"
        }
      >
        {count}
      </p>

      {/* <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        {count}
      </Grid> */}

      <button onClick={countMinusFunction}>-</button>
      {/* <Button variant="contained" onClick={() => countMinusFunction()}>
        -
      </Button> */}

      <div className="resetDiv">
        <button className="resetButton" onClick={() => setCount(0)}>
          Reset Counter
        </button>
      </div>
    </div>
  );
}
