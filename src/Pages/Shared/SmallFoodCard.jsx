
const SmallFoodCard = ({ item }) => {
    const { price, name, recipe,image } = item
    return (
        <div>
            <div className="flex gap-3">
                <div>
                    <img className="w-[130px]" style={{borderRadius:'0px 200px 200px 200px'}} src={image} alt="" />
                </div>
                <div>
                    <div className="flex gap-6">
                        <p className="text-2xl">{name}-----------</p>
                        <p className="text-yellow-600 text-xl">${price}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 w-[500px]">{recipe}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallFoodCard;