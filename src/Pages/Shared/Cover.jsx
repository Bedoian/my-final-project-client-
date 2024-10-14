import { Parallax } from 'react-parallax';
const Cover = ({ img, title }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div
                    className={`hero  h-[700px]`}>
                    <div className="hero-overlay bg-opacity-35"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="text-white bg-black py-32 bg-opacity-50 w-[1000px]">
                            <h1 className=" mb-5 text-5xl font-cinzel font-bold uppercase">{title}</h1>
                            <p className="mb-5 font-cinzel">
                            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Cover;