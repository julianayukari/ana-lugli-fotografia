import React, { useState } from "react";
import axios from 'axios';

export default function Register() {
  const [usuario, set_usuario] = useState("");
  const [senha, set_senha] = useState("");
  const [confsenha, set_confsenha] = useState("");

  async function register(){
    try {
        const response =  await axios.post('https://reqres.in/api/users', {
            email: usuario,
            password: senha
        })
        console.log(response);

    } catch (error) {
        console.error(error);
    }
}
  
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

      <button onClick={() => register()}>
        Cadastrar
      </button>
      
    </div>
  );
}
