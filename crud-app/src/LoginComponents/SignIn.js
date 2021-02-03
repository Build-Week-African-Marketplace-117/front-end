import React, { useState } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import './signIn.css';


export default function SignIn() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    axiosWithAuth()
  .post('/users/login', user)
  .then(res => {
    localStorage.setItem('token', res.data.payload);
    history.push('/protected')
  })
  .catch(err => {
    console.log('POST ERROR:', err)
  })
  setInput(user)
}

    const user = {
      username: input.username,
      password: input.password,
    };
/*
    axios
      .post("https://reqres.in/api/users", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  */

  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>
                  <form onSubmit={submit}>
                    <div className="form-label-group">
                      <input
                        onChange={handleChange}
                        type="text"
                        name="username"
                        id="inputUserName"
                        className="form-control"
                        placeholder="Username"
                        required
                        autofocus
                      />
                      <label for="inputUserName">Username</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                      <label for="inputPassword">Password</label>
                    </div>

                    <button
                      className="btn btn-lg btn-warning btn-block btn-login text-uppercase font-weight-bold mb-2"
                      type="submit"
                    >
                      Sign in
                    </button>
                    <div className="text-center">
                      <h4 className="small">New to African Marketplace?</h4>
                      <Link to="/sign-up">
                        <p className="small">Sign Up</p>
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
