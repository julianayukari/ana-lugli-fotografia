import { useFormik } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as yup from "yup";

function RegisterForm() {
  const schema = yup.object({
    email: yup
      .string()
      .required("Este campo é obrigatório")
      .email("Preencha um email válido!"),
    password: yup.string().required("Este campo é obrigatório"),
    confirmPassword: yup.string().required("Este campo é obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Row>
        <Form.Group controlId="validationFormikEmail">
          <Form.Label>Email</Form.Label>

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
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group controlId="validationFormikPassword">
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
        <Form.Group controlId="validationFormikConfirmPassword">
          <Form.Label style={{ marginLeft: 10 }}>Confirmar Senha</Form.Label>
          <Form.Control
            style={{ marginLeft: 10 }}
            type="text"
            placeholder="Confirmar senha"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange("confirmPassword")}
            isInvalid={!!formik.errors.confirmPassword}
          />

          <Form.Control.Feedback style={{ marginLeft: 10 }} type="invalid">
            {formik.errors.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>

      <Button type="submit">Finalizar cadastro</Button>
    </Form>
  );
}

export default RegisterForm;
