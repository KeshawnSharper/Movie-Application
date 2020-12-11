import React, { useEffect } from "react";
import "./styles.css";
import Facebook from "./components/Facebook";
import Google from "./components/GoogleAuth/Google";
import Home from "./components/Home/Home";
import { getNowPlaying, getPopular } from "./actions/actions";
import { connect } from "react-redux";

function App(props) {
  useEffect(() => {
    props.getNowPlaying();
    props.getPopular();
  }, []);
  return (
    <div className="App">
      <Home />
      <Google />
      <Facebook />
    </div>
  );
}
function mapStateToProps(state) {
  return {
    user: state.user,
    nowPlaying: state.nowPlaying
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getNowPlaying: () => {
      dispatch(getNowPlaying());
    },
    getPopular: () => {
      dispatch(getPopular());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
