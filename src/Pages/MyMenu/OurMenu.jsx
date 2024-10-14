import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import banner1 from '../../assets/menu/banner3.jpg'
import banner2 from '../../assets/menu/dessert-bg.jpeg'
import banner3 from '../../assets/menu/pizza-bg.jpg'
import banner4 from '../../assets/menu/salad-bg.jpg'
import banner5 from '../../assets/menu/soup-bg.jpg'
import Footer from "../Shared/Footer";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/Title/SectionTitle";
import SmallFoodCard from "../Shared/SmallFoodCard";
const OurMenu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    console.log(dessert)
    return (
        <div>
            <Helmet>
                <title>Farista Restaurant/Menu</title>
            </Helmet>
            <Cover img={banner1} title={'Our menu'}></Cover>
            <SectionTitle subHeading={'---Do not miss---'} hading={"TODAY'S OFFER"}></SectionTitle>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-3 mt-10">
                    {
                        offered.map(item => <SmallFoodCard item={item} key={item._id}></SmallFoodCard>)
                    }
                </div>
            </div>
            <div className="mt-10">
                <Cover img={banner2} title={'DESSERTS'}></Cover>
            </div>

            <div className="mt-10">
                <Cover img={banner3} title={'PIZZA'}></Cover>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-3 mt-10">
                    {
                        pizza.map(item => <SmallFoodCard item={item} key={item._id}></SmallFoodCard>)
                    }
                </div>
            </div>
            <div className="mt-10">
                <Cover img={banner4} title={'SALAD'}></Cover>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-3 mt-10">
                    {
                        salad.map(item => <SmallFoodCard item={item} key={item._id}></SmallFoodCard>)
                    }
                </div>
            </div>
            <div className="mt-10">
                <Cover img={banner5} title={'SOUP'}></Cover>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-3 mt-10">
                    {
                        soup.map(item => <SmallFoodCard item={item} key={item._id}></SmallFoodCard>)
                    }
                </div>
            </div>

            <div className="mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default OurMenu;