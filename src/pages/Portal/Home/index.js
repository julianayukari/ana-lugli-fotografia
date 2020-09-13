import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../../services/githubUsers";
import UsersListItem from "./components/UsersListItem";
import {
  Background,
  Body,
  ErrorMessage,
  Header,
  Input,
  InputAndButtonContainer,
  SearchContainer,
  Title,
} from "./styles";

function Home() {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  function searchUsers() {
    api({
      method: "get",
      url: `/users?q=${inputValue}`,
      responseType: "json",
    }).then(function (response) {
      setUsers(response.data.items);
    });
  }

  function handleButtonPress() {
    if (inputValue.length === 0) {
      setErrorMessage("Digite pelo menos 3 caracteres para buscar!");
    } else if (inputValue.length < 3) {
      setErrorMessage("Digite pelo menos 3 caracteres para buscar!");
    } else {
      setErrorMessage(null);
      searchUsers();
    }
  }

  function logout() {
    localStorage.clear();
    history.push("/ana-lugli-fotografia/Login");
  }
  const user = localStorage.getItem("email");

  return (
    <Background>
      <Header>
        <Title>Projeto 1 - Github Users </Title>
      </Header>
      <Body>
        <h5>Hello {user} !</h5>
        <SearchContainer>
          <p>Digite o nome de algum usuário do GitHub:</p>
          <InputAndButtonContainer>
            <Input
              type="text"
              name="search"
              id="search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              type="primary"
              style={{ marginLeft: 10 }}
              onClick={() => handleButtonPress()}
            >
              Buscar usuários
            </Button>
          </InputAndButtonContainer>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </SearchContainer>

        {users.length > 0 && (
          <ul>
            {users.map((user, index) => (
              <UsersListItem user={user} />
            ))}
          </ul>
        )}
      </Body>
      <Button type="primary" style={{ margin: 30 }} onClick={() => logout()}>
        sair
      </Button>
    </Background>
  );
}

export default Home;
