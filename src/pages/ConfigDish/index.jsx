import { Container, Content, GoBack, Frame, InputBox, FirstRow, SecondRow, ThirdRow, UploadButton, BigInput, ButtonFrame, Ingredients, AddButton, Tag, Exclude } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";

import Select from 'react-select'

import theme from '../../styles/theme';

import { SlArrowLeft } from "react-icons/sl";
import { PiUploadSimpleLight } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import { Button } from "../../components/Button";
import { useState, useEffect } from "react";
import debounce from "debounce";

import { useNavigate, useParams } from "react-router-dom";


export function ConfigDish() {
    const [newDish, setNewDish] = useState(true);
    const [ingredients, setIngredients] = useState([]);
    const [input, setInput] = useState();

    const navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
        if(id) {
            setNewDish(false);
        }
    }, []);

    const options = [
        {
          value: "Refeição",
          label: "Refeição"
        },
        {
          value: "Sobremesa",
          label: "Sobremesa",
        },
        {
          value: "Bebida",
          label: "Bebida",
        },
    ];

    const customStyles = {
        control: (provided) => ({
          ...provided,
          background: theme.COLORS.BACKGROUND_DARK_900,
          borderColor: theme.COLORS.BACKGROUND_DARK_900,
          color: theme.COLORS.LIGHT_400,
          display: 'flex',
          flexWrap: 'nowrap',
          width: '364px',
          height: '48px',
          paddingLeft: '8px',
          paddingRight: '8px',
          fontSize: '16px',
          fontWeight: 400,
          fontFamily: "Roboto",
        }),
        menu: (provided) => ({
          ...provided,
          background: theme.COLORS.BACKGROUND_DARK_900,
          color: theme.COLORS.LIGHT_400,
          width: '364px',
          paddingLeft: '8px',
          fontSize: '16px',
          fontWeight: 400,
          fontFamily: "Roboto",
        }),
    };

    const updateState = () => {
        if(input) {
            ingredients.push({ name: input });
            setInput();
        }
    };

    const handleOnClick = debounce(updateState, 300);

    return(
        <Container>
            <Header isAdmin={true} />
            <Content>
                <GoBack type="button">
                    <SlArrowLeft size={24}/>
                    <h2>voltar</h2>
                </GoBack>
                {newDish ? <h1>Adicionar prato</h1> : <h1>Editar prato</h1>}
                <Frame>
                    <FirstRow>
                        <InputBox>
                            <h2>Imagem do prato</h2>
                            <UploadButton type="button" >
                                <PiUploadSimpleLight size={24} />
                                <p>Selecione imagem</p>
                            </UploadButton>
                        </InputBox>
                        <InputBox $scale={true}>
                            <h2>Nome</h2>
                            <Input 
                                placeholder="Ex.: Salada Ceasar"
                                alternativeInput
                            />
                        </InputBox>
                        <InputBox $last={true}>
                            <h2>Categoria</h2>
                            <Select
                                options={options}
                                styles={customStyles}
                                isSearchable={true}
                                placeholder={"Selecione uma categoria"}
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                    },
                                })}
                            />
                        </InputBox>
                    </FirstRow>
                    <SecondRow>
                        <InputBox $scale={true}>
                            <h2>Ingredientes</h2>
                            <Ingredients>
                                { 
                                    ingredients.map((ingredient, index) => (
                                        <Tag>
                                            <p>{ingredient.name}</p>
                                            <Exclude
                                                type="button"
                                                onClick={() => {
                                                    console.log(ingredients.at(index));
                                                    setIngredients(ingredients.filter((ingredient) => ingredient !== ingredients.at(index)))
                                                }}
                                            >
                                                <IoCloseOutline 
                                                    size={16}
                                                    color="white"
                                                />
                                            </Exclude>
                                        </Tag>
                                    ))
                                }
                                <AddButton
                                    type="button"
                                    onMouseDown={handleOnClick}
                                >
                                    <input
                                        placeholder="Adicionar"
                                        onChange={input => setInput(input.target.value)}
                                    />
                                    <p>&nbsp;+</p>
                                </AddButton>
                            </Ingredients>
                        </InputBox>
                        <InputBox $last={true}>
                            <h2>Preço</h2>
                            <Input 
                                placeholder="R$ 00,00"
                                alternativeInput
                            />
                        </InputBox>
                    </SecondRow>
                    <ThirdRow>
                        <InputBox $scale={true} $last={true}>
                            <h2>Descrição</h2>
                            <BigInput>
                                <textarea 
                                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                />
                            </BigInput>
                        </InputBox>
                    </ThirdRow>
                    <ButtonFrame>
                        <Button
                            title={"Salvar alterações"}
                        />
                        { newDish ? <></> : 
                        <Button
                            title={"Excluir prato"}
                        />
                        }
                    </ButtonFrame>
                </Frame>
            </Content>
            <Footer />
        </Container>
    );
}