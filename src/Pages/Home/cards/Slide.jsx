
const Slide = ({img,text}) => {
    return (
        <div>
            <img className='w-[280px] h-[405px]' src={img} alt="" />
            <p className="text-center relative bottom-3 text-3xl text-white -mt-20">{text}</p>
        </div>
    );
};

export default Slide;