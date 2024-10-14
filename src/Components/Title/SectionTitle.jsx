
const SectionTitle = ({ hading, subHeading }) => {
    return (
        <div className="text-center">
            <h1 className="text-xl text-yellow-600 py-2 italic">{subHeading}</h1>
            <div className="flex justify-center">
                <p className="text-4xl  border-y-4 py-4 mb-5 w-[300px] border-gray-300">{hading}</p>
            </div>
        </div>
    );
};

export default SectionTitle;