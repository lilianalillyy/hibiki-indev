import { ComponentProps, PropsWithChildren } from "react";
import { transition } from "../../tailwind";

interface LinkProps {
  withBorder?: boolean;
}

const Link = ({ withBorder = false, className, children, ...props }: PropsWithChildren<ComponentProps<"a"> & LinkProps>) => (
  <a className={`font-bold ${withBorder && "border-b-2 border-black"} hover:opacity-75 ${className} ${transition}`} {...props}>
    {children}
  </a>
);

export type { LinkProps };
export { Link };
export default Link;
