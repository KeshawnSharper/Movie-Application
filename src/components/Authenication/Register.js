import React, { Component } from "react";
import "./Register.css";
import Facebook from "../Facebook";
import Google from "../GoogleAuth/Google";
import { Link } from "react-router-dom";
export default class Register extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="login-box">
        <h2 style={{ color: "white" }}>Register</h2>
        <form>
          <div className="user-box">
            <input type="text" name required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="text" name required />
            <label>Email</label>
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
            Register
          </a>

          <div style={{ display: "inline-flex" }}></div>
        </form>
        <br />

        <h2>
          <Link style={{ color: "white", textDecoration: "none" }} to="/login">
            Login here
          </Link>
        </h2>
      </div>
    );
  }
}
