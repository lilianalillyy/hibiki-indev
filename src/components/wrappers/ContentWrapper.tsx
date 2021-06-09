import { ComponentProps, PropsWithChildren } from "react";
import FadeBox from "../motion/FadeBox";

interface ContentWrapperProps {
  delayOrder?: number;
}

const ContentWrapper = ({
  delayOrder = 5,
  className = "",
  children,
  ...props
}: PropsWithChildren<ComponentProps<"div"> & ContentWrapperProps>) => (
  <FadeBox delayOrder={delayOrder} className={`w-full ${className}`} {...props}>
    {children}
  </FadeBox>
);

export type { ContentWrapperProps };
export { ContentWrapper };
export default ContentWrapper;
