import * as React from "react";
import { RouteComponentProps, navigate } from "@reach/router";

//graphql
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Container } from "./pageStyles/PageContainer";
import { ListItem } from "./pageStyles/List";
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
// export const GET_DECK_DETAILS = gql`
//   query DeckDetails($deckId: ID!) {
//     deck(id: $deckId) {
//       id
//       deck_name
//       rig {
//         id
//       }
//       containers {
//         id
//         container_name
//         length
//         width
//         x_position
//         y_position
//         color
//         isStatic
//       }
//     }
//   }
// `;

interface ICinemas extends RouteComponentProps {
  
}
const Cinemas: React.FC<ICinemas> = () => {
//   const { data, loading, error } = useQuery<
//     DeckDetailsTypes.DeckDetails,
//     DeckDetailsTypes.DeckDetailsVariables
//   >(GET_DECK_DETAILS, { variables: { deckId } });

//   if (loading) return <p>loading...</p>;
//   if (error) return <p>ERROR: {error.message}</p>;
//   if (!data) return <p>Not found</p>;
  return (
    <React.Fragment>
        <Container>
            <ListItem>
            <h1> Hello</h1>
            </ListItem>
      
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