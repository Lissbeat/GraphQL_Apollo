import * as React from "react";
import { RouteComponentProps, navigate } from "@reach/router";

//styles
import {Divider, Segment, Grid, Button, Icon} from "semantic-ui-react";

//graphql
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Container } from "./pageStyles/PageContainer";
import { ListItem, List } from "./pageStyles/List";
import { GetAllCinemas_cinemas , GetAllCinemas} from "./interfaces/GetAllCinemas";
import { SelectButton } from "./pageStyles/Button";
import SidebarLeft from "./pageStyles/SideBar";

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


export const GET_Cinemas = gql`
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
    const { data, error, loading } = useQuery<GetAllCinemas, GetAllCinemas_cinemas>(
        GET_Cinemas
      );
      if (loading || !data) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Error! {error.message}</div>;
      }
  return (

    <React.Fragment>
            <SidebarLeft/>
    
        <Container>
      
        {data.cinemas?.map((cinema: GetAllCinemas_cinemas) => (
            
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