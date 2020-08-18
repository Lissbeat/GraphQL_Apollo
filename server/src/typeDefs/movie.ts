import { gql } from "apollo-server";
//define schema with SDL language
export const MovieSchema = gql`
  type Query {
    #.......all movies,
    movies: [Movie!]
    #.......movie by id
    movie(id: ID!): Movie!
  }
  #.......add a new movie, connected to a cinema
  type Mutation {
    addMovie(
      cinemaId: ID!
      movie_name: String!
      genre: String!
      description: String
    ): Movie!

    #.......edit a movie by a id
    editMovie(
      movieId: ID!
      movie_name: String!
      genre: String!
      description: String
    ): Movie!
    
    #.......delete a movie by id
    deleteMovie(movieId: ID!): Movie!
  }
  #.......Movie type
  #.......id, movie_name and genre can't be "null"
  type Movie {
    id: ID!
    movie_name: String!
    genre: String!
    # .......decription is optional, it can be "null"
    description: String
    #.......connected to one cinema
    cinema: Cinema!
  }
`;
