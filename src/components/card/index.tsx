import { Link } from "react-router-dom";
import './style.css';

type CardProps = {
    image?: React.ReactNode;
    title: string;
    route: string;
}

export const Cards = ({ image, title, route }: CardProps) => {
    return (
        <Link to={route} style={{ textDecoration: "none" }}>
            <div className="card">
                <div className="image">
                    {image}
                    <span>{title}</span>
                </div>
            </div>
        </Link>
    )
}
