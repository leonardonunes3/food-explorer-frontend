import { useState } from "react";

import { Container, Carousel } from "./styles";
import { Header } from "../../components/Header";
import { DishCard } from "../../components/DishCard";

import { FiHeart } from "react-icons/fi";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import spaguetti from "../../assets/spaguetti.png";

export function Home() {
    const [swiperRef, setSwiperRef] = useState(0);

    return(
        <Container>
            <Header />
            <Carousel>
                <Swiper
                    onSwiper={setSwiperRef}
                    onSlideChange={() => console.log(swiperRef)}
                    slidesPerView={3.8}
                    initialSlide={swiperRef}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    spaceBetween={27}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <DishCard 
                            icon={FiHeart}
                            name="Spaguetti Gambe >"
                            description="Massa fresca com camarões e pesto."
                            price="79,97"
                            image={<img src={spaguetti} width={176} height={176}/>}
                            opacity={1}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DishCard 
                            icon={FiHeart}
                            name="Spaguetti Gambe >"
                            description="Massa fresca com camarões e pesto."
                            price="79,97"
                            image={<img src={spaguetti} width={176} height={176}/>}
                            opacity={1}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DishCard 
                            icon={FiHeart}
                            name="Spaguetti Gambe >"
                            description="Massa fresca com camarões e pesto."
                            price="79,97"
                            image={<img src={spaguetti} width={176} height={176}/>}
                            opacity={1}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DishCard 
                            icon={FiHeart}
                            name="Spaguetti Gambe >"
                            description="Massa fresca com camarões e pesto."
                            price="79,97"
                            image={<img src={spaguetti} width={176} height={176}/>}
                            opacity={0.3}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DishCard 
                            icon={FiHeart}
                            name="Spaguetti Gambe >"
                            description="Massa fresca com camarões e pesto."
                            price="79,97"
                            image={<img src={spaguetti} width={176} height={176}/>}
                            opacity={0.3}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DishCard 
                            icon={FiHeart}
                            name="Spaguetti Gambe >"
                            description="Massa fresca com camarões e pesto."
                            price="79,97"
                            image={<img src={spaguetti} width={176} height={176}/>}
                            opacity={0.3}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DishCard 
                            icon={FiHeart}
                            name="Spaguetti Gambe >"
                            description="Massa fresca com camarões e pesto."
                            price="79,97"
                            image={<img src={spaguetti} width={176} height={176}/>}
                            opacity={0.3}
                        />
                    </SwiperSlide>
                </Swiper>
            </Carousel>
        </Container>
    );
}