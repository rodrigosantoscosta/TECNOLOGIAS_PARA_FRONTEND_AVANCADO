import { useState } from "react";

const SimpleCounter = () =>{
    const [count, setCount] = useState(0);
    const handleSum = () =>{
        setCount(count + 1)
    }

    const handleMinus = () =>{
        setCount(count - 1)
    }
    

    return(
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={() => handleSum()}>+</button>
                <button onClick={() => handleMinus()}>-</button>
            </div>
        </div>    
    )
}

export default SimpleCounter;