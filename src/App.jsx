import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [resultado] = useState("");
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={resultado} />
        </form>
        <div className="teclado">
          <button>AC</button>
          <button>+/-</button>
          <button>/</button>
          <button>%</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>X</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>0</button>
          <button>,</button>
          <button>=</button>
        </div>
      </div>
    </>
  );
};

export default App;
