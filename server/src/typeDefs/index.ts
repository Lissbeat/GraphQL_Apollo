// import dependencies 
import { mergeTypes } from "merge-graphql-schemas"; 

//import all schemas
import { CinemaSchema} from "./cinema";
import{ MovieSchema} from "./movie"; 


//merge the schemas together and exports it 
export const typeDefs= mergeTypes([CinemaSchema, MovieSchema]); 
