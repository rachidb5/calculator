import React, { useContext } from "react";
import Context from '../context/Context';

function Operacoes() {
    const { setFirstNumberGet, setOp } = useContext(Context);
    const opsArray = ['+', '-', '*','/'];
    const onClick = ({ target }) => {
        setFirstNumberGet(true)
        setOp(target.value);
    }
    return(
      <div className="row row-cols-3">
        { opsArray.map(op => <button value={ op } onClick={ onClick }>{ op }</button>)}
      </div>
    )
}

export default Operacoes;