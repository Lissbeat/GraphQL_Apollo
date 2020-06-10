
import React from 'react'


import { Grid, Divider, Label , Segment } from 'semantic-ui-react';
import { Field } from "formik";
import { TextWhite, TextRed } from '../style-components/Text';
import { InputFieldL, TextAreaL } from '../style-components/Input';

interface IInput{
    errors: any;
    touched: any;

}

const CreateMovieInput: React.FC<IInput> = ({errors, touched}) => {

    
  return (
   <React.Fragment>
           <Grid columns="equal">
      <Divider hidden />
      <Grid.Row>
        <Grid.Column>
          <Segment inverted>
            <TextWhite>Movie name<TextRed>*</TextRed></TextWhite>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment inverted>
            <Field
              placeholder="Enter movie name..."
              name="movie_name"
              type="text"
              as={InputFieldL}
            />
            {errors.movie_name && touched.movie_name ? (
              <Label size="large" color="red" pointing>
                {errors.movie_name}
              </Label>
            ) : null}
          </Segment>
        </Grid.Column>
      </Grid.Row>

    
      <Grid.Row>
        <Grid.Column>
          <Segment inverted>
            <Label>Genre <TextRed>*</TextRed></Label>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment inverted>
          <Field
              placeholder="Enter genre..."
              name="genre"
              type="text"
              as={InputFieldL}
            />
        
            {errors.genre && touched.genre ? (
              <Label size="large" color="red" pointing>
                {errors.floor}
              </Label>
            ) : null}
          </Segment>
        </Grid.Column>
      </Grid.Row>


      <Grid.Row>
          <Grid.Column>
            <Segment inverted>
              <Label>Description</Label>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment inverted>
              <Field
                placeholder="Enter description"
                name="description"
                type="text"
                rows={10}
                as={TextAreaL}
              />
              {errors.description && touched.description ? (
                <Label size="large" color="red" pointing>
                  {errors.description}
                </Label>
              ) : null}
            </Segment>
          </Grid.Column>
          </Grid.Row>


    </Grid>
     
   </React.Fragment>
    
  
  )
}

export default CreateMovieInput; 