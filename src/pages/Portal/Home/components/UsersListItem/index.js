import React from "react";
import { Container, Image, UserName } from "./styles";

export default function UsersListItem({ user }) {
  return (
    <Container>
      <Image src={user.avatar_url} />
      <UserName href={user.html_url} target="_blank">
        {user.login}
      </UserName>
    </Container>
  );
}
