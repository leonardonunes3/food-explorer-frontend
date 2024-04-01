import { Container } from './styles';

export function Button({ title, icon: Icon }) {
    return (
        <Container 
            type="button"
        >
            { Icon && <Icon size={32} /> }
            { title }
        </Container>
    )
}