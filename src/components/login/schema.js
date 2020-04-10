import * as Yup from 'yup';

 export default Yup.object().shape({
     username: Yup
                .string()
                .max(100, 'El campo solo permite 100 caraterers')
                .required('El campo es requerido'),
    password: Yup
                .string()
                .max(50, 'La contraseña no puede exceder los 50 caracteres')
                .required('La contraseña es requerida')
             })