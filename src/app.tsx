import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "./components/router/Redirect";
import { redirects } from "./constants";
import LandingRouter from "./routers/LandingRouter";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { useStoreState } from "./store";

/**
 * Currently all the code is in this one file, later to be split to components.
 * It is highly WIP. The old files in components, etc are some artifacts from some older attempts.
 */
const App = () => {
<<<<<<< HEAD
=======
  const authenticated = useStoreState((s) => s.users.isAuthenticated);

>>>>>>> c92a7e5 (feat: init store, user types)
  return (
    <>
      <div className="h-screen">
        <div className="w-full h-full p-6 pt-0">
          <BrowserRouter>
            <Switch>
              {Object.keys(redirects).map((r) => (
                <Redirect from={r} to={redirects[r]} key={r} />
              ))}
<<<<<<< HEAD
              <Route path="/" component={LandingRouter} />
            </Switch>
=======
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
>>>>>>> c92a7e5 (feat: init store, user types)
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export { App };
export default App;
