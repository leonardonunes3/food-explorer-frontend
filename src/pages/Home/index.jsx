import { useEffect, useState } from "react";

import { Container, Carousel, CarouselCards, Content, Banner } from "./styles";
import { Header } from "../../components/Header";
import { DishCard } from "../../components/DishCard";

import { FiHeart } from "react-icons/fi";
import { PiPencilSimple } from "react-icons/pi";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
 
import banner from "../../assets/Banner.svg";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Footer } from "../../components/Footer";
        

export function Home() {
    const [swiperMealRef, setSwiperMealRef] = useState(0);
    const [swiperMealIndex, setSwiperMealIndex] = useState(0);
    const [swiperDessertRef, setSwiperDessertRef] = useState(0);
    const [swiperDessertIndex, setSwiperDessertIndex] = useState(0);
    const [swiperDrinkRef, setSwiperDrinkRef] = useState(0);
    const [swiperDrinkIndex, setSwiperDrinkIndex] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);
    const [meals, setMeals] = useState({});
    const [drinks, setDrinks] = useState({});
    const [desserts, setDesserts] = useState({});
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const navigate = useNavigate();

    const { user } = useAuth();

    useEffect(() => {

        api.get("/dishes", { withCredentials: true })
        .then((response) => {

            setMeals(response.data.filter((meal) => meal.category === "Refeições"));
            setDesserts(response.data.filter((dessert) => dessert.category === "Sobremesas"));
            setDrinks(response.data.filter((drink) => drink.category === "Bebidas"));

        })
        .catch(error => {
            if(error.response) {
                if(error.response?.status !== 401) {
                    alert(error.response.data.message);
                }
            } else {
                alert("Não foi possível conectar com o servidor.");
            }
        })

        if(user.role === 'admin') {
            setIsAdmin(true);
        }

        setIsDataLoaded(true);

    }, []);

    function getOpacityMeals(index) {
        if((index+1) >= swiperMealIndex && (index+1) < (swiperMealIndex+3)) {
            return 1;
        } else {
            return 0.3;
        }
    }

    function getOpacityDesserts(index) {
        if((index+1) >= swiperDessertIndex && (index+1) < (swiperDessertIndex+3)) {
            return 1;
        } else {
            return 0.3;
        }
    }

    function getOpacityDrinks(index) {
        if((index+1) >= swiperDrinkIndex && (index+1) < (swiperDrinkIndex+3)) {
            return 1;
        } else {
            return 0.3;
        }
    }

    function handleDishDetails(mealId) {
        navigate(`/dish/${mealId}`);
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
                            onSwiper={setSwiperMealRef}
                            onSlideChange={(swiper) => {
                                setSwiperMealIndex(swiper.realIndex);
                            }}
                            slidesPerView={3.8}
                            initialSlide={swiperMealRef}
                            centeredSlides={true}
                            centeredSlidesBounds={true}
                            spaceBetween={27}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mealSwiper"
                            key={"mealSwiper"}
                        >
                            { 
                                isDataLoaded ?
                                meals?.map((meal, index) => {         
                                    const srcImage = `${api.defaults.baseURL}/dishesFiles/${meal.dish_image}`;
                                    return(
                                        <SwiperSlide
                                            key={`mealSwiper${index}`}
                                        >
                                            <DishCard 
                                                icon={isAdmin ? PiPencilSimple : FiHeart}
                                                name={meal.name + " >"}
                                                description={meal.description}
                                                price={meal.price}
                                                image={<img src={srcImage} width={176} height={176}/>}
                                                opacity={getOpacityMeals(index)}
                                                isAdmin={isAdmin}
                                                onClick={() => handleDishDetails(meal.id)}
                                                key={`${meal}${index}`}
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
                            onSwiper={setSwiperDessertRef}
                            onSlideChange={(swiper) => {
                                setSwiperDessertIndex(swiper.realIndex);
                            }}
                            slidesPerView={3.8}
                            initialSlide={swiperDessertRef}
                            centeredSlides={true}
                            centeredSlidesBounds={true}
                            spaceBetween={27}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="dessertSwiper"
                            key={"dessertSwiper"}
                        >
                            { 
                                isDataLoaded ?
                                desserts?.map((dessert, index) => {
                                    const srcImage = `${api.defaults.baseURL}/dishesFiles/${dessert.dish_image}`;
                                    return(
                                        <SwiperSlide
                                        key={`dessertSwiper${index}`}
                                        >
                                            <DishCard 
                                                icon={isAdmin ? PiPencilSimple : FiHeart}
                                                name={dessert.name}
                                                description={dessert.description}
                                                price={dessert.price}
                                                image={<img src={srcImage} width={176} height={176}/>}
                                                opacity={getOpacityDesserts(index)}
                                                isAdmin={isAdmin}
                                                onClick={() => handleDishDetails(dessert.id)}
                                                key={`${dessert}${index}`}
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
                            onSwiper={setSwiperDrinkRef}
                            onSlideChange={(swiper) => {
                                setSwiperDrinkIndex(swiper.realIndex);
                            }}
                            slidesPerView={3.8}
                            initialSlide={swiperDrinkRef}
                            centeredSlides={true}
                            centeredSlidesBounds={true}
                            spaceBetween={27}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="drinkSwiper"
                            key={"drinkSwiper"}
                        >
                            { 
                                isDataLoaded ?
                                drinks?.map((drink, index) => {
                                    const srcImage = `${api.defaults.baseURL}/dishesFiles/${drink.dish_image}`;
                                    return(
                                        <SwiperSlide
                                        key={`drinkSwiper${index}`}
                                        >
                                            <DishCard 
                                                icon={isAdmin ? PiPencilSimple : FiHeart}
                                                name={drink.name}
                                                description={drink.description}
                                                price={drink.price}
                                                image={<img src={srcImage} width={176} height={176}/>}
                                                opacity={getOpacityDrinks(index)}
                                                isAdmin={isAdmin}
                                                onClick={() => handleDishDetails(drink.id)}
                                                key={`${drink}${index}`}
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