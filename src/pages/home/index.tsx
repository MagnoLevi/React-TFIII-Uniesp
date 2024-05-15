import { Cards } from "../../components/card"

const Home = () => {
    const data = [
        {
            "title": "Simple Counter",
            "route": "simple-counter"
        }
    ]

    return(
        <div className="home">
            <div className="home-contet">
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <Cards 
                            title={item.title}
                            route={item.route} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home