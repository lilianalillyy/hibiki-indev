import { Route, RouteComponentProps, Switch } from "react-router";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { DonatePage, LandingPage } from "../pages";
import { AnimatePresence } from "framer-motion";

const LandingRouter = ({ location }: RouteComponentProps) => {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Switch location={location}>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/donate" exact>
            <DonatePage />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export { LandingRouter };
export default LandingRouter;
