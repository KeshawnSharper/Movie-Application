import React, { useEffect, useState } from "react";
import "./styles.css";
import Facebook from "./components/Facebook";
import Google from "./components/GoogleAuth/Google";
import Home from "./components/Home/Home";
import Login from "./components/Authenication/Login";
import Register from "./components/Authenication/Register";
import {
  getNowPlaying,
  getTopRated,
  getPopular,
  getUpcoming
} from "./actions/actions";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "./components/Loader/Loader";
function App(props) {
  const [registeredUser, setRegisteredUser] = useState(false);
  useEffect(() => {
    props.getNowPlaying();
    props.getPopular();
    props.getUpcoming();
    props.getTopRated();
  }, []);
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          {props.upcoming && localStorage.getItem("token") ? (
            <Redirect to="/home" />
          ) : props.upcoming && !localStorage.getItem("token") ? (
            <Redirect to="/login" />
          ) : (
            <Loader />
          )}
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <ProtectedRoute exact path="/home">
          <Register />
        </ProtectedRoute>
      </div>
    </Router>
  );
}
function mapStateToProps(state) {
  return {
    user: state.user,
    nowPlaying: state.nowPlaying,
    upcoming: state.upcoming,
    topRated: state.topRated
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getNowPlaying: () => {
      dispatch(getNowPlaying());
    },
    getPopular: () => {
      dispatch(getPopular());
    },
    getUpcoming: () => {
      dispatch(getUpcoming());
    },
    getTopRated: () => {
      dispatch(getTopRated());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
