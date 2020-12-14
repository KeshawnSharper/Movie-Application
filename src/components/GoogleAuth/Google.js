import React from "react";
import GoogleLogin from "react-google-login";
import firebase from "./config";

export default class Google extends React.Component {
  // The component's Local state.
  constructor(props) {
    super(props);
  }

  responseGoogle = (response) => {
    this.props.SubmitGoogleUser(response);
  };
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="548923169595-ok07s9i73hrkmjbm8d5fek356gkjjru7.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}
