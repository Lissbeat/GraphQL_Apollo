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

//import Routs from routing configuration

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <Routes/> 
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();