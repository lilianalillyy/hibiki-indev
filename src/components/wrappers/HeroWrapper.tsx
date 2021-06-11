import { ComponentProps, PropsWithChildren } from "react";
import { transition } from "../../utils/tailwind";
import { FadeBox } from "../motion/FadeBox";

interface HeroWrapperProps {
  hoverable?: boolean;
  viewDelay?: number;
  viewOffset?: number;
  fullscreen?: boolean;
  padding?: boolean;
  margin?: boolean;
  as?: any | string;
  className?: string;
}

const HeroWrapper = <TProps extends {} = ComponentProps<"a">>({
  as = "a",
  hoverable = false,
  children,
  className = "",
  viewDelay = 1,
  viewOffset = 0.15,
  fullscreen = false,
  padding = true,
  margin = true,
  ...props
}: PropsWithChildren<TProps & HeroWrapperProps>) => (
  <FadeBox
    as={as}
    viewDelay={viewDelay}
    viewOffset={viewOffset}
    {...(hoverable ? { whileHover: { scale: 0.98 } } : {})}
    // onViewportBoxUpdate={(e) => console.log(e.x)}
    className={`w-full ${fullscreen ? "h-screen" : "h-full"} rounded-3xl ${padding ? "py-12 px-16" : ""} ${
      margin ? "my-6" : ""
    } flex flex-col justify-center cursor-pointer ${className} ${transition}`}
    {...props}
  >
    {children}
  </FadeBox>
);

export type { HeroWrapperProps };
export { HeroWrapper };
export default HeroWrapper;
