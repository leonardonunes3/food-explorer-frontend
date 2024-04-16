import { useState } from "react";

import { Container, Carousel, CarouselCards, Content, Banner } from "./styles";
import { Header } from "../../components/Header";
import { DishCard } from "../../components/DishCard";

import { FiHeart } from "react-icons/fi";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import banner from "../../assets/Banner.svg";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import spaguetti from "../../assets/spaguetti.png";
import { Footer } from "../../components/Footer";

export function Home() {
    const [swiperRef, setSwiperRef] = useState(0);

    return(
        <Container>
            <Header isAdmin />
            <Content>
                <Banner>
                    <img src={banner} width={656} height={412} />
                    <div>
                        <h1>
                            Sabores inigualáveis
                        </h1>
                        <p>
                            Sinta o cuidado do preparo com ingredientes selecionados
                        </p>
                    </div>
                </Banner>
                <Carousel>
                    <h1>Refeições</h1>
                    <CarouselCards>
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
                    </CarouselCards>

                    <h1>Sobremesas</h1>
                    <CarouselCards>
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
                    </CarouselCards>
                </Carousel>
                <Footer />
            </Content>
        </Container>
    );
}