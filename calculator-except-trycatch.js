import React, { useState } from 'react';
const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={result} />

      <div className="keypad">
        <button className="operator" name="+" onClick={handleClick}>+</button>
        <button className="operator" name="-" onClick={handleClick}>-</button>
        <button className="operator" name="*" onClick={handleClick}>*</button>
        <button className="operator" name="/" onClick={handleClick}>/</button>

        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>

        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>

        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>

        <button name="0" onClick={handleClick}>0</button>
        <button className="operator" name="." onClick={handleClick}>.</button>

        <button className="clear" onClick={handleClear}>Clear</button>
        <button className="equal" onClick={handleCalculate}>=</button>

      </div>
    </div>
  );
};

export default Calculator;


//   You can create a new React component called Calculator and use this code. The component maintains a result state variable to keep track of the calculation input and display the result. When a button is clicked, the handleClick function appends the corresponding value to the result state.

// The handleClear function clears the result state, while the handleCalculate function evaluates the expression using the eval() function (which can be a security risk if used improperly, so exercise caution). If an error occurs during evaluation, the result state is set to 'Error'.

// In the render method, a text input displays the result state, and a set of buttons represents the calculator keypad. The operator buttons (+, -, *, /) append their respective symbols to the result state. Numeric buttons and the decimal point button do the same. The Clear button clears the result state, and the Equals button triggers the handleCalculate function.

// Note: Make sure you have React.js installed in your project before using this code. You may need to import and render the Calculator component in your root component or wherever you want to display the calculator.
