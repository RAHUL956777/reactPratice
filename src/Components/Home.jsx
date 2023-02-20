import React from "react";
import { useState } from "react";

const Home = () => {
  // let inputValuel = 0;
  const [inputValuel, setInputValuel] = useState(0);

  // const changeHandler = (e) => {
  //   inputValuel = e.target.value;
  //   console.log(inputValuel);
  // };

  const decrement = () => {
    setInputValuel(inputValuel - 1);
  };
  const increment = () => {
    setInputValuel(inputValuel + 1);
  };

  const btnStyle = {
    padding: 20,
    border: "none",
    backgroundColor: "#f1f1f1",
    margin: 5,
    fontSize: 20,
  };

  return (
    <div>
      <input
        style={{ padding: 20, marginTop: 30, border: "1px solid blue" }}
        type="number"
        placeholder="Enter some text"
        // onChange={changeHandler}
        value={inputValuel}
      />
      <button style={btnStyle} onClick={decrement}>
        -
      </button>
      <button style={btnStyle} onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Home;
