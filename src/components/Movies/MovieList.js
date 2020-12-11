import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import {
  getNowPlaying,
  getTopRated,
  getPopular,
  getUpcoming
} from "../../actions/actions";

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
  const { nowPlaying, latest, popular, movieList, upcoming, topRated } = props;
  const classes = useStyles();
  console.log(movieList);
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={3}></Grid>
        {movieList === "nowPlaying" ? (
          <>
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
          </>
        ) : movieList === "popular" ? (
          <>
            {popular[0] ? (
              <>
                {popular[0].results.map((movie) => (
                  <Grid item xs={12} md={4} spacing={12}>
                    <MovieCard movie={movie} />
                  </Grid>
                ))}
              </>
            ) : (
              <div></div>
            )}
          </>
        ) : movieList === "upcoming" ? (
          <>
            {upcoming[0] ? (
              <>
                {upcoming[0].results.map((movie) => (
                  <Grid item xs={12} md={4} spacing={12}>
                    <MovieCard movie={movie} />
                  </Grid>
                ))}
              </>
            ) : (
              <div></div>
            )}
          </>
        ) : movieList === "topRated" ? (
          <>
            {topRated[0] ? (
              <>
                {topRated[0].results.map((movie) => (
                  <Grid item xs={12} md={4} spacing={12}>
                    <MovieCard movie={movie} />
                  </Grid>
                ))}
              </>
            ) : (
              <div></div>
            )}
          </>
        ) : movieList === "search" ? (
          <>
            {search[0] ? (
              <>
                {search[0].results.map((movie) => (
                  <Grid item xs={12} md={4} spacing={12}>
                    <MovieCard movie={movie} />
                  </Grid>
                ))}
              </>
            ) : (
              <div></div>
            )}
          </>
        ) : (
          <></>
        )}
      </Grid>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    user: state.user,
    nowPlaying: state.nowPlaying,
    popular: state.popular,
    upcoming: state.upcoming,
    topRated: state.topRated
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getNowPlaying: (id) => {
      dispatch(getNowPlaying());
    },
    getPopular: (id) => {
      dispatch(getPopular());
    },
    getUpcoming: (id) => {
      dispatch(getUpcoming());
    },
    getTopRated: (id) => {
      dispatch(getTopRated(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
