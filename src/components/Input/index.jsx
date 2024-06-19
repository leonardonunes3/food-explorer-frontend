import { Container } from "./styles"; 

export function Input({icon: Icon, alternativeInput = false, ...rest}) {
    return(
        <Container $alternativeinput={alternativeInput.toString()} $icon={Icon}>
            { Icon && <Icon size={24} /> }
            <input  {...rest} />
        </Container>
    );
}