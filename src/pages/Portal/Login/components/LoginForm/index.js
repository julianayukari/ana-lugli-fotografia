import { useFormik } from "formik";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import api from "../../../../../services/login";
import { FormContainer } from "./styles";

function LoginForm() {
  const history = useHistory();

  const [errorMessage, setErrorMessage] = useState();
  const [alertType, setAlertType] = useState("");
  const [show, setShow] = useState(false);

  const schema = yup.object({
    email: yup
      .string()
      .required("Este campo é obrigatório")
      .email("Preencha um email válido!"),
    password: yup.string().required("Este campo é obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log(values);
      api
        .post("/login", {
          email: values.email,
          password: values.password,
        })
        .then(function (response) {
          history.push("/Portal");
        })
        .catch(function (error) {
          setAlertType("danger");
          setShow(true);
          setErrorMessage(error.message);
        });
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <FormContainer>
          <div>
            <Form.Group controlId="validationFormikEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="password"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  isInvalid={!!formik.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 10,
              paddingBottom: 30,
            }}
          >
            <Form.Group
              controlId="validationFormikPassword"
              style={{ width: "100%" }}
            >
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="text"
                name="password"
                placeholder="Senha"
                value={formik.values.password}
                onChange={formik.handleChange("password")}
                isInvalid={!!formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button style={{ width: "100%" }} type="submit">
              Entrar
            </Button>
          </div>
        </FormContainer>
      </Form>
      {show && (
        <Alert
          variant={alertType}
          dismissible
          show={show}
          onClose={() => {
            setShow(false);
            setErrorMessage(null);
          }}
        >
          <Alert.Heading>
            {errorMessage !== null ? "Erro" : "Sucesso"}
          </Alert.Heading>
          {errorMessage !== null && "Não foi possível concluir o login!"}
          {errorMessage !== null && (
            <>
              <hr />
              {errorMessage !== null && errorMessage}
            </>
          )}
        </Alert>
      )}
    </>
  );
}

export default LoginForm;
