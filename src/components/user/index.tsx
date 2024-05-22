// import "./style.css"
export interface UserProps {
    name: {
        first: string;
        last: string;
    };
    email: string;
    phone: string;
    picture: {
        large: string;
    };
}

export const User = ({ name, email, phone, picture }: UserProps) => {
    return (
        <div>
            <img src={picture.large} alt={name.first + " " + name.last} />
            <h2>{name.first + " " + name.last}</h2>
            <p>Email: {email}</p>
            <p>Telefone: {phone}</p>
        </div>
    )
}