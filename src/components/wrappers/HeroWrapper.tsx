import { ComponentProps, PropsWithChildren } from "react";
import { transition } from "../../utils/tailwind";
import { FadeBox } from "../motion/FadeBox";

interface HeroWrapperProps {
  hoverable?: boolean;
  delayOrder?: number;
}

const HeroWrapper = ({
  hoverable = false,
  children,
  className = "",
  delayOrder,
  ...props
}: PropsWithChildren<ComponentProps<"a"> & HeroWrapperProps>) => (
  <FadeBox
    as="a"
    delayOrder={delayOrder}
    {...(hoverable ? { whileHover: { scale: 0.98 } } : {})}
    // onViewportBoxUpdate={(e) => console.log(e.x)}
    className={`w-full h-full rounded-3xl py-12 px-16 my-6 flex flex-col justify-center cursor-pointer ${className} ${transition}`}
    {...props}
  >
    {children}
  </FadeBox>
);

export type { HeroWrapperProps };
export { HeroWrapper };
export default HeroWrapper;
