import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [firstNumber, setFirstNumber] = useState('');
  const [firstNumberGet, setFirstNumberGet] = useState(false);
  const [op, setOp] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  const context = {
      firstNumber,
      setFirstNumber,
      firstNumberGet,
      setFirstNumberGet,
      secondNumber,
      setSecondNumber,
      op,
      setOp,
      result,
      setResult,
  };
  return (
    <Context.Provider value={ context }>
      { children }
      { console.log(firstNumber) }
      { console.log(secondNumber) }
      { console.log(op) }
      {/* console.log(firstNumber.join(''))*/ }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;