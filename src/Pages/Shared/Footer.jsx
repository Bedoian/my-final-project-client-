import fb from '../../../public/Images/fb.png'
import insta from '../../../public/Images/icons8-insta-48.png'
import git from '../../../public/Images/fb.png'
const Footer = () => {
    return (
        <div>
            <div>
                <div className='flex'>
                    <div className="bg-[#1F2937] py-20  text-center text-white w-1/2">
                        <div className='relative left-16'>
                            <h1 className='text-xl font-semibold mb-3'>CONTACT US</h1>
                            <div className='text-sm'>
                                <p>123 ABS Street, Uni 21, Bangladesh</p>
                                <p>+88 123456789</p>
                                <p>Mon - Fri: 08:00 - 22:00</p>
                                <p>Sat - Sun: 10:00 - 23:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 text-white  py-20  bg-[#111827]">
                        <div className='relative right-36'>
                            <p className='text-xl text-center'>Follow US</p>
                            <p className='text-sm text-center my-4'>Join us on social media</p>
                            <div className='flex gap-3 justify-center'>
                                <img className='w-8 h-8' src={fb} alt="" />
                                <img className='w-8 h-8' src={insta} alt="" />
                                <img className='w-8 h-8' src={git} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <footer className="footer footer-center bg-[#1E1E1E] text-white p-4">
                        <aside>
                            <p>Copyright © CulinaryCloud. All rights reserved.</p>
                        </aside>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;