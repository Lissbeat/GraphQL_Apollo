
import React from 'react'


import { useMutation } from '@apollo/react-hooks';
import { CREATE_MOVIE, GET_MOVIES } from './Queries';

import { Formik, Form } from "formik";


import { Message } from "semantic-ui-react";
import { ConfirmButton } from '../style-components/Buttons';
import { ValidationCreate } from './ValidationMovie';
import CreateMovieInput from './CreateMovieInput';
import { GET_CINEMAS } from '../../pages/Cinemas';

interface ICreate{
    cinemaId: any; 
    closeModal:() => void; 

}

const CreateMovie: React.FC<ICreate> = ({cinemaId, closeModal}) => {

    console.log("this is the id", cinemaId)

    const [createMovie, { data, loading, error }] = useMutation(
        CREATE_MOVIE,
        {
          errorPolicy: "all",
        }
      );

      const [hidden, setHidden] = React.useState(false);

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
        onSubmit={(
          { movie_name, description, genre },
          { resetForm }
        ) => {
          createMovie({
            variables: {
              cinemaId: cinemaId,
              movie_name,
              description,
              genre
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
            <CreateMovieInput errors={errors} touched={touched}></CreateMovieInput>

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
                Deck saved!
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
    
  
  )
}

export default CreateMovie; 