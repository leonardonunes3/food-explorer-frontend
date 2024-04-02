import { Container } from "./styles";

import logo from "../../assets/Logo-gray.svg";

export function Footer() {
    return(
        <Container>
            <img src={logo} width={186} height={30} />
            <text>
                © 2023 - Todos os direitos reservados.
            </text>
        </Container>
    );
}