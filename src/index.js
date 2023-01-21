import React from "react";
import ReactDOM from "react-dom"
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
    <React.Fragment>
     <Auth0Provider
     domain="dev-1s6b1xy8gpbm1nn1.us.auth0.com"
     clientId="jyJDsHvbbf7fieHnX1K7v8RKA6atzPnv"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    </React.Fragment>,document.getElementById("root"))