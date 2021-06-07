import { ComponentChildren, ComponentProps, RenderableProps } from "preact";
import { transition } from "../../tailwind";

const HeroWrapper = ({ children, className = "", ...props }: RenderableProps<ComponentProps<"div">>) => (
  <div
    className={`w-full h-full rounded-3xl p-8 flex flex-col justify-center hover:shadow-2xl cursor-pointer ${className} ${transition}`}
    {...props}
  >
    {children}
  </div>
);

export { HeroWrapper };
export default HeroWrapper;
