import React, { useEffect } from "react";
import "./styles.css";
import Facebook from "./components/Facebook";
import Google from "./components/GoogleAuth/Google";
import Home from "./components/Home/Home";
import {
  getNowPlaying,
  getTopRated,
  getPopular,
  getUpcoming
} from "./actions/actions";
import { connect } from "react-redux";
import Loader from "./components/Loader/Loader";
function App(props) {
  useEffect(() => {
    props.getNowPlaying();
    props.getPopular();
    props.getUpcoming();
    props.getTopRated();
  }, []);
  return (
    <div className="App">
      {!props.nowPlaying ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Home />
          <Google />
          <Facebook />
        </>
      )}
    </div>
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
