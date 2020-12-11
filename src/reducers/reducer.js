import initState from "./initState";

export const StoreReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_NOW_PLAYING":
      return {
        ...state,
        nowPlaying: [...state.nowPlaying, action.nowPlaying]
      };
    case "GET_POPULAR":
      return {
        ...state,
        popular: [...state.popular, action.popular]
      };
    case "GET_LATEST":
      return {
        ...state,
        latest: [...state.latest, action.latest]
      };
    case "GET_TOP_RATED":
      return {
        ...state,
        topRated: [...state.topRated, action.topRated]
      };
    case "GET_UPCOMING":
      return {
        ...state,
        upcoming: [...state.upcoming, action.upcoming]
      };
    default:
      return initState;
  }
};
