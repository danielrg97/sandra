import React from "react";
import { Button, Input } from "semantic-ui-react";
import { ErrorMessage, Field, Form, withFormik } from "formik";
import UserRegistrySchema from "./schema";

const FormUserRegistry = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit} className="formUserRegistry">
      <Field type="text" name="name">
        {({ field: { value, name, onBlur, onChange } }) => (
          <div>
            <Input
              className="inputUserRegistry"
              type="text"
              name={name}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              placeholder={"Ingresa tu nombre"}
            />
            <br />
            <ErrorMessage name="name" component={"div"}>
              {(message) => (
                <div>
                  <div className="ui pointing red basic label">{message}</div>
                </div>
              )}
            </ErrorMessage>
          </div>
        )}
      </Field>
      <Field type="text" name="identification">
        {({ field: { value, name, onBlur, onChange } }) => (
          <div>
            <Input
              className="inputUserRegistry"
              type="text"
              name={name}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              placeholder={"Ingresa tu numero de identificación"}
            />
            <br />
            <ErrorMessage name="identification" component={"div"}>
              {(message) => (
                <div>
                  <div className="ui pointing red basic label">{message}</div>
                </div>
              )}
            </ErrorMessage>
          </div>
        )}
      </Field>
      <Field type="text" name="email">
        {({ field: { value, name, onBlur, onChange } }) => (
          <div>
            <Input
              className="inputUserRegistry"
              type="email"
              name={name}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              placeholder={"Ingresa tu e-mail"}
            />
            <br />
            <ErrorMessage name="email" component={"div"}>
              {(message) => (
                <div>
                  <div className="ui pointing red basic label">{message}</div>
                </div>
              )}
            </ErrorMessage>
          </div>
        )}
      </Field>
      <Field type="text" name="enterprise">
        {({ field: { value, name, onBlur, onChange } }) => (
          <div>
            <Input
              className="inputUserRegistry"
              type="text"
              name={name}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              placeholder={"Ingresa el nombre de tu empresa"}
            />
            <br />
            <ErrorMessage name="enterprise" component={"div"}>
              {(message) => (
                <div>
                  <div className="ui pointing red basic label">{message}</div>
                </div>
              )}
            </ErrorMessage>
          </div>
        )}
      </Field>
      <Field type="password" name="password">
        {({ field: { value, name, onBlur, onChange } }) => (
          <div>
            <Input
              className="inputUserRegistry"
              type="password"
              name={name}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              placeholder={"Ingrese una contraseña"}
            />
            <br />
            <ErrorMessage name="password" component={"div"}>
              {(message) => (
                <div>
                  <div className="ui pointing red basic label">{message}</div>
                </div>
              )}
            </ErrorMessage>
          </div>
        )}
      </Field>
      <Field type="password" name="passwordConfirm">
        {({ field: { value, name, onBlur, onChange } }) => (
          <div>
            <Input
              className="inputUserRegistry"
              type="password"
              name={name}
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              placeholder={"Confirme la contraseña"}
            />
            <br />
            <ErrorMessage name="passwordConfirm" component={"div"}>
              {(message) => (
                <div>
                  <div className="ui pointing red basic label">{message}</div>
                </div>
              )}
            </ErrorMessage>
          </div>
        )}
      </Field>
      <Button className="buttonSubmitLogin" type="submit">
        Crear Usuario
      </Button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({ 
      name: "", 
      identification: "", 
      email: "", 
      enterprise: "", 
      password: "",
      passwordConfirm: "" }),
  validationSchema: UserRegistrySchema,
  handleSubmit: (values, { props }) => {
    props.submit(values);
  },
})(FormUserRegistry);
