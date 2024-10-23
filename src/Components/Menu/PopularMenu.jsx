import SectionTitle from "../Title/SectionTitle";
import SmallFoodCard from "../../Pages/Shared/SmallFoodCard";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
    const [menu] = useMenu()
    const popular = menu?.filter(item => item.category === 'popular')
    return (
        <section>
            <SectionTitle subHeading={'---Check it out---'}
                hading={'FROM OUR MENU'}>
            </SectionTitle>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 mt-8 gap-4">
                    {
                        popular?.map(item => <SmallFoodCard item={item} key={item._id}></SmallFoodCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Menu;