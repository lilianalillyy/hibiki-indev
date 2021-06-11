import { Route, RouteComponentProps, Switch } from "react-router";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { DashboardIndexPage } from "../pages";
import { AnimatePresence } from "framer-motion";
import { joinPaths } from "../utils/router";

const DashboardRouter = ({ location, match }: RouteComponentProps) => {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Switch location={location}>
          <Route path={joinPaths(match.path, "/")} exact>
            <DashboardIndexPage />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export { DashboardRouter };
export default DashboardRouter;
