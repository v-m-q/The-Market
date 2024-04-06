import * as yup from 'yup'

const LoginShema = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("this field is required"),
  password: yup
    .string()
    .required("this field is required"),
});

export default LoginShema;
