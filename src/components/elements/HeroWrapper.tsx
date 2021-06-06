import { ComponentChildren, ComponentProps, RenderableProps } from "preact";

const HeroWrapper = ({
  children,
  ...props
}: RenderableProps<ComponentProps<"div">>) => (
  <div
    className="w-full rounded-3xl flex flex-col md:flex-row justify-center px-8 h-screen"
    {...props}
  >
    {children}
  </div>
);

export { HeroWrapper };
export default HeroWrapper;
