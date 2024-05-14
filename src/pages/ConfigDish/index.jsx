import { Container, Content, GoBack, Frame, InputBox, FirstRow, SecondRow, ThirdRow, UploadButton, BigInput, ButtonFrame, SelectionBox } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";

import { SlArrowLeft } from "react-icons/sl";
import { PiUploadSimpleLight } from "react-icons/pi";
import { Button } from "../../components/Button";
import { useState } from "react";

export function ConfigDish() {
    const [newDish, setNewDish] = useState(true);

    return(
        <Container>
            <Header isAdmin />
            <Content>
                <GoBack type="button">
                    <SlArrowLeft size={32}/>
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
                        <InputBox scale={true}>
                            <h2>Nome</h2>
                            <Input 
                                placeholder="Ex.: Salada Ceasar"
                                alternativeInput
                            />
                        </InputBox>
                        <InputBox last={true}>
                            <h2>Categoria</h2>
                            <SelectionBox>
                                <select>
                                    <option value="teste"> 
                                        Teste 1
                                    </option>
                                    <option value="testee"> 
                                        Teste 2
                                    </option>
                                </select>
                            </SelectionBox>
                        </InputBox>
                    </FirstRow>
                    <SecondRow>
                        <InputBox scale={true}>
                            <h2>Ingredientes</h2>
                            <Input 
                                placeholder="."
                                alternativeInput
                            />
                        </InputBox>
                        <InputBox last={true}>
                            <h2>Preço</h2>
                            <Input 
                                placeholder="R$ 00,00"
                                alternativeInput
                            />
                        </InputBox>
                    </SecondRow>
                    <ThirdRow>
                        <InputBox scale={true} last={true}>
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