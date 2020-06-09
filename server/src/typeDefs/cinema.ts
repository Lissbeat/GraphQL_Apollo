import { gql } from "apollo-server";

export const CinemaSchema = gql`
  type Query {
    #.......all cinemas
    cinemas:[Cinema!]
    #.......cinema by id
    cinema(id:ID!):Cinema!
  }
  type Mutation{
    addCinema(cinema_name: String! 
    description: String
    location: String
    open: String!
    close: String!): Cinema!

    editCinema(
    cinemaId: ID!   
    cinema_name: String! 
    description: String
    location: String
    open: String!
    close: String!): Cinema!

    deleteCinema(cinemaId: ID!): Cinema!
} 
  type Cinema{
    id: ID!
    cinema_name: String!
    # decription and location is optional 
    description: String
    location: String
    open: String!
    close: String!
    movies: [Movie!]
  
  }
`;