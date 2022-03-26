import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();

  let handleSubmit = async (values) => {
    let res = await axios.post("https://beatwithmusic.herokuapp.com/users/signup", values);
    if (res.data.statusCode === 200) {
      navigate("/login");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastname: "",
      password: "",
      cpassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      password: Yup.string()
        .min(8, "Password is too short")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
        .required("No Password Provided"),
      cpassword: Yup.string()
        .min(8, "Password is too short")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("No Password Provided"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div className="signup">
      <form
        className="signup-content"
        style={{marginTop:"70px"}}
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <div
          className="signup_body"
          style={{
            height: "830px",
            width: "650px",
            backgroundColor: "#eeeeee",
            color: "black",
            borderRadius: "15px",
          }}
        >
          <h3 className="text-center heading mt-3">
            &nbsp;
            <span style={{ textDecoration: "none", color: "black" }}>
              <h1>Beat With Music</h1>
            </span>
          </h3>
          <h6 className="text-center mb-5">Create Beat with music account</h6>
          <input
            className="form-control shadow-none firstname_icon"
            style={{ margin: "0 auto", width: "70%", height: "7%" }}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.firstName}
          ></input>
          {formik.touched.firstName && formik.errors.firstName ? (
            <div style={{ color: "red", marginLeft: "85px" }}>
              {formik.errors.firstName}
            </div>
          ) : null}
          <br></br>
          <input
            className="form-control shadow-none lastname_icon"
            style={{ margin: "0 auto", width: "70%", height: "7%" }}
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last Name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastname}
          ></input>
          {formik.touched.lastname && formik.errors.lastname ? (
            <div style={{ color: "red", marginLeft: "85px" }}>
              {formik.errors.lastname}
            </div>
          ) : null}
          <br></br>
          <input
            className="form-control shadow-none gmail_icon"
            style={{ margin: "0 auto", width: "70%", height: "7%" }}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          ></input>
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red", marginLeft: "85px" }}>
              {formik.errors.email}
            </div>
          ) : null}
          <br></br>
          <input
            className="form-control shadow-none password_icon"
            style={{ margin: "0 auto", width: "70%", height: "7%" }}
            id="password"
            name="password"
            type="password"
            placeholder="Passworrd"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          ></input>
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red", marginLeft: "85px" }}>
              {formik.errors.password}
            </div>
          ) : null}
          <br></br>
          <input
            className="form-control shadow-none confirmpassword_icon"
            style={{ margin: "0 auto", width: "70%", height: "7%" }}
            type="password"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm Passworrd"
            autocomplete="off"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.cpassword}
          ></input>
          {formik.touched.cpassword && formik.errors.cpassword ? (
            <div style={{ color: "red", marginLeft: "85px" }}>
              {formik.errors.cpassword}
            </div>
          ) : null}
          <br></br>
          <input
              className="btn-primary  form-group form-control shadow-none"
              style={{  width: "70%", height: "7%",marginLeft:"auto",marginRight:"auto" }}
              type="submit"
              value="Sign Up"
            ></input>
          <div className="text-center">
          <p classname="text-dark">
            Already have an account ?&nbsp;
            <Link to="/login" className="text-decoration-none text-dark">
              Login
            </Link>
          </p>
          </div>
          <br></br>
        </div>
      </form>
    </div>
  );
}

export default Signup;