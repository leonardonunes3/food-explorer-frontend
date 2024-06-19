import { Container, Action, DishImage, Box, Frame } from "./styles";
import { Counter } from "../Counter";

export function DishCard({ icon: Icon, name, description, price, image: Image, opacity, isAdmin, onClick }) {
    return(
        <Container opacity={opacity}>
            <Box>
                <DishImage
                    onClick={onClick}
                >
                    { Image }
                </DishImage>
                <Action>
                    <Icon size={24}/>
                </Action> 
            </Box>           

            <h1> { name } </h1>

            <p> { description } </p>

            <h2> R$ { price } </h2>

            <Frame>
                { isAdmin ? <></> : <Counter /> }
            </Frame>
        </Container>
    );
}