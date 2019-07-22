import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from '../shared/service/movies.service';
import { Store } from '@ngrx/store';
import { Movie } from '../shared/interface/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {



  @Input() i: number;


  public clickedflag: boolean;
  movies: any;
  moviesListState: any;
  selectedMovie: any;

  constructor(private moviesDataService: MoviesService,
              private store: Store<{ moviesList: { movies: Movie[] } }>) { }

  ngOnInit() {
    this.clickedflag = false;

    this.store.select('moviesList').subscribe(stateOfmovies => {
      this.movies = stateOfmovies.movies;
      this.selectedMovie = this.movies[this.i];

    });
}

  clickedId() {
    this.clickedflag =true;
  }



}
