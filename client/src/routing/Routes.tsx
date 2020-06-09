//dependencies 
import * as  React from 'react';
import { Router } from '@reach/router';
import Cinemas from '../pages/Cinemas';
import Cinema from '../pages/Cinema';

//import pages 


//routing configurations
export const Routes = ()  => (
  <React.Fragment>
      <Router primary={false} component={React.Fragment}>
        <Cinemas path="/"/>
        <Cinema path="cinema/:cinemaId" />
      </Router>
      </React.Fragment>
)