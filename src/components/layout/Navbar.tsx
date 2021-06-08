import { PropsWithChildren, ComponentProps, useMemo, useState } from "react";
import { transition } from "../../tailwind";
import { name, slogan } from "../../constants";
import { LinkButton } from "../elements/Button";
import { motion } from "framer-motion";
import { Link, LinkProps } from "react-router-dom";
import { MenuAlt1Icon, MenuAlt2Icon, MenuAlt3Icon, MenuIcon } from "@heroicons/react/outline";

/**
 * The NavLink accepts both to & href, where to has a bigger priority.
 * If to is set, the SPA routing will be used, otherwise the component will
 * act as a normal anchor.
 */
type NavLinkProps = Omit<LinkProps, "to"> & { to?: LinkProps["to"]; href?: ComponentProps<"a">["href"] };

// TODO: Use RouterLink
const NavLink = ({ children, className = "", to, href = "#", ...props }: PropsWithChildren<NavLinkProps>) => {
  const classes = useMemo(() => `text-black hover:text-gray-600 ${transition} ${className} font-medium`, [transition, className]);

  return to ? (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  ) : (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
};

const Navbar = () => {
  const navLinks: PropsWithChildren<NavLinkProps>[] = [
    { to: "/invite", children: "Invite" },
    { to: "/donate", children: "Donate" },
    { to: "/support", children: "Support" },
    { to: "/contribute", children: "Contribute" },
    { to: "/guide/self-host", children: "Self-host" },
  ];

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((val) => !val);

  return (
    <div className="relative">
      <div className="py-6 px-4 flex items-center justify-center z-50">
        <div className="w-full flex justify-start items-center">
          {/* TODO: Use RouterLink */}
          <a href="/" className={`text-black hover:text-gray-600 ${transition}`}>
            <h1 className="font-medium text-2xl">{name}</h1>
            <h2 className="hidden md:inline-block">{slogan}</h2>
          </a>
        </div>
        <div className="w-full justify-center items-center hidden md:flex">
          {navLinks.map(({ className = "", children, ...link }, i) => (
            <NavLink {...link} className={`${className} ${i !== navLinks.length - 1 && "mr-8"}`} key={i}>
              {children}
            </NavLink>
          ))}
        </div>
        <div className="w-full flex justify-end items-center">
          {/* TODO: Use RouterLink */}
          <LinkButton type="outline-black" href="/login" className="hidden md:inline-flex">
            Login
          </LinkButton>
          <button className="focus:outline-none p-2 rounded-xl bg-primary text-white inline-flex md:hidden" onClick={toggleDrawer}>
            <MenuAlt3Icon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export type { NavLinkProps };
export { Navbar, NavLink };
export default Navbar;
