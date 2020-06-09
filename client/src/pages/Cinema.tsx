import * as React from "react";
import { RouteComponentProps, navigate } from "@reach/router";

//styles
import {Divider, Grid, Icon} from "semantic-ui-react";

//graphql
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Container } from "./pageStyles/PageContainer";
import { ListItem, List } from "./pageStyles/List";
import * as CinemaDetailsTypes from "./interfaces/CinemaTypes";
import { SelectButton } from "./pageStyles/Button";
import SidebarLeft from "./sideBar/SideBar";

// import * as DeckDetailsTypes from "../generated/DeckDetails";
// styles
// import { Header } from "./pageStyles/Header";
// import { ContainerD } from "./pageStyles/PageContainer";
// import { SidebarLeft, SidebarRight } from "./pageStyles/SideBar";
// import { SideBarButton } from "../style-components/Button";
// import ModalCreate from "../components/Modal/ModalCreate";
// import { Icon } from "semantic-ui-react";

// component thats handels drag and drop
// import { GetContainers } from "../components/container/grid/GetContainers";
// query


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
            <SidebarLeft object= "movie"/>
    
        <Container>
      
        {data.cinema?.movies?.map((movie: CinemaDetailsTypes.CinemaDetails_cinema_movies) => (
            
          <List key={movie.id}>
      <h2>{movie.movie_name} </h2>
      <Divider />
    <Grid columns={4}>
      <Grid.Column >
    <ListItem theme={{ main: "#465241" }} >
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
      <ListItem theme={{ main: "#2E362B" }} >
      <Icon inverted color= "grey" name= "book" size= "huge" ></Icon>
      <Divider />
      <h4> Genre: {movie.genre} </h4>
   
      </ListItem >
      </Grid.Column>
      
      <Grid.Column >
      <ListItem theme={{ main: "#465241" }} >
      <Icon inverted color= "grey" name= "location arrow" size= "huge" ></Icon>
      <Divider />
      <h4> Location: </h4>
      <Divider />
      </ListItem >
      </Grid.Column>

      <Grid.Column >
      <ListItem theme={{ main: "#2E362B" }} >
      <Icon inverted color= "grey" name= "file text" size= "huge" ></Icon>
      <Divider />
      <h4> Description:  </h4>
      <Divider />
      </ListItem >
      </Grid.Column>

    </Grid>
  
  
             {/* <ModalDelete elementId={rig.id} elementName={rig.rig_name} elementType= {"Rig"} />
             <ModalEdit
              elementId={rig.id}
              elementType= {"Rig"}
            /> */}
            
             {/* <Image src= {myImage} Width= {34} /> */}
           
            
            {/* <SelectButton onClick={async () => await navigate("rig/" + rig.id)}>
              <Icon inverted color= "grey" name= "arrow right" size= "big" ></Icon>
              </SelectButton> */}
        
            {/* <H4Bold> Location:</H4Bold>
     
            <TextBoxS readOnly={true} value={rig.location || ""}> </TextBoxS>
            <Divider/>
            <H4Bold> Description:</H4Bold>
     
            <TextBoxL readOnly={true} value={rig.description || ""}> </TextBoxL> */}
           
          
          </List>
        ))}
      
         </Container>
     
      {/* <ContainerD>
        <GetContainers deckId={deckId} />
      </ContainerD>
      <SidebarLeft>
        <SideBarButton onClick={async () => await navigate("/rig/" + data?.deck?.rig?.id)}>
          <Icon inverted color="grey" name="arrow left" />
        </SideBarButton>
        <ModalCreate elementId={deckId} elementType={"Container"}></ModalCreate>
      </SidebarLeft>
      <SidebarRight></SidebarRight>
      {Header(data && data.deck && data.deck.deck_name, false)} */}
    </React.Fragment>
  );
};
export default Cinema;