import { Route, RouteComponentProps, Switch } from "react-router";
import { DonatePage, LandingPage } from "../pages";
import { AnimatePresence } from "framer-motion";
import LandingLayout from "../layouts/LandingLayout";

const LandingRouter = ({ location }: RouteComponentProps) => {
  return (
    <LandingLayout>
      <AnimatePresence>
        <Switch location={location}>
          <Route path="/donate" exact component={DonatePage} />
          {/* TODO: cards */}
          <Route path={["/", "/:name"]} exact component={LandingPage} />
        </Switch>
      </AnimatePresence>
    </LandingLayout>
  );
};

export { LandingRouter };
export default LandingRouter;
