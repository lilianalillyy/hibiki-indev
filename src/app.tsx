import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "./components/router/Redirect";
import { redirects } from "./utils/constants";
import LandingRouter from "./routers/LandingRouter";
import DashboardRouter from "./routers/DashboardRouter";

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
              <Route path="/dashboard" component={DashboardRouter} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export { App };
export default App;
