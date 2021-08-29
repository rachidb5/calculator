import React, { useContext } from "react";
import Context from '../context/Context';

function Numbers() {
    const { firstNumber, setFirstNumber,firstNumberGet, secondNumber, setSecondNumber } = useContext(Context);
    const numArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9','0', '.'];
    const onClick = ({ target }) => {
      if (firstNumberGet === false) {
        setFirstNumber([...firstNumber, target.value]);
      } else {
        setSecondNumber([...secondNumber, target.value]);
      }
    }
    return(
      <div className="row row-cols-3">
        { numArray.map(num => <button value={ num } onClick={ onClick }>{ num }</button>)}
      </div>
    )
}

export default Numbers;