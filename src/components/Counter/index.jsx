import { Container, ButtonIcon, Number } from "./styles";

import { Button } from "../Button";
import { FiMinus, FiPlus } from "react-icons/fi";

export function Counter() {
    return(
        <Container>
            <ButtonIcon>
                <FiMinus color="white" size={24}/>
            </ButtonIcon>
            <Number>
                01
            </Number>
            <ButtonIcon>
                <FiPlus color="white" size={24}/>
            </ButtonIcon>
            <Button title="incluir"/>
        </Container>
    );
}