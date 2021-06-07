import { ComponentProps, PropsWithChildren } from "react";
import { transition } from "../../tailwind";

const HeroWrapper = ({ children, className = "", ...props }: PropsWithChildren<ComponentProps<"a">>) => (
  <a
    className={`w-full h-full rounded-3xl py-12 px-16 flex flex-col justify-center hover:shadow-2xl cursor-pointer ${className} ${transition}`}
    {...props}
  >
    {children}
  </a>
);

export { HeroWrapper };
export default HeroWrapper;
