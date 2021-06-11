import { ComponentProps, PropsWithChildren } from "react";
import FadeBox from "../motion/FadeBox";

interface ContentWrapperProps {
  viewDelay?: number;
  viewOffset?: number;
}

const ContentWrapper = ({
  className = "",
  children,
  viewDelay = 1,
  viewOffset = 0.15,
  ...props
}: PropsWithChildren<ComponentProps<"div"> & ContentWrapperProps>) => (
  <FadeBox viewDelay={viewDelay} viewOffset={viewOffset} className={`w-full ${className}`} {...props}>
    {children}
  </FadeBox>
);

export type { ContentWrapperProps };
export { ContentWrapper };
export default ContentWrapper;
