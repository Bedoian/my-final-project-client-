import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import img6 from '../../../assets/home/slide6.jpg'
import img7 from '../../../assets/home/slide7.jpg'
import Slide from './Slide';
import SectionTitle from '../../../Components/Title/SectionTitle';

const Swiping = () => {
    return (
        <section>
            <SectionTitle subHeading={'---From 11:00am to 10:00pm---'} hading={'ORDER ONLINE'}>
            </SectionTitle>
            <Swiper
                slidesPerView={5}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide><Slide text={'Salad'} img={img1}></Slide></SwiperSlide>
                <SwiperSlide><Slide text={'Soup'} img={img7}></Slide></SwiperSlide>
                <SwiperSlide><Slide text={'Vegetable'} img={img6}></Slide></SwiperSlide>
                <SwiperSlide><Slide text={'Sos'} img={img5}></Slide></SwiperSlide>
                <SwiperSlide><Slide text={'Dissert'} img={img3}></Slide></SwiperSlide>
                <SwiperSlide><Slide text={'Salad'} img={img4}></Slide></SwiperSlide>
                <SwiperSlide><Slide text={'Salad'} img={img2}></Slide></SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Swiping;