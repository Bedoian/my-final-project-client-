import SectionTitle from "../../../Components/Title/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import Rating from "react-rating";
import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // console.log(reviews);
    return (
        <div>
            <SectionTitle subHeading={'---What Our Clients Say---'} hading={'TESTIMONIALS'}>
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div>
                            <div className="flex justify-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={3}
                                    readOnly
                                />
                            </div>
                            <p className="text-2xl text-center px-8">{review.details}</p>
                            <p className="text-center text-3xl font-semibold uppercase mt-3 text-yellow-600">{review.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;