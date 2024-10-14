import FoodCart from "../FoodCart/FoodCart";

const TabCard = ({items}) => {
    return (
      
        <div className="grid grid-cols-3 mt-9 mx-28 gap-7">
            {
                items.map(item => <FoodCart item={item} key={item._id}></FoodCart>)
            }
        </div>
    
    );
};

export default TabCard;