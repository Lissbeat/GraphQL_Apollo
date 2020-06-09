import * as React from "react";

export interface CinemaDetails_cinema_movies{
    id:string; 
    movie_name: string; 
    genre:string; 
    cinema: CinemaDetails_cinema[] | null;
}
  export interface CinemaDetails_cinema {
    id: string;
    cinema_name: string;
    description: string;
    location:string; 
    open: string;
    close: string;
    movies: CinemaDetails_cinema_movies[] | null;
  }
  


  export interface CinemaDetails {
    cinema: CinemaDetails_cinema | null;
  }

  export interface CinemasDetails {
    cinemas: CinemaDetails_cinema [] | null;
  }


  export interface CinemaVariables {
    cinemaId: any; 
  }