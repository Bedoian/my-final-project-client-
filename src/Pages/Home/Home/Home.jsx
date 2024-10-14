import Feature from "../../../Components/Feature/Feature";
import Carosel from "../Banner/Carosel";
import Swiping from "../cards/Swiping";
import Footer from '../../Shared/Footer'
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from "react-helmet-async";
import PopularMenu from '../../../Components/Menu/PopularMenu'
const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Farista Restaurant/Home</title>
            </Helmet>
            <Carosel></Carosel>
            <div className="mb-20"><Swiping></Swiping></div>
            <PopularMenu></PopularMenu>
            <div className="my-9">
                <Feature></Feature>
            </div>
            <div className="mb-10">
                <Testimonial></Testimonial>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;