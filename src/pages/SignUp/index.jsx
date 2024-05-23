import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { Container, Form } from "./styles";

import logo  from "../../assets/Logo.svg";

export function SignUp() {

  return(
      <Container>
        <Form>
          <h1>Crie sua conta</h1>

          <p>Seu nome</p>
          <Input 
            placeholder="Exemplo: Maria da Silva"
            alternativeInput
          />
          
          <p>Email</p>
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            alternativeInput
          />

          <p>Senha</p>
          <Input 
            placeholder="No mínimo 6 caracteres"
            type="password"
            alternativeInput
          />

          <Button title="Criar conta" />

          <ButtonText title="Já tenho uma conta" />
          
        </Form>

        <img src={logo} />
      </Container>

  )
}