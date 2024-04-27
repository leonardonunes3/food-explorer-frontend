import { useState } from "react";

import { Container, Content, Description, Frame, GoBack, Tags, Box } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tag";

import { SlArrowLeft } from "react-icons/sl";
import salad from '../../assets/salad.png';
import { Counter } from "../../components/Counter";
import { Button } from "../../components/Button";

export function Dish() {
    const [isAdmin, setIsAdmin] = useState(true);

    return(
        <Container>
            <Header isAdmin={isAdmin} />
            <Content>
                <GoBack type="button">
                    <SlArrowLeft size={32}/>
                    <h2>voltar</h2>
                </GoBack>
                <Frame>
                    <img src={salad} height={390} width={390} />
                    <Description>
                        <h1>Salada Ravanello</h1>
                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                        <Tags>
                            <Tag name="alface" />
                            <Tag name="cebola" />
                            <Tag name="pão naan" />
                            <Tag name="pepino" />
                            <Tag name="rabanete" />
                            <Tag name="tomate" />
                        </Tags>
                        <Box>
                            { isAdmin ? <Button title="Editar prato" /> : <Counter price={"25,00"} /> }
                        </Box>
                    </Description>
                </Frame>
            </Content>
            <Footer />
        </Container>
    );
}