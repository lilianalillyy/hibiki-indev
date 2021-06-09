import { RouteProps } from "react-router";
import DashboardIndexPage from "./dashboard";
import LandingPage from "./landing";
import DonatePage from "./landing/donate";

interface RouterGroup {
  [key: string]: Omit<RouteProps, "path">;
}

/**
 * Landing guest-facing routes.
 */
const landing: RouterGroup = {
  "/": {
    component: LandingPage,
  },
  "/donate": {
    component: DonatePage,
  },
};

/**
 * All authenticated /dashboard routes.
 */
const dashboard: RouterGroup = {
  "/": {
    component: DashboardIndexPage,
  },
};

export type { RouterGroup };
export { landing, dashboard };
