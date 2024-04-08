import { Phone } from "@mui/icons-material";
import * as yup from "yup";

const passwordvalidator = {
  regex:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
  message:
    "Password must contain at least one uppercase, one lowercase, one digit, and one special character",
};
const nameValidator = {
  regex: /^[a-zA-Z]{3,}$/,
  message: "name must contain only letters",
};
const addressValidator = {
  regex: /^[a-zA-Z0-9\s\-\,\\.\']+$/,
  message: "please enter a valid address",
};

const phoneValidator = {
  regex: /^01[0-2]{1}[0-9]{8}$/,
  message: "Phone number must be a valid Egyptian mobile number",
};
const UpdateProfileSchema = yup.object().shape({
  email: yup
    .string()
    .email("please enter a valid email"),
    password: yup
    .string()
    .matches(passwordvalidator.regex, { message: passwordvalidator.message })
    .min(8, { message: "Password should be at least 8 characters" })
    .max(16, { message: "the maximum number of characters is 16" }),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  first_name: yup
    .string()
    .matches(nameValidator.regex, { message: nameValidator.message })
    .min(3, { message: " name must be at least 3 characters" }),
  last_name: yup
    .string()
    .matches(nameValidator.regex, { message: nameValidator.message })
    .min(3, { message: " name must be at least 3 characters" }),
  address: yup
    .string()
    .matches(addressValidator.regex, { message: addressValidator.message }),
  phone: yup
    .string()
    .matches(phoneValidator.regex, { message: phoneValidator.message })
    .max(11),
});
    
export default UpdateProfileSchema;
