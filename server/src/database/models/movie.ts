import  mongoose  from "mongoose";
const Schema = mongoose.Schema;

interface IMovieModel extends mongoose.Document{
    movie_name:string;
    genre: string;
    description: string
    cinema: {};
  }

const movieModel = new Schema(
  {
    //required name
    movie_name: {
      type: String, 
      required:true, 
    },
    genre: {
      type: String
    },
    description: {
      type: String
    },
     // assosiated to a movie 
    cinema: 
      {
        type: Schema.Types.ObjectId,
        ref: "Cinema"
      }
    
  },
  {
    //auto set timestamp when created etc.
    timestamps: true
  }
);

 const Movie= mongoose.model<IMovieModel>("Movie", movieModel);
 export default Movie; 

