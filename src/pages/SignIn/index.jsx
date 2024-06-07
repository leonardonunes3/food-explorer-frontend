import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Container, Form } from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo  from "../../assets/Logo.svg";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { signIn } = useAuth();

    function handleSignIn() {
        if(!email || !password) {
            return alert("Preencha todas os campos!");
        }
        signIn({ email, password });
    }

    function createAccount() {
        navigate("/register");
    }

    return(
        <Container>

            <Form>
                <h1>Faça login</h1>

                <p>Email</p>
                <Input 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    onChange={e => setEmail(e.target.value)}
                />

                <p>Senha</p>
                <Input 
                    placeholder="No mínimo 6 caracteres"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn} />

                <ButtonText title="Criar uma conta" onClick={createAccount} />
            </Form>

            <img src={logo} />
        </Container>
    );
}