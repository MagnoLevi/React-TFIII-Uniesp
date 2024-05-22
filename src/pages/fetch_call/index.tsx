import "./style.css"
import { User, UserProps } from "../../components/user";
import { useState } from "react";

export const FecthCall = () => {
    const [user, setUser] = useState<UserProps>();

    const randomUser = async () => {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const userData = data.results[0];
        setUser(userData);
    }
    
    console.log(user);

    return (
        <div>
            <h1>User aleatório</h1>
            {
                !user
                    ? "Click no botão para gerar um usuário"
                    : <User name={user.name} email={user.email} phone={user.phone} picture={user.picture} />
            }

            <button onClick={randomUser}>Clica baixo nengue</button>
        </div>
    )
}