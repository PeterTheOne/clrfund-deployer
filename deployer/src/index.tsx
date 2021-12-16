import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Web3Provider } from "./hooks/Web3Provider";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from "react-router-dom";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <Web3Provider networkId={100}>
      <ChakraProvider theme={theme}>
        <HashRouter>
          <CSSReset />
          <App />
        </HashRouter>
      </ChakraProvider>
    </Web3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
