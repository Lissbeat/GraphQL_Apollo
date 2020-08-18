import * as React from "react";
import { RouteComponentProps, navigate } from "@reach/router";

//styles
import {Divider, Segment, Grid, Button, Icon} from "semantic-ui-react";

//graphql
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Container } from "./pageStyles/PageContainer";
import { ListItem, List } from "./pageStyles/List";
import {CinemasDetails, CinemaDetails_cinema} from "./interfaces/CinemaTypes";
import { SelectButton } from "./pageStyles/Button";
import SidebarLeft from "./sideBar/SideBar";




export const GET_CINEMAS = gql`
  query GetAllCinemas {
    cinemas {
      id
      cinema_name
      description
      close
      open
    }
  }
`;



interface ICinemas extends RouteComponentProps {
  
}

const Cinemas: React.FC<ICinemas> = () => {
    const { data, error, loading } = useQuery<CinemasDetails, CinemaDetails_cinema>(
        GET_CINEMAS
      );
      if (loading || !data) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Error! {error.message}</div>;
      }
  return (

    <React.Fragment>
            <SidebarLeft object= "cinema"/>
    
        <Container>
      
        {data.cinemas?.map((cinema: CinemaDetails_cinema) => (
            
          <List key={cinema.id}>
      <h2>{cinema.cinema_name} </h2>
      <Divider />
    <Grid columns={4}>
      <Grid.Column >
    <ListItem theme={{ main: "#465241" }} >
      <Icon inverted color= "grey" name= "building" size= "huge" ></Icon>
      <Divider />
      <h4> Name: {cinema.cinema_name} </h4>
      <Divider />
      <SelectButton onClick={async () => await navigate("cinema/" + cinema.id)}>
              <Icon inverted color= "grey" name= "arrow right" size= "big" ></Icon>
              </SelectButton>

      </ListItem >
      </Grid.Column>
         
     
      <Grid.Column>
      <ListItem theme={{ main: "#2E362B" }} >
      <Icon inverted color= "grey" name= "time" size= "huge" ></Icon>
      <Divider />
      <h4> Close: {cinema.close} </h4>
      <Divider />
      <h4> Open: {cinema.open} </h4>
      </ListItem >
      </Grid.Column>
      
      <Grid.Column >
      <ListItem theme={{ main: "#465241" }} >
      <Icon inverted color= "grey" name= "location arrow" size= "huge" ></Icon>
      <Divider />
      <h4> Location: {cinema.location} </h4>
      <Divider />
      </ListItem >
      </Grid.Column>

      <Grid.Column >
      <ListItem theme={{ main: "#2E362B" }} >
      <Icon inverted color= "grey" name= "file text" size= "huge" ></Icon>
      <Divider />
      <h4> Description: {cinema.description} </h4>
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
export default Cinemas;