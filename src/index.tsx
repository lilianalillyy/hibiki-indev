import { render } from "preact";
import { App } from "./app";

import "./assets/css/tailwind.css";

/**
 * The Root Element to which Preact will mount the SPA.
 */
const __REACT_ROOT__ = document.querySelector("#app")!;

render(<App />, __REACT_ROOT__);
