import React from "react";
import LoginForm from "./components/LoginForm";
import { Background, Header, Title } from "./styles";

export default function Register() {
  return (
    <Background>
      <Header>
        <Title>Login</Title>
      </Header>
      <LoginForm />
    </Background>
  );
}
