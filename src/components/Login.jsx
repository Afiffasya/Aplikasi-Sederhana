import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import login from "./assets/img/login.png";
import "../components/components.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://159.223.57.121:8090/auth/login",
        { username, password }
      );
      console.log(response.data);
      const { id, profileName, token } = response.data.data;
      localStorage.setItem(
        "userData",
        JSON.stringify({ id, username, profileName, token })
      );
      window.location.assign("/dashboard");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center log">
          <div className="col-md-6 sm-6">
            <img
              src={login}
              className="img-fluid rounded-start radius"
              alt="ilustrasi"
            />
          </div>
          <div className="col-md-6 kolom-login">
            <h3 className="fw-bold judul">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="username">Username:</label>
                <div className="col-sm-15">
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password:</label>
                <div className="col-sm-15">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>
              </div>
              <button className="back-color mb-3 w-100" type="submit">
                Login
              </button>
              <div className="text-center text-capitalize">
                Don't have account? <a href="/register">Register</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
