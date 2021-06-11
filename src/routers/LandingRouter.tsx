import { Route, RouteComponentProps, Switch } from "react-router";
import { DonatePage, LandingPage } from "../pages";
import { AnimatePresence } from "framer-motion";
import LandingLayout from "../layouts/LandingLayout";

const LandingRouter = ({ location }: RouteComponentProps) => {
  return (
    <LandingLayout>
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
    </LandingLayout>
  );
};

export { LandingRouter };
export default LandingRouter;
