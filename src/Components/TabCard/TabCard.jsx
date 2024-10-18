import FoodCart from "../FoodCart/FoodCart";

const TabCard = ({items}) => {
    return (
      
        <div className="grid lg:grid-cols-3 lg:mt-9 lg:mx-14 gap-10">
            {
                items.map(item => <FoodCart item={item} key={item._id}></FoodCart>)
            }
        </div>
    
    );
};

export default TabCard;