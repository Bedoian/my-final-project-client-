import { Link } from "react-router-dom";
import SmallFoodCard from "../../Pages/Shared/SmallFoodCard";
import Cover from "../../Pages/Shared/Cover";

const CardMenu = ({ items ,title,img}) => {
    return (
        <div>
            {
                title&&  <div className="mt-10">
                <Cover img={img} title={title}></Cover>
            </div>
            }
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-3 mt-10">
                    {
                        items.map(item => <SmallFoodCard item={item} key={item._id}></SmallFoodCard>)
                    }
                </div>
            </div>
            <div className="flex justify-center mt-5">
             <Link to={`/order/${title}`}>
             <button className="bg-gray-200 text-black border-b-4 border-b-black uppercase btn btn-ghost">Order your food</button>
             </Link>
            </div>
        </div>
    );
};

export default CardMenu;