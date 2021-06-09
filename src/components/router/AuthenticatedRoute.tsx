import { useStoreState } from "../../store";
import { Route, Redirect, RouteProps } from "react-router";

interface AuthenticatedRouteProps {
  fallback?: string;
}

const AuthenticatedRoute = ({ path, fallback = "/login", ...props }: AuthenticatedRouteProps & RouteProps) => {
  const authenticated = useStoreState((s) => s.users.isAuthenticated);

  return authenticated ? (
    <Route path={path} {...props} />
  ) : typeof path === "string" ? (
    <Redirect from={path} to={fallback} exact />
  ) : Array.isArray(path) ? (
    <>
      {path.map((p) => (
        <Redirect from={p} to={fallback} exact />
      ))}
    </>
  ) : (
    <Redirect to={fallback} />
  );
};

export type { AuthenticatedRouteProps };
export { AuthenticatedRoute };
export default AuthenticatedRoute;
