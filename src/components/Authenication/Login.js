import React, { Component, useState } from "react";
import "./Login.css";
import Facebook from "../Facebook";
import { Link } from "react-router-dom";
import Google from "../GoogleAuth/Google";
import axios from "axios";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoogleValidated: false,
      googleUser: {}
    };
    this.SubmitGoogleUser = this.SubmitGoogleUser.bind(this);
  }

  SubmitGoogleUser = (user) => {
    this.setState({ googleUser: user });
    console.log(this.state.googleUser);
    axios
      .get(`http://localhost:5000/googleuser/${this.state.googleUser.Ca}`)
      .then((res) => {
        this.setState({ isGoogleValidated: res.data });
        console.log(this.state.isGoogleValidated);
        if (!this.state.isGoogleValidated) {
          axios
            .post(`http://localhost:5000/register`, {
              user_name:
                this.state.googleUser.profileObj.givenName +
                "_" +
                this.state.googleUser.profileObj.familyName,
              first_name: this.state.googleUser.profileObj.givenName,
              last_name: this.state.googleUser.profileObj.familyName,
              picture: this.state.googleUser.profileObj.imageUrl,
              email: this.state.googleUser.profileObj.email,
              google_id: Number(this.state.googleUser.profileObj.googleId),
              password:
                Math.random().toString(36).substring(7) +
                Math.random().toString(36).substring(7)
            })
            .then((res) => {
              axios
                .post(
                  `http://localhost:5000/loginGoogle/${Number(
                    this.state.googleUser.profileObj.googleId
                  )}`
                )
                .then((res) => console.log(res.data));
            });
        } else {
          axios
            .post(
              `http://localhost:5000/loginGoogle/${Number(
                this.state.googleUser.profileObj.googleId
              )}`
            )
            .then((res) => console.log(res.data));
        }
      });
  };

  render() {
    return (
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name required />
            <label>Password</label>
          </div>
          <a href="#">
            <span />
            <span />
            <span />
            <span />
            Login
          </a>
          <br />
          <br />
          <div style={{ display: "inline-flex" }}>
            <Google SubmitGoogleUser={this.SubmitGoogleUser} />
            <Facebook />
          </div>
          <br />
        </form>
        <br />
        <h2>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/register"
          >
            Register here
          </Link>
        </h2>
      </div>
    );
  }
}
