import React from "react";
import GoogleLogin from "react-google-login";
import firebase from "./config";

export default class Google extends React.Component {
  // The component's Local state.
  responseGoogle = (response) => {
    console.log(response.profileObj);
  };
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="548923169595-ok07s9i73hrkmjbm8d5fek356gkjjru7.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}
