import { useState } from "react";

const SimpleCounter = () => {
    const [count, set_count] = useState(10);

    const handle_minus = () => {
        set_count((prevState) => prevState - 1)
    }

    const handle_plus = () => {
        set_count((prevState) => prevState + 1)
    }

    return (
        <div className="counter-container">
            <div className="counter-number">
                <h1>{count}</h1>
            </div>

            <div className="counter-button">
                <button className="btn" onClick={handle_minus}>-</button>
                <button className="btn" onClick={handle_plus}>+</button>
            </div>
        </div>
    )
}

export default SimpleCounter;