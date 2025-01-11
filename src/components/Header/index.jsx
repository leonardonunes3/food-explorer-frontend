import { Container, Frame, Dishes, Dish, SearchBar } from './styles';

import logo from "../../assets/Logo.svg";
import adminLogo from "../../assets/AdminLogo.svg";

import { Input } from "../Input";
import { Button } from "../Button";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";

import { useAuth } from "../../hooks/auth";
import { api } from '../../services/api';

import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

export function Header({ isAdmin = false }) {
    const [search, setSearch] = useState("");
    const [dishes, setDishes] = useState();

    const navigate = useNavigate();
    const location = useLocation();

    const { signOut } = useAuth();

    function handleSignOut() {
        signOut();
        navigate("/");
    }

    function handleNewDish(){
        navigate("/add");
    }

    function handleDishNavigate(dishId){
        if(location.pathname.includes("/dish/")) {
            navigate(`/dish/${dishId}`, { replace: true });
        } else {
            navigate(`/dish/${dishId}`);
        }
    }

    useEffect(() => {
        if(search) {
            api.get(`/dishes?name=${search}`, { withCredentials: true })
            .then((response) => {
                setDishes(response.data);
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
        } else {
            setDishes();
        }
    }, [search]);

    return(
        <Container>
            <Frame $isadmin={isAdmin}>
                { 
                    isAdmin 
                    ? 
                    <img src={adminLogo} width={197} height={39} />
                    :
                    <img src={logo} width={197} height={30} />
                }
                <SearchBar>
                    <Input 
                            icon={FiSearch} 
                            placeholder="Busque por pratos ou ingredientes"
                            alternativeInput 
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                    />
                    <Dishes>
                        {   dishes?.map((dish, index) => {
                                const srcImage = `${api.defaults.baseURL}/dishesFiles/${dish.dish_image}`;
                                return(
                                       <Dish 
                                        type="button"
                                        onClick={() => handleDishNavigate(dish.id)}
                                        key={index}
                                       >
                                            <img src={srcImage} width={48} height={48}/>
                                            <p>
                                                {dish.name}
                                            </p>
                                       </Dish> 
                                )
                            })
                        }
                    </Dishes>
                </SearchBar>
               { isAdmin ? 
                <Button 
                    title={"Novo Prato"}
                    onClick={handleNewDish}
                />
                :
                <Button 
                    icon={PiReceiptLight}
                    title={"Pedidos (0)"}
                />
                }
                <FiLogOut size={64} type='button' onClick={handleSignOut}/>
            </Frame>
        </Container>
    );
}