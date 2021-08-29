import React, { useContext } from 'react';
import Context from '../context/Context';

function OtherButtons() {
  const { firstNumber, secondNumber, op, setResult } = useContext(Context);
  const onCLick = () => {
    const a = parseFloat(firstNumber.join(''));
    const b = parseFloat(secondNumber.join(''))
    if (op === '+') {
      setResult(a+b);
    }
    if (op === '-') {
      setResult(a-b);
    }
    if (op === '*') {
      setResult(a*b);
    }
    if (op === '/') {
      setResult(a/b);
    }
  }
    return(
        <div>
          <button onClick={ onCLick }>=</button>
          <button type="submit">CE</button>
        </div>
    )
}

export default OtherButtons;