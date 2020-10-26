import React from "react";
import { useHistory } from "react-router-dom";
import Banner from "./sections/Banner";
import { Container, Title } from "./styles";

function WebPage() {
  const history = useHistory();
  return (
    <Container>
      <Banner />
      <Title>Webpage ainda em desenvolvimento</Title>
      <button onClick={() => history.push("/ana-lugli-fotografia/Portal")}>
        Acessar Portal
      </button>
    </Container>
  );
}

export default WebPage;
