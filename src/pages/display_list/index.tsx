import "./style.css"

export const DisplayList = () => {
    const time = [
        "América-MG",
        "Avaí",
        "Fortaleza"
    ]

    return(
        <div className="display-list">
            <h1>Campeonato Brasileiro</h1>
            <ul>
                {time.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}