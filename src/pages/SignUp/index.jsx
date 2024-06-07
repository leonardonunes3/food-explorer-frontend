import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

import { api } from "../../services/api";

import logo  from "../../assets/Logo.svg";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todas os campos!");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso.");
      navigate("/");
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar");
      }
    })
  }

  function goToSignIn() {
    navigate("/");
  }

  return(
      <Container>
        <Form>
          <h1>Crie sua conta</h1>

          <p>Seu nome</p>
          <Input 
            placeholder="Exemplo: Maria da Silva"
            alternativeInput
            onChange={e => setName(e.target.value)}
          />
          
          <p>Email</p>
          <Input 
            placeholder="Exemplo: exemplo@exemplo.com.br"
            alternativeInput
            onChange={e => setEmail(e.target.value)}
          />

          <p>Senha</p>
          <Input 
            placeholder="No mínimo 6 caracteres"
            type="password"
            alternativeInput
            onChange={e => setPassword(e.target.value)}
          />

          <Button title="Criar conta" onClick={handleSignUp} />

          <ButtonText title="Já tenho uma conta" onClick={goToSignIn} />
          
        </Form>

        <img src={logo} />
      </Container>

  )
}