import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Img1 from "../images/skycrypto.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function loginUser() {
    try {
      if (!email || !password) {
        setErrorMessage("Email and password are required!");
      } else {
        const userData = {
          email: email,
          password: password,
        };
        const response = await axios.post("http://localhost:4000/login", userData);

        console.log("Login Response:", response.data);

        if (response.data.success) {
          alert("Login successful!");

          setTimeout(() => {
            window.location.href = "/home";
          }, 1);
        } else {
          setErrorMessage("Incorrect email or password");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  return (
    <div style={{ backgroundColor: "rgb(12, 11, 11)" }}>
      <section className="h-100 gradient-form" style={{ backgroundColor: "rgb(12, 11, 11)" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100" style={{ backgroundColor: "rgb(12, 11, 11)" }}>
            <div className="col-xl-10">
              <div className="card rounded-3 text-black" style={{ backgroundColor: "rgb(12, 11, 11)" }}>
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4" style={{ backgroundColor: "rgb(12, 11, 11)" }}>
                      <div className="text-center">
                        <img src={Img1} style={{ width: '185px' }} alt="logo" />
                        <h4 style={{ color: "white" }} className="mt-1 mb-5 pb-1">
                          Where Innovation Meets Opportunity in the World of Digital Assets
                        </h4>
                      </div>
                      <form>
                        <p style={{ color: "white" }}>Please login to your account</p>
                        <div className="form-outline mb-4">
                          <input type="email" id="form2Example11" className="form-control" placeholder="Phone number or email address" required onChange={(e) => setEmail(e.target.value)} />
                          <label style={{ color: "white" }} className="form-label" htmlFor="form2Example11">
                            Username
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example22" className="form-control" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)} />
                          <label style={{ color: "white" }} className="form-label" htmlFor="form2Example22">
                            Password
                          </label>
                        </div>
                        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button style={{ width: "300px" }} className="btn btn-warning" type="button" onClick={loginUser}>
                            Log in
                          </button>
                          <a style={{ color: "white" }} className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p style={{ color: "white" }} className="mb-0 me-2">
                            Don't have an account?
                          </p>
                          <Link to={"/register"}>
                            <button style={{ marginLeft: "5px" }} type="button" className="btn btn-outline-warning">
                              Create new
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">Unleash the Power of Possibility – Elevate Your Finances, Transform Your Future.<br/><br/> Welcome to SkyCypto</h4>
                      <p style={{ fontSize: "14px" }} className="small mb-0">
                        Step into the future of finance with SkyCrpto. As you enter our secure gateway, you're not just logging in; you're unlocking a world of endless possibilities. Your journey begins here, where cutting-edge technology meets seamless user experience. Trust in our robust security measures as you navigate the exciting realm of digital assets. Welcome to the heart of innovation – your portal to the next era of financial freedom.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
