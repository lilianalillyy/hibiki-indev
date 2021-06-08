import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Redirect } from "./components/router/Redirect";
import { DonatePage, LandingPage } from "./pages";
import { redirects } from "./constants";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

/**
 * Currently all the code is in this one file, later to be split to components.
 * It is highly WIP. The old files in components, etc are some artifacts from some older attempts.
 */
const App = () => (
  <>
    <div className="h-screen">
      <div className="w-full h-full p-6 pt-0">
        <BrowserRouter>
          <Switch>
            {Object.keys(redirects).map((r) => (
              <Redirect from={r} to={redirects[r]} key={r} />
            ))}
          </Switch>

          <Route
            render={({ location }) => (
              <>
                <Navbar />
                <AnimatePresence>
                  <Switch location={location}>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/donate" component={DonatePage} />
                  </Switch>
                </AnimatePresence>
                <Footer />
              </>
            )}
          />
        </BrowserRouter>
      </div>
    </div>
  </>
);

export { App };
export default App;
