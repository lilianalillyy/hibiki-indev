import type { ComponentProps, PropsWithChildren } from "react";
import { useMemo } from "react";
import { Link, LinkProps } from "react-router-dom";
import { transition } from "../../utils/tailwind";

type ButtonType = "outline-black" | "white";

interface ButtonProps {
  type: ButtonType;
}

const buttonTypeClasses = {
  "outline-black": `inline-flex justify-center items-center border-2 text-black hover:text-primary border-black hover:border-primary hover:shadow-2xl py-1 px-6 rounded-full ${transition}`,
  "white": `text-center mb-6 md:mb-0 md:mr-6 bg-white text-black hover:shadow-2xl hover:text-primary py-2 px-6 rounded-full font-medium text-xl inline-flex items-center justify-center ${transition}`,
};

const useButtonTypeClass = (type: keyof typeof buttonTypeClasses) => useMemo(() => buttonTypeClasses[type], [type]);

const Button = ({ type = "white", children, className = "", ...props }: PropsWithChildren<ComponentProps<"button"> & ButtonProps>) => {
  const classes = useButtonTypeClass(type);

  return (
    <button {...props} className={`${classes} ${className}`}>
      {children}
    </button>
  );
};

const LinkButton = ({ type = "white", children, className = "", ...props }: PropsWithChildren<LinkProps & ButtonProps>) => {
  const classes = useButtonTypeClass(type);

  return (
    <Link {...props} className={`${classes} ${className}`}>
      {children}
    </Link>
  );
};

const AnchorButton = ({ type = "white", children, className = "", ...props }: PropsWithChildren<ComponentProps<"a"> & ButtonProps>) => {
  const classes = useButtonTypeClass(type);

  return (
    <a {...props} className={`${classes} ${className}`}>
      {children}
    </a>
  );
};

export type { ButtonProps, ButtonType };
export { Button, LinkButton, AnchorButton, useButtonTypeClass };
