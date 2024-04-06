import * as yup from 'yup'

const passwordvalidator = {
  regex:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
  message:
    "Password must contain at least one uppercase, one lowercase, one digit, and one special character",
};

const LoginShema = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email")
    .required("this field is required"),
  password: yup
    .string()
    .matches(passwordvalidator.regex, { message: passwordvalidator.message })
    .min(8, { message: "Password should be at least 8 characters" })
    .max(16, { message: "the maximum number of characters is 16" })
    .required("this field is required"),
});

export default LoginShema;
