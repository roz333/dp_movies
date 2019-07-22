import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../shared/interface/movie';
import { Store } from '@ngrx/store';
import { MoviesService } from '../shared/service/movies.service';
import * as MoviesListActions from '../shared/store/movies.actions';
import { Observable } from 'rxjs';
import { MoviemeService } from '../shared/service/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit, OnDestroy {
  public moviesListState: Observable<{ movies: Movie[] }>;
  private movies: Movie[];
  private flagApp: boolean;
  public selected_movie: object;
  public show: boolean;
  private dataRefresher: any;



  constructor(private moviesDataService: MoviesService, private movieService: MoviemeService,
              private store: Store<{ moviesList: { movies: Movie[] } }>) {
  }

  ngOnInit() {
    this.flagApp = false;
    this.show = false;
    this.getMovies(true);
    this.refreshData();
  }

  getMovies(setFlag) {
      this.moviesDataService.getMovies().subscribe(data => {
      this.movies = data;
      console.log('movies' , this.movies);
      this.store.dispatch(new MoviesListActions.Add_Movies(this.movies));
      this.moviesListState = this.store.select('moviesList');
      if (setFlag) {
        this.flagApp = true;
      }
    });
  }
  refreshData() {
    this.dataRefresher =
      setInterval(() => {
        this.getMovies(false);
      }, 30000);
  }
  public sortByName(arrr): void {
    this.store.select('moviesList').subscribe(stateOfmovies => {
      stateOfmovies.movies.sort((a, b) => {
        return a.Title < b.Title ? -1 : 1;
      });
    });
  }

  public filterSrarch(e: any) {
    const movieName = e.target.value;
    this.store.select('moviesList').subscribe(stateOfmovies => {
      if (movieName) {
        stateOfmovies.movies = this.movies.filter(movie =>
          movie.Title.toLowerCase().indexOf(movieName) !== -1);
      } else {
        stateOfmovies.movies = this.movies;
      }
    });
  }

  public clickedMovie(movie) {
    this.selected_movie = movie;
    this.show = !this.show;
  }

  private cancelPageUpdate() {
    if (this.dataRefresher) {
      clearInterval(this.dataRefresher);
    }
  }

  ngOnDestroy() {
    this.cancelPageUpdate();
  }

}
