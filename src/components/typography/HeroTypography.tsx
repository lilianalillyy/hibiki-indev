import { ComponentProps, PropsWithChildren } from "react";

const HeroTitle = ({ children, className = "", ...props }: PropsWithChildren<ComponentProps<"h1">>) => (
  <h1 className={`text-4xl md:text-5xl font-bold text-white mb-1.5 opacity-75 ${className}`} {...props}>
    {children}
  </h1>
);

const HeroSubtitle = ({ children, className = "", ...props }: PropsWithChildren<ComponentProps<"h2">>) => (
  <h2 className={`text-xl md:text-2xl font-medium text-white mb-1.5 opacity-75 ${className}`}>{children}</h2>
);

export { HeroTitle, HeroSubtitle };
