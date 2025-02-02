import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

function LoginForm() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const response = await loginUser(values);
        if (response.status === 200) {
          navigate("/vote");
        } else {
          alert("Login failed");
        }
      }}
    >
      {({ errors, touched }) => (
        <Form className="space-y-4">
          <div>
            <Field
              name="username"
              type="text"
              placeholder="Username"
              className="w-full p-2 border rounded-md"
            />
            {errors.username && touched.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>
          <div>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-md"
            />
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md">
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
