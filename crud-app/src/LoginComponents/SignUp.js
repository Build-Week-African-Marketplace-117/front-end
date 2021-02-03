import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import './signIn.css';
import { axiosWithAuth } from "../utils/axiosWithAuth";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(4, "name must be at least 4 characters"),

  email: yup
    .string()
    .email("Must be a valid email address.")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(
      8,
      "Password must be at least 8 characters and include both numbers and letters"
    ),
});

export default function SignIn() {
  const [signUpInput, setSignUpInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [disabled, setDisabled] = useState(true);

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const setFormErrors = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  const handleChange = (event) => {
    setSignUpInput({ ...signUpInput, [event.target.name]: event.target.value });
    const { name, value } = event.target;
    setFormErrors(name, value);
  };

  const submit = (event) => {
    event.preventDefault();
    const newUser = {
      username: signUpInput.username,
      email: signUpInput.email,
      password: signUpInput.password,
    };

    axiosWithAuth()
      .post("/users/register", newUser)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    schema.isValid(signUpInput).then((valid) => setDisabled(!valid));
  }, [signUpInput]);

  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome</h3>
                  <form className="error-message" onSubmit={submit}>
                    <div className="form-label-group">
                      <input
                        onChange={handleChange}
                        type="text"
                        name="username"
                        value={signUpInput.username}
                        id="inputUserName"
                        className="form-control"
                        placeholder="Username"
                        required
                        autofocus
                      />
                      <label for="inputUserName">Username</label>
                      <p>{errors.username}</p>
                    </div>

                    <div className="form-label-group">
                      <input
                        onChange={handleChange}
                        type="email"
                        name="email"
                        value={signUpInput.email}
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email"
                        required
                        autofocus
                      />
                      <label for="inputEmail">Email</label>
                      <p>{errors.email}</p>
                    </div>

                    <div className="form-label-group">
                      <input
                        onChange={handleChange}
                        name="password"
                        value={signUpInput.password}
                        type="text"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                      <label for="inputPassword">Password</label>
                      <p>{errors.password}</p>
                    </div>

                    <button
                      className="btn btn-lg btn-warning btn-block btn-login text-uppercase font-weight-bold mb-2"
                      type="submit"
                      disabled={disabled}
                    >
                      Sign Up
                    </button>
                    <div className="text-center">
                      <h4 className="small">Already have an accout?</h4>
                      <Link to="/sign-in">
                        <p className="small">Sign In</p>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
