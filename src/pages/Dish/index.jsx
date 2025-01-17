import { useEffect, useState } from "react";

import { Container, Content, Description, Frame, GoBack, Tags, Box } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tag";

import { SlArrowLeft } from "react-icons/sl";
import { Counter } from "../../components/Counter";
import { Button } from "../../components/Button";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function Dish() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState("");

    const navigate = useNavigate();
    const { user } = useAuth();
    let { id } = useParams();

    useEffect(() => {
        api.get(`/dishes/${id}`)
        .then((response) => {
            setName(response.data.name);
            setDescription(response.data.description);
            setIngredients(response.data.ingredients);
            setPrice(response.data.price);
            
            setImage(`${api.defaults.baseURL}/dishesFiles/${response.data.dish_image}`);
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível conectar com o servidor.");
            }
        })

        if(user.role === 'admin') {
            setIsAdmin(true);
        }

        setIsDataLoaded(true);
    }, [id]);

    function handleGoBack() {
        navigate(-1);
    }

    function handleConfigDish() {
        navigate(`/edit/${id}`);
    }

    return(
        <Container>
            <Header isAdmin={isAdmin} />
            <Content>
                <GoBack 
                    type="button"
                    onClick={handleGoBack}
                >
                    <SlArrowLeft size={24}/>
                    <h2>voltar</h2>
                </GoBack>
                
                {   isDataLoaded ?
                        <Frame>
                            <img src={image} height={390} width={390} />
                            <Description>
                                <h1>{ name }</h1>
                                <p>{ description }</p>
                                <Tags>
                                    {
                                        ingredients?.map((ingredient, index) => {
                                            return(
                                                <Tag name={ingredient.name} key={index}/>
                                            )
                                        })
                                    }

                                </Tags>
                                <Box>
                                    { isAdmin ? <Button title="Editar prato" onClick={() => handleConfigDish()} /> : <Counter price={price} /> }
                                </Box>
                            </Description>
                        </Frame>
                        :
                        <></>
                }
            </Content>
            <Footer />
        </Container>
    );
}