import React from "react";
import { Grid, Divider, Label, Segment } from "semantic-ui-react";
import { Field } from "formik";
import { TextBlack, TextRed } from "../style-components/Text";
import { InputFieldL, TextAreaL } from "../style-components/Input";
import { SelectS } from "../style-components/Select";
import "antd/dist/antd.css";
import { TimePicker } from "antd";
import moment from "moment";

import { CTimePicker } from "./CTimePicker";
interface IInput {
  errors: any;
  touched: any;
}
const format = "HH:mm:ss";
const CreateCinemaInput: React.FC<IInput> = ({ errors, touched }) => {
  const [openT, setOpenT] = React.useState(null);
  const [closeT, setCloseT] = React.useState(null);

  const changeClose = (value: any) => {
    setCloseT(value);
  };

  const changeOpen = (value: any) => {
    // console.log(value && value.format(format));
    setOpenT(value);
  };
  return (
    <React.Fragment>
      <Grid columns="equal">
        <Divider hidden />
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <TextBlack>
                Cinema name<TextRed>*</TextRed>
              </TextBlack>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Field
                placeholder="Enter cinema name..."
                name="cinema_name"
                type="text"
                as={InputFieldL}
              />
              {errors.cinema_name && touched.cinema_name ? (
                <Label size="large" color="red" pointing>
                  {errors.cinema_name}
                </Label>
              ) : null}
            </Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Segment>
              <TextBlack>
                Opening Hours <TextRed>*</TextRed>
              </TextBlack>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              {/* <Field
                component={TimePicker}
                name="close"
                defaultValue={moment("12:08:23", "HH:mm:ss")}
                size="large"
              />

                <Field
                component={TimePicker}
                name="open"
                defaultValue={moment("12:08:23", "HH:mm:ss")}
                size="large"
              /> */}

              <TextBlack>Open</TextBlack>

              <Field name="open" size="large" type="text" as={InputFieldL} />
              <Divider hidden />

              <TextBlack>Close</TextBlack>

              <Field name="close" size="large" type="text" as={InputFieldL} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <TextBlack>Description</TextBlack>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
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
  );
};

export default CreateCinemaInput;
