import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Title } from "./styles";

function WebPage() {
  const history = useHistory();
  return (
    <Container>
      <Title>Webpage ainda em desenvolvimento</Title>
      <button onClick={() => history.push("/Portal")}>Acessar Portal</button>
    </Container>
  );
}

export default WebPage;
