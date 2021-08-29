import React, { useContext } from "react";
import Context from '../context/Context';

function Display() {
    const { result } = useContext(Context);
    return (
        <div>
            <h1 className="text-light ml-auto">{ result }</h1>
        </div>
    )
}

export default Display