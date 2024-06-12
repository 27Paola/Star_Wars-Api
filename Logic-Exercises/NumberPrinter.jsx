import React from "react";

const NumberPrinter = () => {
  const printNumbers = () => {
    for (let i = 0; i <= 100; i++) {
      let output = `${i}`;
      if (i % 2 === 0) output += " buzz";
      if (i % 5 === 0) output += " bazz";
      console.log(output);
    }
  };

  return (
    <div>
      <button onClick={printNumbers}>Imprimir Números</button>
    </div>
  );
};

export default NumberPrinter;
