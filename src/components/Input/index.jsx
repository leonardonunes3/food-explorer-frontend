import { Container } from "./styles"; 

export function Input({icon: Icon, alternativeInput = false, ...rest}) {
    return(
        <Container alternativeInput={alternativeInput} >
            { Icon && <Icon size={24} /> }
            <input  {...rest} />
        </Container>
    );
}