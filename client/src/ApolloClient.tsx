import ApolloClient from "apollo-client";
import {HttpLink} from "apollo-link-http"; 
import {InMemoryCache, NormalizedCacheObject} from "apollo-cache-inmemory";

export const cache= new InMemoryCache(); 

export const client = new ApolloClient<NormalizedCacheObject>({
  link: new HttpLink({  uri: "http://localhost:3002/graphql"}), 
  cache
});
