import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Container, Form } from "./styles";

import logo  from "../../assets/Logo.svg";

export function SignIn() {
    return(
        <Container>

            <Form>
                <h1>Faça login</h1>

                <p>Email</p>
                <Input 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                />

                <p>Senha</p>
                <Input 
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                />

                <Button title="Entrar" />

                <ButtonText title="Criar uma conta" />
            </Form>

            <img src={logo} />
        </Container>
    );
}