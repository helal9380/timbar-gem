
import { Helmet } from "react-helmet-async";
import About from "../../Components/About";
import Client from "../../Components/Client";
import Slider from "./Slider";
import TopFoods from "./TopFoods";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bite Spot Cafe | Home</title>
            </Helmet>
            <Slider></Slider>
            <TopFoods></TopFoods>
            <About></About>
            <Client></Client>
        </div>
    );
};

export default Home;