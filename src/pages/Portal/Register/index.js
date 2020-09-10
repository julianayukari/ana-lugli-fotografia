import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Creators as UserActions } from "../../../store/ducks/users";

export default function Register() {
  const [usuario, set_usuario] = useState("");
  const [senha, set_senha] = useState("");
  const [confsenha, set_confsenha] = useState("");

  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  return (
    <div className="user">
      <h1>Registro</h1>

      <p>
        Username:
        <input
          type="text"
          value={usuario}
          onChange={(ev) => set_usuario(ev.target.value)}
        />
      </p>

      <p>
        Senha:
        <input
          type="text"
          value={senha}
          onChange={(ev) => set_senha(ev.target.value)}
        />
      </p>

      <p>
        Confirmar Senha:
        <input
          type="text"
          value={confsenha}
          onChange={(ev) => set_confsenha(ev.target.value)}
        />
      </p>

      <button onClick={() => dispatch(UserActions.addUser(usuario, senha))}>
        Cadastrar
      </button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}
