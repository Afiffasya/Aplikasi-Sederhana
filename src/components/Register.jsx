import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import login from "./assets/img/login.png";
import "../components/components.css";
import Footer from "./Footer";

const registrationSchema = Yup.object().shape({
  profileName: Yup.string().required("Profile Name is required"),
  username: Yup.string().required("User Name is required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});

const Register = () => {
  const initialValues = {
    profileName: "",
    username: "",
    password: "",
  };
  const onSubmit = (values, { setSubmitting }) => {
    axios
      .post("http://159.223.57.121:8090/auth/register", values)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setSubmitting(false);
      });
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
            <h3 className="fw-bold judul">Register</h3>
            <Formik
              initialValues={initialValues}
              validationSchema={registrationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group mb-3">
                    <label htmlFor="profileName">Profile Name</label>
                    <div className="col-sm-15">
                      <Field
                        type="text"
                        name="profileName"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="profileName"
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="username">User Name</label>
                    <div className="col-sm-15">
                      <Field
                        type="text"
                        name="username"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <div className="col-sm-15">
                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="back-color mb-3 w-100"
                  >
                    Submit
                  </button>
                  <div className="text-center text-capitalize">
                    Already have account? <a href="/">Login</a>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
