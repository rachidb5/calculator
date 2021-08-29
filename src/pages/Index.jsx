import React from 'react';
import Calculadora from '../componentes/Calculadora';
function Index() {
    return (
        <div className="bg-light d-flex justify-content-center">
          <div className="row row-cols-1">
            <h1 className="ml-auto mr-auto">Calculadora</h1>
            <Calculadora />
          </div>
        </div>
    )
}

export default Index;