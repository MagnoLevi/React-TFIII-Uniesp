import { FaMoon, FaSun } from "react-icons/fa";
import "./style.css"

const ContextApi = () => {
    let darkTheme = false;

    return (
        <div className="theme-container">
            <span className="theme-icon">
                {darkTheme ? <FaMoon /> : <FaSun />}
            </span>
            <button className="theme-button">
                <h1>Enable {darkTheme ? "light" : "dark"} theme </h1>
            </button>
        </div>
    )
}

export default ContextApi