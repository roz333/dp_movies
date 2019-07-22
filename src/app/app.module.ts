import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { moviesListReducer } from './shared/store/movies.reducers';
import { MoviesService } from './shared/service/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movie/movie.component';
import { MoviemeService } from './shared/service/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ moviesList: moviesListReducer })
  ],
  exports: [MoviesComponent, MovieComponent],
  providers: [MoviesService, MoviemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
