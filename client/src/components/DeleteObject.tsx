import * as React from "react";
//trash buttom that triggers a modal for further delte the selected object 
//Styles
import { Text, TextRed } from "./style-components/Text";
import { ConfirmButton, DeleteButton } from "./style-components/Buttons";
import { Icon, Modal } from "semantic-ui-react";
import styled from "styled-components";

//graphql
import { useMutation } from "@apollo/react-hooks";
import { DELETE_CINEMA, GET_CINEMAS } from "./Queries";

const Div = styled("div")`
  overflow-x: hidden; /* Disable horizontal scroll */
  overflow-y: hidden; /* Disable vertical scroll */

  background-color: transparent;
  margin-right: 15%;
  margin-left: 20%;
  margin-top: 5%;
  margin-bottom: 3%;
`;

interface IDelete {
  objectId?: any;
  objectType: string;
  objectName: string;
}

const ModalDelete: React.FC<IDelete> = ({
  objectType,
  objectId,
  objectName,
}) => {
  const [shouldShowModal, setModal] = React.useState(false);
  console.log("this is the object id" + objectId);

  function closeModal() {
    setModal(false);
  }

  function openModal() {
    setModal(true);
  }

  const [deleteCinema, {error }] = useMutation(DELETE_CINEMA, {
    ignoreResults: false,
    errorPolicy: "all",
  });

  const whichItem = () => {
    if (objectType === "deleteCinema") {
      deleteCinema({
        variables: { cinemaId: objectId },

        refetchQueries: [{ query: GET_CINEMAS }],
      });
    }
    console.log(error);
  };

  const warningMessage = () => {
    if (objectType === "deleteCinema") {
      return (
        <Div>
          {" "}
          <TextRed>
            Warning: all the associated movies will be deleted!
          </TextRed>{" "}
        </Div>
      );
    }
  };

  return (
    <React.Fragment>
      <Modal open={shouldShowModal} onClose={closeModal} size="mini">
        <Div>
          {" "}
          <Text>Delete {objectName} ? </Text>{" "}
        </Div>
        <ConfirmButton
          Width={20}
          cancel={false}
          MarginTop={10}
          Float={false}
          onClick={() => whichItem()}
        >
          Ok
        </ConfirmButton>
        <ConfirmButton
          Width={20}
          cancel={true}
          MarginTop={10}
          Float={false}
          onClick={closeModal}
        >
          Cancel
        </ConfirmButton>
        {warningMessage()}
      </Modal>
      <DeleteButton onClick={openModal}>
        {" "}
        <Icon color="red" name="trash" size="big"></Icon>
      </DeleteButton>
    </React.Fragment>
  );
};

export default ModalDelete;
