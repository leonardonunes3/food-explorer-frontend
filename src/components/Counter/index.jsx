import { Container, ButtonIcon, Number, Box } from "./styles";

import { Button } from "../Button";
import { FiMinus, FiPlus } from "react-icons/fi";

export function Counter({ price }) {
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
            <Box price={price}>
                { price ? <Button title={`incluir ∙ R$ ${price}`}/> : <Button title="incluir"/>}
            </Box>
        </Container>
    );
}