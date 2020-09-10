import React from "react";
import RegisterForm from "../../../components/RegisterForm";
import { Background, Header, Title } from "./styles";

export default function Register() {
  return (
    <Background>
      <Header>
        <Title>Cadastre-se! </Title>
      </Header>

      <RegisterForm />
    </Background>
  );
}
