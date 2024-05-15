import { useState } from "react";
import "./style.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const SimpleCounter = () => {
    const [count, set_count] = useState(0);

    const handlePlus = () => {
        set_count((prev_state) => prev_state + 1);
    }

    const handleMinus = () => {
        set_count((prev_state) => prev_state - 1);
    }

    return (
        <>
            <div className="counter-container">
                <div className="counter-number">
                    <h1>{count}</h1>
                </div>

                <div className="counter-button">
                    <button onClick={handleMinus}><FaMinus/></button>
                    <button onClick={handlePlus}><FaPlus/></button>
                </div>
            </div>
        </>
    )
}

export default SimpleCounter;