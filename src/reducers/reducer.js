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
    default:
      return initState;
  }
};
