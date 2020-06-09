//dependencies 

import { ApolloServer } from 'apollo-server';
import dotenv from "dotenv";

//import db
import  {connection} from "./database/connection";

import {resolvers} from "./resolvers"; 
// import schema and resolvers 
import {typeDefs} from "./typeDefs/index";


//executes the dotenv config file 
dotenv.config();

// db connection 
connection(); 

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, 
  playground: true, introspection: true
} );

server.listen(process.env.PORT, () => {
    console.log(`server is ready at:  http://localhost:${process.env.PORT}/graphql`); 
   
})
