import { gql } from "apollo-server";
//define schema with SDL language 
export const MovieSchema =  gql`
type Query{
#.......all movies, 
    movies: [Movie!]
#.......movie by id 
    movie(id: ID!): Movie!
}

type Mutation{
    addMovie(
    cinemaId: ID!
    movie_name: String!
    genre: String!
    description: String
     ): Movie!

    editMovie(movieId: ID!
    movie_name: String!
    genre: String!
    description: String): Movie!
    deleteMovie(movieId: ID!): Movie!
    
}
 type Movie {
    id: ID!
    movie_name: String!
    genre: String!
    description: String
    cinema: Cinema!
   
}
`;