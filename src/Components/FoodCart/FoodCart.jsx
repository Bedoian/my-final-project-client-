
const FoodCart = ({ item }) => {
    const { name, image, recipe } = item
    return (
        <div>
            <div className=" w-[370px] shadow-xl">

                <div className="flex justify-center p-0">
                    <img src={image} alt="Shoes" />
                </div>

                <div className=" bg-base-100 text-center py-4 ">
                    <p className="text-xl font-semibold">{name}</p>
                    <p className="my-3">{recipe}</p>
                    <button className="bg-gray-200 text-yellow-600 border-b-4 border-b-yellow-600 uppercase btn btn-ghost">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;