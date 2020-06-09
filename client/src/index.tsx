//dependencies
import * as React from "react";
import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";

//styles used on every rendered page 
import "./index.css";
//import semantic ui's style sheet
import 'semantic-ui-css/semantic.min.css';

//import cleint from apollo client configuration

import { Routes } from "./routing/Routes";
import { client } from "./ApolloClient";
import { ThemeProvider } from "styled-components";

//import Routs from routing configuration
const theme = {
  main: "mediumseagreen"
};

ReactDOM.render(
  <ApolloProvider client={client}>
<ThemeProvider theme={theme}>
    <BrowserRouter>
    <Routes/> 
    </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();