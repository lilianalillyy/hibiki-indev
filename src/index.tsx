import { StoreProvider } from "easy-peasy";
import { render } from "react-dom";
import { App } from "./app";

import "./assets/css/tailwind.css";
import store from "./store";

/**
 * The Root Element to which Preact will mount the SPA.
 */
const __REACT_ROOT__ = document.querySelector("#app")!;

render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  __REACT_ROOT__,
);
