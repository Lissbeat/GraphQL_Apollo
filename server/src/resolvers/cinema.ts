import Cinema from "../database/models/cinema";
import Movie from "../database/models/movie";

import { UserInputError, ApolloError} from "apollo-server";
import mongoose from "mongoose";


export const cinemaReslover = {
  Query: {
    //query all the cinemas
    cinemas: () => {
      return Cinema.find({}).exec();
    },
    //query cinema by id
    cinema: async (_: any, { id }: any) => {
      try {
        //check for valid mongoose id 
        if (!mongoose.Types.ObjectId.isValid(id)) {
          throw new UserInputError(id + "is not a valid ID");
        }
        //finds the queried cinema by given id, and returns it
        const cinema = await (await Cinema.findById(id));
        return cinema;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  Mutation: {
    //mutation for creating a new Cinema 
    addCinema: async (_: any, args: any) => {
      try {
        //creates a new cinema 
        const newCinema = new Cinema(args);
        //saves the newly created cinema, and returs the result
        const result = await newCinema.save();
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    deleteCinema: async (_, { cinemaId }) => {
      try {
        if (!mongoose.Types.ObjectId.isValid(cinemaId)) {
          throw new UserInputError(cinemaId + 'is not a valid ID')
        }
        //finds the cinema by id and deletes it
        const cinema = await Cinema.findByIdAndDelete(cinemaId);
      
        //delete all asosiated movies
        await Movie.deleteMany({cinema: {$eq: cinemaId}}); 

        return cinema;
      }
      catch (error) {
        console.log(error);
        throw error;

      }
  }
},
  //specifies the Cinema type
  Cinema: {
    movies: async ({ id }: any) => {
      try {
        console.log("movie id"+ id);

        const movies = await Movie.find({ cinema: id }).exec();
        return movies;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};
