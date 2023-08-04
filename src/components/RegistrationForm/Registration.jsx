import React from "react";
import "./registration.css";
import { TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Register() {
  const navigate = useNavigate();
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    role: "",
    password: "",
    confirmpassword: "",
  };

  const roleList = [
    { id: 2, name: "buyer" },
    { id: 3, name: "seller" },
  ];

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    role: Yup.string().required("Role is required"),
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password must contain at least 5 characters"),
    confirmpassword: Yup.string()
      .required("Confirm password is required")
      .oneOf(
        [Yup.ref("password"), null],
        "Password and Confirm Password must match"
      ),
  });

  const onSubmit = (values) => {
    // Implement your submit logic here
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <h1>Registration Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <TextField
            id="firstname"
            name="firstname"
            label="First Name"
            variant="outlined"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
          />
          <TextField
            id="lastname"
            name="lastname"
            label="Last Name"
            variant="outlined"
            value={formik.values.lastname}
            onChange={formik.handleChange}
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
          />
        </div>
        <div className="form-row">
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
          <TextField
            id="role"
            name="role"
            label="Role"
            variant="outlined"
            value={formik.values.role}
            onChange={formik.handleChange}
            error={formik.touched.role && Boolean(formik.errors.role)}
            helperText={formik.touched.role && formik.errors.role}
          />
        </div>
        <div className="form-row">
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
          <TextField
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            label="Confirm Password"
            variant="outlined"
            value={formik.values.confirmpassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmpassword &&
              Boolean(formik.errors.confirmpassword)
            }
            helperText={
              formik.touched.confirmpassword && formik.errors.confirmpassword
            }
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <span className="login-link">
          <Link to="/login">login</Link>{" "}
        </span>
      </form>
    </>
  );
}
export default Register;
