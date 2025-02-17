import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginThunk } from "../redux/auth/operations";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <h2>Login</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className="flex flex-col">
          <label className="flex flex-col">
            <span>Email</span>
            <Field
              type="email"
              name="email"
              className="p-2 border-1 border-black shadow-md rounded-md"
            />
          </label>
          <label className="flex flex-col">
            <span>Password</span>
            <Field
              type="password"
              name="password"
              className="p-2 border-1 border-black shadow-md rounded-md"
            />
          </label>
          <button type="submit">Login</button>
          <p>
            You do not have account?{" "}
            <Link to="/register">Lets create one!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
