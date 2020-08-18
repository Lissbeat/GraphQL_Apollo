import { gql } from "apollo-server";
//define schema with SDL language
export const CinemaSchema = gql`
  type Query {
    #.......all cinemas
    cinemas: [Cinema!]
    #.......cinema by id
    cinema(id: ID!): Cinema!
  }

  #.......add a new cinema
  type Mutation {
    addCinema(
      cinema_name: String!
      description: String
      location: String
      open: String!
      close: String!
    ): Cinema!

    #.......edit a cinema by a id
    editCinema(
      cinemaId: ID!
      cinema_name: String!
      description: String
      location: String
      open: String!
      close: String!
    ): Cinema!

    #.......delete a cinema by id
    deleteCinema(cinemaId: ID!): Cinema!
  }

  #.......Cinema type,
  #.......id, cinema_name and open, close can't be "null"
  type Cinema {
    id: ID!
    cinema_name: String!
    open: String!
    close: String!
    # decription and location is optional, it can be "null"
    description: String
    location: String
    # contains a array of type Movie
    movies: [Movie!]!
  }
`;
