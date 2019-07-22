
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interface/movie';
import { Subscriber, forkJoin } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable()
export class MoviesService {

  private apikey: string = "b9623c5efd385b4d724109978e734e4e";
  private urlMoviedb: string = "https://api.themoviedb.org/3";
  private urlImage = 'https://image.tmdb.org/t/p/w300';

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<any> {

    return forkJoin([
      this.httpClient.get('http://www.omdbapi.com/?i=tt1466459&apikey=8d1f9eb3'),
      this.httpClient.get('http://www.omdbapi.com/?i=tt1466559&apikey=8d1f9eb3'),
      this.httpClient.get('http://www.omdbapi.com/?i=tt0468559&apikey=8d1f9eb3'),
      this.httpClient.get('http://www.omdbapi.com/?i=tt0459559&apikey=8d1f9eb3'),
      this.httpClient.get('http://www.omdbapi.com/?i=tt0496559&apikey=8d1f9eb3'),
      this.httpClient.get('http://www.omdbapi.com/?i=tt0466659&apikey=8d1f9eb3'),
      this.httpClient.get('http://www.omdbapi.com/?i=tt0436659&apikey=8d1f9eb3'),
      this.httpClient.get('http://www.omdbapi.com/?i=tt0435659&apikey=8d1f9eb3'),
      this.httpClient.get('http://www.omdbapi.com/?i=tt0479659&apikey=8d1f9eb3'),
      this.httpClient.get('http://www.omdbapi.com/?i=tt0445659&apikey=8d1f9eb3'),
      this.httpClient.get('http://www.omdbapi.com/?i=tt0043128&apikey=8d1f9eb3')
    ]);
  }

  // getPopularMovies() {
  //   let url = `${this.urlMoviedb}/discover/movie?sort_by=populary.desc&api_key=${this.apikey}`;

  //   return this.httpClient.get(url);
  // }
}