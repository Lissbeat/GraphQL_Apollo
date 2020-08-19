//creating a movie, using formik for handling the form
//success submit will create a new movie through the create movie mutation
import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_MOVIE, GET_MOVIES, GET_CINEMAS } from "../Queries";

import { Formik, Form } from "formik";

import { Message } from "semantic-ui-react";
import { ConfirmButton } from "../style-components/Buttons";
import { ValidationCreate } from "./ValidationMovie";
import CreateMovieInput from "./CreateMovieInput";
import { GET_CINEMA } from "../../pages/Cinema";

interface ICreate {
  cinemaId: any;
  closeModal: () => void;
}

const CreateMovie: React.FC<ICreate> = ({ cinemaId, closeModal }) => {
  console.log("this is the id", cinemaId);

  // the create movie mutation
  const [createMovie, { data, loading, error }] = useMutation(CREATE_MOVIE, {
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
          movie_name: "",
          description: "",
          genre: "",
        }}
        validationSchema={ValidationCreate}
        onSubmit={({ movie_name, description, genre }, { resetForm }) => {
          createMovie({
            variables: {
              cinemaId: cinemaId,
              movie_name,
              description,
              genre,
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
            {/*Input fileds, errors and touched from yup */}
            <CreateMovieInput
              errors={errors}
              touched={touched}
            ></CreateMovieInput>

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
                Movie saved!
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

export default CreateMovie;
