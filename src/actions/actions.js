import axios from "axios";

export function getNowPlaying() {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=bab5bd152949b76eccda9216965fc0f1&language=en-US&page=1`
      )
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_NOW_PLAYING", nowPlaying: res.data });
      });
  };
}

export function getPopular() {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=bab5bd152949b76eccda9216965fc0f1&language=en-US&page=1`
      )
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_POPULAR", popular: res.data });
      });
  };
}
