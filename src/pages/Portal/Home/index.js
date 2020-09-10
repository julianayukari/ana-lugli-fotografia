import React from "react";
import { Body, Header, Title } from "./styles";

function Home() {
  return (
    <>
      <Header>
        <Title>Projeto 1 - Github Users </Title>
      </Header>

      <Body>
        <p>Digite o nome de algum usuário do GitHub:</p>
        <div id="search-container">
          <input type="text" name="search" id="search" value="" />
          <button>Buscar usuários</button>
        </div>

        <ul></ul>
        <h4></h4>
      </Body>
    </>
  );
}

export default Home;
