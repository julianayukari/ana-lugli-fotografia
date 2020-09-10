import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  addUser: ["email", "password"],
});

const INITIAL_STATE = {
  data: [
    {
      id: 0,
      email: "teste@email.com",
      password: 123,
    },
  ],
};

const add = (state = INITIAL_STATE, action) => {
  console.log(action);

  return {
    data: [
      ...state.data,
      {
        id: Math.random(),
        email: action.email,
        password: action.password,
      },
    ],
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.ADD_USER]: add,
});
