import React from "react";

import { useMutation } from "@apollo/react-hooks";
import { CREATE_MOVIE, GET_MOVIES, GET_CINEMAS } from "../Queries";

import { Formik, Form } from "formik";

import { Message } from "semantic-ui-react";
import { ConfirmButton } from "../style-components/Buttons";
import { ValidationCreate } from "./ValidationCinema";
import CreateCinemaInput from "./CreateCinemaInput";
import { CREATE_CINEMA } from "../Queries";

interface ICreate {
  closeModal: () => void;
}

const CreateCinema: React.FC<ICreate> = ({ closeModal }) => {
  // the create cinema mutation
  const [createCinema, { data, loading, error }] = useMutation(CREATE_CINEMA, {
    ignoreResults: false,
    errorPolicy: "all",
  });
  //state for hiding status messages
  const [hidden, setHidden] = React.useState(false);
  
  //display message in 3 sek after submit
  const displayMessage = () => {
    setTimeout(() => {
      setHidden(true);
      closeModal();
    }, 3000);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          cinema_name: "",
          description: "",
          close: "",
          open: "",
        }}
        validationSchema={ValidationCreate}
        onSubmit={(
          { cinema_name, description, close, open },
          { resetForm }
        ) => {
          createCinema({
            variables: {
              cinema_name,
              description,
              open,
              close,
            },
            refetchQueries: [{ query: GET_CINEMAS }],
          });

          resetForm();
          displayMessage();
          setHidden(false);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <CreateCinemaInput
              errors={errors}
              touched={touched}
            ></CreateCinemaInput>

            {loading && (
              <Message size="large" color="blue">
                Loading...
              </Message>
            )}
            {error && (
              <Message size="large" color="red">
                {error}
              </Message>
            )}

            {data ? (
              <Message hidden={hidden} size="large" color="green">
                Creation Complete!
              </Message>
            ) : null}

            {error?.graphQLErrors.map(({ message }, i) => (
              <Message hidden={hidden} size="large" color="red" key={i}>
                {message}
              </Message>
            ))}

            <ConfirmButton
              Width={19}
              cancel={false}
              MarginTop={40}
              Float={true}
              type="submit"
            >
              {" "}
              Create
            </ConfirmButton>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default CreateCinema;
