import { Link } from "react-router-dom";
import './style.css';

type CardProps = {
    image?: string;
    title: string;
    route: string;
}

export const Cards = ({ image, title, route }: CardProps) => {
    return(
        <Link to={route}>
            <div className="cards">
                <div className="image">
                    {image}
                    {title}
                </div>
            </div>
        </Link>
    )
}