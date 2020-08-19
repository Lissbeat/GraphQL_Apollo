import gql from "graphql-tag";

//create a movie
export const CREATE_MOVIE = gql`
  mutation AddMovie($movie_name: String!, $cinemaId: ID!, $description: String, $genre:String! ) {
    addMovie(movie_name: $movie_name, cinemaId: $cinemaId, description: $description, genre: $genre ) {
      id
      movie_name
      description 
      genre
     
    }
  }
`;

export const GET_MOVIES = gql`
  query GetMovies {
    movies {
      id
      movie_name
      description 
      genre
      cinema {
        id
        cinema_name
      
      }

    }
  }
`;

export const CREATE_CINEMA = gql`
  mutation AddCinema($cinema_name: String!, $description: String, $close:String!, $open:String!) {
    addCinema(cinema_name: $cinema_name, description: $description, open: $open, close: $close ) {
      id
      cinema_name
      description 
      open 
      close
     
    }
  }
`;

export const DELETE_CINEMA = gql`
  mutation DeleteCinema($cinemaId: ID!) {
    deleteCinema(cinemaId: $cinemaId) {
      id
    
     
    }
  }
`;


export const GET_CINEMAS = gql`
  query GetAllCinemas {
    cinemas {
      id
      cinema_name
      description
      close
      open
      movies {
        id
        movie_name
        genre 
        description
      }
    }
  }
`;

