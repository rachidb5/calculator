import React  from "react";
import './Calculadora.css'
import Display from "./display";
import Numbers from "./Numbers";
import Operacoes from "./Operacoes";
import OtherButtons from "./OtherButtons";

function Calculadora() {
    return (
        <div className="container-calculadora bg-dark mt-3">
          <Display content="3" />
          <Numbers />
          <Operacoes />
          <OtherButtons />
        </div>
    )
}

export default Calculadora;