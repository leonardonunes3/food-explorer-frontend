import { useEffect, useState } from "react";

import { Container, Carousel, CarouselCards, Content, Banner } from "./styles";
import { Header } from "../../components/Header";
import { DishCard } from "../../components/DishCard";

import { FiHeart } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { api } from "../../services/api.js";
 
import banner from "../../assets/Banner.svg";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import spaguetti from "../../assets/spaguetti.png";
import { Footer } from "../../components/Footer";
        

export function Home() {
    const [swiperRef, setSwiperRef] = useState(0);
    const [swiperIndex, setSwiperIndex] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);
    const [meals, setMeals] = useState({});
    const [drinks, setDrinks] = useState({});
    const [desserts, setDesserts] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {

        api.get("/dishes")
        .then((response) => {

            setMeals(response.data.filter((meal) => meal.category === "Refeições"));
            setDesserts(response.data.filter((dessert) => dessert.category === "Sobremesas"));
            setDrinks(response.data.filter((drink) => drink.category === "Bebidas"));

        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível conectar com o servidor.");
            }
        })

        setIsDataLoaded(true);

    }, []);

    function getOpacity(index) {
        if((index+1) >= swiperIndex && (index+1) < (swiperIndex+3)) {
            return 1;
        } else {
            return 0.3;
        }
    }

    return(

        <Container>
            <Header isAdmin={isAdmin} />
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
                            onSlideChange={(swiper) => {
                                setSwiperIndex(swiper.realIndex);
                            }}
                            slidesPerView={3.8}
                            initialSlide={swiperRef}
                            centeredSlides={true}
                            centeredSlidesBounds={true}
                            spaceBetween={27}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            { 
                                isDataLoaded ?
                                meals?.map((meal, index) => {         
                                    const srcImage = `${api.defaults.baseURL}/dishesFiles/${meal.dish_image}`;
                                    return(
                                        <SwiperSlide>
                                            <DishCard 
                                                icon={isAdmin ? PiPencilSimple : FiHeart}
                                                name={meal.name}
                                                description={meal.description}
                                                price={meal.price}
                                                image={<img src={srcImage} width={176} height={176}/>}
                                                opacity={getOpacity(index)}
                                                isAdmin={isAdmin}
                                            />
                                        </SwiperSlide>
                                    )
                                }) 
                                :
                                <></>
                            }
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
                            { 
                                isDataLoaded ?
                                desserts?.map((dessert, index) => {
                                    const srcImage = `${api.defaults.baseURL}/dishesFiles/${dessert.dish_image}`;
                                    return(
                                        <SwiperSlide>
                                            <DishCard 
                                                icon={isAdmin ? PiPencilSimple : FiHeart}
                                                name={dessert.name}
                                                description={dessert.description}
                                                price={dessert.price}
                                                image={<img src={srcImage} width={176} height={176}/>}
                                                opacity={getOpacity(index)}
                                                isAdmin={isAdmin}
                                            />
                                        </SwiperSlide>
                                    )
                                }) 
                                :
                                <></>
                            }
                        </Swiper>
                    </CarouselCards>
                    <h1>Bebidas</h1>
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
                            { 
                                isDataLoaded ?
                                drinks?.map((drink, index) => {
                                    const srcImage = `${api.defaults.baseURL}/dishesFiles/${drink.dish_image}`;
                                    return(
                                        <SwiperSlide>
                                            <DishCard 
                                                icon={isAdmin ? PiPencilSimple : FiHeart}
                                                name={drink.name}
                                                description={drink.description}
                                                price={drink.price}
                                                image={<img src={srcImage} width={176} height={176}/>}
                                                opacity={getOpacity(index)}
                                                isAdmin={isAdmin}
                                            />
                                        </SwiperSlide>
                                    )
                                }) 
                                :
                                <></>
                            }
                        </Swiper>
                    </CarouselCards>
                </Carousel>
                <Footer />
            </Content>
        </Container>
    );
}