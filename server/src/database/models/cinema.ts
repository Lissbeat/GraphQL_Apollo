import  mongoose from "mongoose";

const Schema = mongoose.Schema;
interface ICinemaModel extends mongoose.Document{
    cinema_name: string; 
    description: string; 
    location: string; 
    close:string; 
    open: string; 
    movies: [];
  }

const cinemaModel = new Schema(
  {
    //required name, open, close
    cinema_name: {
      type: String, 
      required:true, 
    },
    location: {
      type: String
    },
    description: {
      type: String
    },
    open: {
        type: String, 
        required:true, 
      },
      close: {
        type: String, 
        required:true, 
      },
     //can contain a list of movies
    movies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Movie"
      }
    ]
  },
  {
    //auto set timestamp when created etc.
    timestamps: true
  }
);

 const Cinema= mongoose.model<ICinemaModel>("Cinema", cinemaModel);
 export default Cinema; 

