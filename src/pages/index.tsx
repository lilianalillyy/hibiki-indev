import { RouteProps } from "react-router";
import DashboardIndexPage from "./dashboard";
import LandingPage from "./landing";
import DonatePage from "./landing/donate";

interface RouterGroup {
  [key: string]: Omit<RouteProps, "path">;
}

export type { RouterGroup };
export { LandingPage, DonatePage, DashboardIndexPage };
