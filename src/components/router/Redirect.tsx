import { Link } from "../elements/Link";
import Logo from "../elements/Logo";
import { Route, Redirect as RouterRedirect, useHistory } from "react-router";
import { Button } from "../elements/Button";
import { useEffect, useState } from "react";

interface RedirectProps {
  from: string;
  to: string;
}

const Redirect = ({ from, to }: RedirectProps) => {
  const waitFor = 1;

  setTimeout(() => {
    window.location.href = to;
  }, 1000 * waitFor);

  return /(.˙*):\/\//g ? (
    <Route
      exact
      path={from}
      render={() => (
        // React Router will render the layout (Navbar, Footer) without thinking twice, so it looks weird..
        // For that purpose, this small page is made.
        <div className="h-screen w-screen inset-0 fixed z-50 bg-white flex flex-col justify-center items-center text-4xl px-8">
          <Logo className="rounded-full w-32 h-32" />
          <div className="mt-12 text-center">
            Redirecting to{" "}
            <Link href={to} withBorder={true} className="font-medium">
              {new URL(to).hostname}
            </Link>
          </div>
        </div>
      )}
    />
  ) : (
    <RouterRedirect from={from} to={to} />
  );
};

export type { RedirectProps };
export { Redirect };
export default Redirect;
