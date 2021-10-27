import App from "./App";
import Banner from "./Banner";
import Navbar from "./Navbar"
const Home = () => {
    return (
        <div className="body">
            <div className="dark">
                <Navbar/>
            <Banner/>
            <App/>
            </div>
        </div>
    )
}

export default Home
