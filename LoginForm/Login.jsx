import React from "react";
import "./login.css";
import { TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must contain at least 5 characters"),
  });

  const onSubmit = (values) => {
    // Implement your login logic here
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          id="email"
          name="email"
          label="Email Address"
          variant="outlined"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br />
        <br />
        <TextField
          type="password"
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <span>
          <Link to="/registration">Register</Link>
        </span>
      </form>
    </>
  );
}

export default Login;
