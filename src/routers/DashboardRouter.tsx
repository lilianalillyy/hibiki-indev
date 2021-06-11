import { Route, RouteComponentProps, Switch } from "react-router";
import { DashboardIndexPage } from "../pages";
import { AnimatePresence } from "framer-motion";
import { joinPaths } from "../utils/router";
import LandingLayout from "../layouts/LandingLayout";

const DashboardRouter = ({ location, match }: RouteComponentProps) => {
  return (
    <LandingLayout>
      <AnimatePresence>
        <Switch location={location}>
          <Route path={joinPaths(match.path, "/")} exact>
            <DashboardIndexPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </LandingLayout>
  );
};

export { DashboardRouter };
export default DashboardRouter;
