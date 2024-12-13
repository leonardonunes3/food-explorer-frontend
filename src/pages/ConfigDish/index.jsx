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
import { useState, useEffect, useRef } from "react";
import debounce from "debounce";

import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";


export function ConfigDish() {
    const [newDish, setNewDish] = useState(true);
    const [ingredients, setIngredients] = useState([]);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    const [image, setImage] = useState("");
    const [file, setFile] = useState("");
    const [fileImage, setFileImage] = useState("");
    const fileInput = useRef(null)
    const [input, setInput] = useState();

    const navigate = useNavigate();
    let { id } = useParams();

    const options = [
        {
          value: "Refeições",
          label: "Refeições"
        },
        {
          value: "Sobremesas",
          label: "Sobremesas",
        },
        {
          value: "Bebidas",
          label: "Bebidas",
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

    function handleGoBack() {
        navigate("/");
    }

    function handleSaveDish() {
        if(newDish) {
            if(!file || !name || !category || ingredients.length == 0 || !description || !price ) {
                return alert("Preencha todos os campos!")
            }
            api.post(`/dishes`, 
                { name, category: category.value, price, description, ingredients: ingredients.map(ingredient => ingredient.name), dish_image: new File([file], file.name, {type: file.type}) },
                {
                    headers: {
                    'Content-Type': 'multipart/form-data'
                    }
                })
            .then(() => {
                alert("Prato cadastrado com sucesso!")
            })
            .catch(error => {
                if(error.response) {
                  alert(error.response.data.message);
                } else {
                  alert("Não foi possível cadastrar o prato");
                }
              })
        } else {

        }
    }

    function handleUpload() {
        console.log("Upload");
        fileInput.current.click();
    }

    function handleFileChange(event) {
        const fileUploaded = event.target.files[0];
        setFile(fileUploaded);
        setFileImage(URL.createObjectURL(fileUploaded));
        console.log("file setado");
    }

    useEffect(() => {
        if(id) {
            api.get(`/dishes/${id}`)
            .then((response) => {
                setName(response.data.name);
                setDescription(response.data.description);
                setIngredients(response.data.ingredients);
                setPrice(response.data.price);
                setCategory(response.data.category);
                
                setImage(`${api.defaults.baseURL}/dishesFiles/${response.data.dish_image}`);
            })
            .catch(error => {
                if(error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível conectar com o servidor.");
                }
            })

            setNewDish(false);
        }
    }, []);

    return(
        <Container>
            <Header isAdmin={true} />
            <Content>
                <GoBack 
                    type="button" 
                    onClick={handleGoBack}
                >
                    <SlArrowLeft size={24}/>
                    <h2>voltar</h2>
                </GoBack>
                {newDish ? <h1>Adicionar prato</h1> : <h1>Editar prato</h1>}
                <Frame>
                    <FirstRow>
                        <InputBox>
                            <h2>Imagem do prato</h2>
                            <UploadButton onClick={handleUpload}>
                                <input 
                                    id="image"
                                    type="file" 
                                    style={{display: 'none'}}
                                    onChange={handleFileChange}
                                    ref={fileInput}
                                />
                                { file ? 
                                    <>
                                        <img width={40} height={40} src={fileImage}/>
                                        <p>{file.name}</p>
                                    </> 
                                    : 
                                    <>
                                        <PiUploadSimpleLight size={24} />
                                        <p>Selecione imagem</p> 
                                    </>
                                }
                                
                            </UploadButton>
                        </InputBox>
                        <InputBox $scale={true}>
                            <h2>Nome</h2>
                            <Input 
                                placeholder="Ex.: Salada Ceasar"
                                alternativeInput
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </InputBox>
                        <InputBox $last={true}>
                            <h2>Categoria</h2>
                            <Select
                                options={options}
                                styles={customStyles}
                                isSearchable={true}
                                placeholder={"Selecione uma categoria"}
                                value={category ? {value: category, label: category} : null}
                                onChange={setCategory}
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
                                value={price}
                                onChange={e => setPrice(e.target.value)}
                            />
                        </InputBox>
                    </SecondRow>
                    <ThirdRow>
                        <InputBox $scale={true} $last={true}>
                            <h2>Descrição</h2>
                            <BigInput>
                                <textarea 
                                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </BigInput>
                        </InputBox>
                    </ThirdRow>
                    <ButtonFrame>
                        <Button
                            title={"Salvar alterações"}
                            onClick={handleSaveDish}
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