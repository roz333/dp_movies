import { Action } from '@ngrx/store';

import { Movie } from 'src/app/shared/interface/movie';

export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_MOVIES = 'ADD_MOVIES';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

export class Add_Movie implements Action {
  readonly type = ADD_MOVIE;

  constructor(public payload: Movie) {}
}

export class Add_Movies implements Action {
  readonly type = ADD_MOVIES;

  constructor(public payload: Movie[]) {}
}


export type MoviesListActions =
  Add_Movie |
  Add_Movies;