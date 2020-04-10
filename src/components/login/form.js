import React from "react";
import { Button, Input } from "semantic-ui-react";
import { ErrorMessage, Field, Form, withFormik } from "formik";
import LoginSchema from './schema';

const FormLogin = ({handleSubmit}) =>{
    return (
      <Form onSubmit={handleSubmit} className="formLogin">
        <Field type="text" name="username">
          {({ field: { value, name, onBlur, onChange } }) => (
            <div>
              <Input
                className="inputLogin"
                type="text"
                name={name}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={"Ingrese su nombre de usuario"}
              />
              <br />
              <ErrorMessage name="username" component={"div"}>
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
                className="inputLogin"
                type="password"
                name={name}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                placeholder={"Ingrese su contraseña"}
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
        <Button className="buttonSubmitLogin" type="submit">
          Ingresar
        </Button>
      </Form>
    );
}

export default withFormik({
  mapPropsToValues: () => ({ username: "" }),
  validationSchema: LoginSchema,
  handleSubmit: (values, {props}) => {
      props.submit(values);
  }
})(FormLogin);
