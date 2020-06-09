import Movie from "../database/models/movie";
import Cinema from "../database/models/cinema";

import { UserInputError, ApolloError } from "apollo-server";
import mongoose from "mongoose";

export const movieReslover = {
  Query: {
    //query all the cinemas
    movies: () => {
      return Movie.find({});
    },
    movie: async (_: any, { id }: any) => {
      try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
          throw new UserInputError(id + "is not a valid ID");
        }
        const movie = await Movie.findById(id);
        return movie;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  Mutation: {
    addMovie: async (
      _: any,
      { cinemaId, movie_name, genre, description }: any
    ) => {
      try {
        const cinema = await Cinema.findById(cinemaId);
        const newMovie = new Movie({
          movie_name,
          genre,
          description,
          cinema: cinemaId,
        });
        const result = await newMovie.save();
        //@ts-ignore
        await cinema.movies.push(result);
        //@ts-ignore
        await cinema.save();
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    deleteMovie: async (_: any, { movieId }: any) => {
      try {
        //find the movie and delete it
        const movie = await Movie.findByIdAndDelete(movieId);

        //update the cinema
        //@ts-ignore
        await Cinema.updateOne({ _id: movie.cinema }, { $pull: { movies: movieId } }
        );

        return movie;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    editMovie: async (_:any, { movieId, movie_name, genre, description }:any) => {
        try {
        
          const movieUpdate = await Movie.findById(movieId);
  
          //throw an error if its not found
          if (!movieUpdate) {
            throw new UserInputError("Movie not found");
          }
  
          //update the fields in the database
          movieUpdate.movie_name = movie_name;
          movieUpdate.genre = genre;
          movieUpdate.description= description;
      
  
          //save the update, and return the result
          const result = await movieUpdate.save();
          return result;
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
  },

  //a Movie is related to a cinema
  Movie: {
    cinema: async ({ cinema }: any) => {
      try {
        const cinemaResult = await Cinema.findById({ _id: cinema }).exec();
        console.log(cinemaResult);
        return cinemaResult;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};
