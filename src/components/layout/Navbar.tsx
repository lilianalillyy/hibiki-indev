import { PropsWithChildren, ComponentProps } from "react";
import { transition } from "../../tailwind";
import { name, slogan } from "../../constants";
import { LinkButton } from "../elements/Button";

// TODO: Use RouterLink
const NavLink = ({ children, className = "", href = "#", ...props }: PropsWithChildren<ComponentProps<"a">>) => (
  <a href={href} className={`text-black hover:text-gray-600 ${transition} ${className} font-medium`} {...props}>
    {children}
  </a>
);

const Navbar = () => {
  const navLinks: PropsWithChildren<ComponentProps<"a">>[] = [
    { href: "/invite", children: "Invite" },
    { href: "/donate", children: "Donate" },
    { href: "/support", children: "Support" },
    { href: "/contribute", children: "Contribute" },
    { href: "/guide/self-host", children: "Self-host" },
  ];

  return (
    <nav className="py-6 px-4 flex items-center justify-center">
      <div className="w-full flex justify-start items-center">
        {/* TODO: Use RouterLink */}
        <a href="/" className={`text-black hover:text-gray-600 ${transition}`}>
          <h1 className="font-medium text-2xl">{name}</h1>
          <h2>{slogan}</h2>
        </a>
      </div>
      <div className="w-full flex justify-center items-center">
        {navLinks.map(({ className = "", children, ...link }, i) => (
          <NavLink {...link} className={`${className} ${i !== navLinks.length - 1 && "mr-8"}`} key={i}>
            {children}
          </NavLink>
        ))}
      </div>
      <div className="w-full flex justify-end items-center">
        {/* TODO: Use RouterLink */}
        <LinkButton type="outline-black" href="/login">
          Login
        </LinkButton>
      </div>
    </nav>
  );
};

export { Navbar, NavLink };
export default Navbar;
