import { FaList, FaPlus, FaSearch } from "react-icons/fa";
import "./style.css"
import { Cards } from "../../components/card"

const Home = () => {
    const data = [
        {
            "image": <FaPlus />,
            "title": "Simple Counter",
            "route": "SimpleCounter"
        },
        {
            "image": <FaList />,
            "title": "Display List",
            "route": "DisplayList",
        },
        {
            "image": <FaSearch />,
            "title": "Filter Search",
            "route": "FilterSearch",
        }
    ];

    return (
        <div className="home">
            <div className="home-content">
                {data.map((item) => (
                    <div className="cards">
                        <Cards 
                            image={item.image}
                            title={item.title}
                            route={item.route}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home