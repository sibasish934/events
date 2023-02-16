import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FavContextProvider } from "./store/fav-context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Auth0Provider
    domain="dev-2pn7t0e7hqvttb4s.us.auth0.com"
    clientId="GZH1ISIn7mYLuflcZZdZmTLEa0v0FuV5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <FavContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavContextProvider>
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
