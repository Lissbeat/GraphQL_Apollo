import gql from "graphql-tag";

//create a movie
export const CREATE_MOVIE = gql`
  mutation AddMovie($movie_name: String!, $cinemaId: ID!, $description: String!, $genre:String! ) {
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
    }
  }
`;
