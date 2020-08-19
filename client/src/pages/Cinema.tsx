import * as React from "react";
import { RouteComponentProps, navigate } from "@reach/router";

//styles
import {Divider, Grid, Icon} from "semantic-ui-react";

//graphql
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Container } from "./pageStyles/PageContainer";
import { ListItem, ListMovie } from "./pageStyles/List";
import * as CinemaDetailsTypes from "./interfaces/CinemaTypes";
import { SelectButton } from "./pageStyles/Button";
import SidebarLeft from "./sideBar/SideBar";
import DeleteObject from "../components/DeleteObject"; 




export const GET_CINEMA = gql`
  query ($cinemaId: ID!) {
    cinema(id: $cinemaId) {
      id
      cinema_name
      description
      close
      open
      movies {
          id
          movie_name
          genre
      }
  }
}
`;



interface ICinema extends RouteComponentProps {
  cinemaId?:any;
}


const Cinema: React.FC<ICinema> = ({cinemaId}) => {

  console.log(cinemaId);
    const { data, loading, error } = useQuery<CinemaDetailsTypes.CinemaDetails, CinemaDetailsTypes.CinemaVariables
  >(GET_CINEMA, { errorPolicy: "all", variables: { cinemaId } });


      if (loading || !data) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Error! {error.message}</div>;
      }
  return (

    <React.Fragment>
            <SidebarLeft object= "movie" objectId= {cinemaId}/>
    
        <Container>
      
        {data.cinema?.movies?.map((movie: CinemaDetailsTypes.CinemaDetails_cinema_movies) => (
          <ListMovie key={movie.id}>


      <h2>{movie.movie_name} </h2>
      <Divider />
    <Grid columns={4}>
      <Grid.Column >
    <ListItem theme={{ main: "#A35653" }} >
      <Icon inverted color= "grey" name= "film" size= "huge" ></Icon>
      <Divider />
      <h4> Name: {movie.movie_name} </h4>
      <Divider />
      <SelectButton onClick={async () => await navigate("cinema/" + movie.id)}>
              <Icon inverted color= "grey" name= "arrow right" size= "big" ></Icon>
              </SelectButton>

      </ListItem >
      </Grid.Column>
         
     
      <Grid.Column>
      <ListItem theme={{ main: "#541814" }} >
      <Icon inverted color= "grey" name= "book" size= "huge" ></Icon>
      <Divider />
      <h4> Genre: {movie.genre} </h4>
   
      </ListItem >
      </Grid.Column>
      
     

      <Grid.Column >
      <ListItem theme={{ main: "#A35653" }} >
      <Icon inverted color= "grey" name= "file text" size= "huge" ></Icon>
      <Divider />
      <h4> Description:  </h4>
      <Divider />
      </ListItem >
      </Grid.Column>

    </Grid>
  
          </ListMovie>
        ))}
      
         </Container>
     
      
    </React.Fragment>
  );
};
export default Cinema;