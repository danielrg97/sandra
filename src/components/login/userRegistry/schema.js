import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .required("El nombre es requerido")
    .max(100, "El campo tiene un máximo de 100 caracteres"),
  identification: Yup.string()
    .required("La identificación es requerido")
    .max(100, "El campo tiene un máximo de 100 caracteres"),
  email: Yup.string()
    .email('El correo debe ser válido')
    .required("El e-mail es requerido")
    .max(250, "El campo tiene un máximo de 250 caracteres"),
  enterprise: Yup.string()
    .max(100, "El campo tiene un máximo de 100 caracteres"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .max(50, "La contraseña no puede exceder los 50 caracteres"),
  passwordConfirm: Yup.string().required("Es requerido confirmar la contraseña")
    .oneOf([Yup.ref("password"), null],"Las contraseñas deben coincidir"),
});