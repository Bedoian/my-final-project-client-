
const Form = ({ handleSubmit, onSubmit, register, item }) => {
    return (
        <div>
            <section className='mx-14 p-2 md:p-6  bg-gray-100 rounded-none shadow-md '>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='px-4'>
                        <div>
                            <label className='text-gray-700 text-2xl font-semibold' htmlFor='job_title'>
                                Recipe Name*
                            </label>
                            <input
                                {...register('name')}
                                defaultValue={`${item ? item.name : ''}`}
                                placeholder='Recipe Name'
                                type='text'
                                className='py-4 text-xl block w-full px-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div className='grid lg:grid-cols-2 gap-5 mt-2'>
                            <div className='flex flex-col gap-2 '>
                                <label className=' text-gray-700 text-2xl font-semibold' htmlFor='category'>
                                    Category*
                                </label>
                                <select
                                    {...register('category')}
                                    defaultValue={`${item ? item.category : ''}`}
                                    name='category'
                                    className='border p-2 py-4 rounded-md'
                                >
                                    <option value=''>Select Category</option>
                                    <option value='salad'>Salad</option>
                                    <option value='pizza'>Pizza</option>
                                    <option value='soup'>Soup</option>
                                    <option value='dessert'>Dessert</option>
                                </select>
                            </div>
                            <div>
                                <label className='text-gray-700 text-2xl font-semibold ' htmlFor='min_price'>
                                    Price*
                                </label>
                                <input
                                    type='number'
                                    defaultValue={`${item ? item.price : ''}`}
                                    {...register('price')}
                                    className=' py-4  block w-full px-4  mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 mt-4'>
                            <label className='text-gray-700 text-2xl font-semibold' htmlFor='description'>
                                Recipe Details*
                            </label>
                            <textarea
                                defaultValue={`${item ? item.recipe : ''}`}
                                {...register('recipe')}
                                placeholder='Recipe Details'
                                className='block lg:h-24 w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            ></textarea>
                        </div>
                        <div>

                            <input
                                {...register('photo')}
                                type="file"
                                className=" mt-4 bg-gray-50 file-input rounded-none w-full max-w-xs" />
                        </div>
                        <input type="submit" className='btn bg-gradient-to-r text-white from-[#835D23] to-[#B58130] rounded-none text-xl mt-5' value={`${item ? 'Update item' : 'Add Item'}`} />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Form;