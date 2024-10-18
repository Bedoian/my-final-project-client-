import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import banner1 from '../../assets/menu/banner3.jpg'
import banner2 from '../../assets/menu/dessert-bg.jpeg'
import banner3 from '../../assets/menu/pizza-bg.jpg'
import banner4 from '../../assets/menu/salad-bg.jpg'
import banner5 from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/Title/SectionTitle";
import CardMenu from "../../Components/CardMenu/CardMenu";
const OurMenu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Farista Restaurant/Menu</title>
            </Helmet>
            <Cover img={banner1} title={'Our menu'}></Cover>
            <SectionTitle subHeading={'---Do not miss---'} hading={"TODAY'S OFFER"}></SectionTitle>
            {/* offerd card menu */}
            <CardMenu items={offered}></CardMenu>
            {/* dessert card menu */}
            <CardMenu items={dessert} img={banner2} title={'dessert'}></CardMenu>
            {/* pizza card menu */}
            <CardMenu items={pizza} img={banner3} title={'pizza'}></CardMenu>
            {/* salad card menu */}
            <CardMenu items={salad} img={banner4} title={'salad'}></CardMenu>   
            {/* soap card menu */}
            <CardMenu items={soup} img={banner5} title={'soup'}></CardMenu>
        </div>
    );
};

export default OurMenu;