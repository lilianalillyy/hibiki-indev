import { Route, RouteComponentProps, Switch } from "react-router";
import { AnimatePresence } from "framer-motion";
import { joinPaths } from "../utils/router";
import LandingLayout from "../layouts/LandingLayout";
import DashboardIndexPage from "../pages/dashboard";
import DashboardServerListPage from "../pages/dashboard/servers/list";
import DashboardServerManagePage from "../pages/dashboard/servers/manage";
import DashboardProfilePage from "../pages/dashboard/profile";

const DashboardRouter = ({ location, match }: RouteComponentProps) => {
  console.log(match.path);
  return (
    <LandingLayout>
      <AnimatePresence>
        <Switch location={location}>
          <Route path={joinPaths(match.path, "/")} exact component={DashboardIndexPage} />
          <Route path={joinPaths(match.path, "/servers/list")} exact component={DashboardServerListPage} />
          <Route path={joinPaths(match.path, "/servers/manage/:id")} exact component={DashboardServerManagePage} />
          <Route path={joinPaths(match.path, "/profile")} exact component={DashboardProfilePage} />
        </Switch>
      </AnimatePresence>
    </LandingLayout>
  );
};

export { DashboardRouter };
export default DashboardRouter;
