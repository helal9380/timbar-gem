
import About from "../../Components/About";
import Client from "../../Components/Client";
import Slider from "./Slider";
import TopFoods from "./TopFoods";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <TopFoods></TopFoods>
            <About></About>
            <Client></Client>
        </div>
    );
};

export default Home;