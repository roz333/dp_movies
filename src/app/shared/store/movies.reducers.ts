
import * as MoviesListActions from './movies.actions';


const initialState = {
  movies: []
};

export function moviesListReducer(state = initialState, action: MoviesListActions.MoviesListActions) {
  switch (action.type) {
    case MoviesListActions.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case MoviesListActions.ADD_MOVIES:
      return {
        movies: [...action.payload]
      };
    default:
      return state;
  }
}
