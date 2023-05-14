import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    setError(false);
  };

  const handleClear = () => {
    setResult('');
    setError(false);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
      setError(false);
    } catch (error) {
      setResult('Error');
      setError(true);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={result} className={error ? 'error' : ''} />

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

// In this updated version, there is an additional error state variable that keeps track of any errors that occur during the evaluation. If an error occurs, the setError(true) function is called, which sets the error state to true.

// The CSS class error is conditionally added to the input field based on the error state. You can define the appropriate CSS styles to highlight the input field when an error occurs.

// It's important to note that using eval() for calculations can pose security risks, as it can execute arbitrary code. If you plan to use this calculator in a production environment, it's strongly recommended to use a safer method for evaluating expressions.

// Remember to install React.js and any necessary dependencies before using this code.

