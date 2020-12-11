import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import { getNowPlaying, getPopular } from "../../actions/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const MovieList = (props) => {
  const { nowPlaying, popular } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={3}></Grid>
        {nowPlaying[0] ? (
          <>
            {nowPlaying[0].results.map((movie) => (
              <Grid item xs={12} md={4} spacing={12}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </>
        ) : (
          <div></div>
        )}
      </Grid>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    user: state.user,
    nowPlaying: state.nowPlaying,
    popular: state.popular
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

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
