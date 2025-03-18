import * as yup from "yup";

const loginSchema = yup.object().shape({
    username: yup.string().min(5).required("Required"),
    password: yup
        .string()
        .required("Required"),
});

export default loginSchema;