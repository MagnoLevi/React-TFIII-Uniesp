import { FaAtom, FaList, FaPlus, FaPoo, FaRegIdBadge, FaSearch } from "react-icons/fa";
import "./style.css"
import { Cards } from "../../components/card"

const Home = () => {
    const data = [
        {
            "image": <FaPlus />,
            "title": "Simple Counter",
            "route": "simple_counter"
        },
        {
            "image": <FaList />,
            "title": "Display List",
            "route": "display_list",
        },
        {
            "image": <FaSearch />,
            "title": "Filter Search",
            "route": "filter_search",
        },
        {
            "image": <FaAtom />,
            "title": "Context Api",
            "route": "context_api",
        },
        {
            "image": <FaRegIdBadge />,
            "title": "Fetch Call",
            "route": "fetch_call",
        },
        {
            "image": <FaPoo />,
            "title": "Axios Call",
            "route": "axios_call",
        }
    ];

    return (
        <div className="home">
            <div className="home-content">
                {data.map((item, index) => (
                    <div className="cards" key={index}>
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