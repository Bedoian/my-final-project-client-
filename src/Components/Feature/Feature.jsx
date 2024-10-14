import SectionTitle from "../Title/SectionTitle";
import img from '../../assets/home/featured.jpg'
import '../Feature/feature.css'
const Feature = () => {
    return (
        <section className="featured-item bg-fixed text-white py-20">
            <SectionTitle subHeading={'---Check it out---'} hading={'FROM OUR MENU'}>
            </SectionTitle>
            <div className="flex justify-center bg-fixed">
                <div className="flex gap-10 ">
                    <div className="">
                        <img className="w-[500px]" src={img} alt="" />
                    </div>
                    <div className="">
                        <h4 className="text-xl">March 20, 2023</h4>
                        <h1 className="text-2xl my-3">WHERE CAN I GET SOME?</h1>
                        <p className="text-lg w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-ghost border-0 border-b-4 border-purple-600 mt-3">READ MORE</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;