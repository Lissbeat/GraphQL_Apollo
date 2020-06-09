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
    //query rig by id
    cinema: async (_: any, { id }: any) => {
      try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
          throw new UserInputError(id + "is not a valid ID");
        }
        const rig = await Cinema.findById(id);
        return rig;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  Mutation: {
    addCinema: async (_: any, args: any, { cinema_name }: any) => {
      try {
        console.log(args);
        const newCinema = new Cinema(args);
        const result = await newCinema.save();
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  //get all rigs and the assosiated decks
  Cinema: {
    movies: async ({ id }: any) => {
      try {
        const movies = await Movie.find({ cinema: id }).exec();
        return movies;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};
