import { Container, Action, DishImage, Box } from "./styles";
import { Counter } from "../Counter";

export function DishCard({ icon: Icon, name, description, price, image: Image, opacity }) {
    return(
        <Container opacity={opacity}>
            <Box>
                <DishImage>
                    { Image }
                </DishImage>
                <Action>
                    <Icon size={24}/>
                </Action> 
            </Box>           

            <h1> { name } </h1>

            <p> { description } </p>

            <h2> R$ { price } </h2>

            <Counter />
        </Container>
    );
}