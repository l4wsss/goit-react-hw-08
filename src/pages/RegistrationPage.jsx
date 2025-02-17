import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { registerThunk } from "../redux/auth/operations";
import { useDispatch } from "react-redux";

const RegistrationPage = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <h2>Login</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="flex flex-col">
          <label className="flex flex-col">
            <span>Name</span>
            <Field
              name="name"
              className="p-2 border-1 border-black shadow-md rounded-md"
            />
          </label>
          <label className="flex flex-col">
            <span>Email</span>
            <Field
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
          <button
            type="submit"
            className="px-4 py-2 shadow-2xl rounded-md bg-teal-400 cursor-pointer hover:bg-teal-500 transition-all duration-300"
          >
            Register
          </button>
          <p>
            You already have account?
            <Link className="text-teal-500" to="/login">
              Login!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
