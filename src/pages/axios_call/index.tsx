// import "./style.css"

import axios from "axios"
import { useState } from "react"


export const AxiosCall = () => {
    const [jojoke, setJoke] = useState<any>();
    const crapJoke = () => {
        axios
            .get("https://official-joke-api.appspot.com/random_joke")
            .then((res) => {
                setJoke(`${res.data.setup}?`);

                setTimeout(() => {
                    setJoke(res.data.punchline);
                }, 5000);
            });
    }

    console.log(jojoke);


    return (
        <div>
            <h1>Piadoca foda</h1>
            <button onClick={crapJoke}>Confia :)</button><br />
            {jojoke ?? jojoke}
        </div>
    )
}