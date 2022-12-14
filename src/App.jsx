import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [resultado, setResultado] = useState("");

  const handleClick = (e) => {
    setResultado(resultado.concat(e.target.name));
  };

  const AC = () => {
    setResultado("");
  };
  const space = () => {
    setResultado(resultado.slice(0, -1));
  };

  const calcule = () => {
    try {
      setResultado(eval(resultado).toString());
    } catch (err) {
      setResultado("error");
    }
  };
  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={resultado} />
        </form>
        <div className="teclado">
          <button className="botao-cinza" onClick={AC} id="AC">
            AC
          </button>
          <button className="botao-cinza" name="C" onClick={space}>
            C
          </button>
          <button className="botao-cinza" name="%" onClick={handleClick}>
            %
          </button>
          <button className="botao-laranja" name="/" onClick={handleClick}>
            ÷
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button className="botao-laranja" name="*" onClick={handleClick}>
            X
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button className="botao-laranja" name="-" onClick={handleClick}>
            -
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button className="botao-laranja" name="+" onClick={handleClick}>
            +
          </button>
          <button name="0" onClick={handleClick} id="zero">
            0
          </button>
          <button name="," onClick={handleClick}>
            ,
          </button>
          <button className="botao-laranja" onClick={calcule}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
