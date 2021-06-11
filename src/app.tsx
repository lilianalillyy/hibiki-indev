import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "./components/router/Redirect";
import { redirects } from "./constants";
import LandingRouter from "./routers/LandingRouter";

/**
 * Currently all the code is in this one file, later to be split to components.
 * It is highly WIP. The old files in components, etc are some artifacts from some older attempts.
 */
const App = () => {
  return (
    <>
      <div className="h-screen">
        <div className="w-full h-full p-6 pt-0">
          <BrowserRouter>
            <Switch>
              {Object.keys(redirects).map((r) => (
                <Redirect from={r} to={redirects[r]} key={r} />
              ))}
              <Route path="/" component={LandingRouter} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export { App };
export default App;
