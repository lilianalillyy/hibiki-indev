import { RenderableProps } from "preact";

const HeroTitle = ({ children }: RenderableProps<{}>) => <h1 className="text-4xl md:text-5xl font-bold">{children}</h1>;

const HeroSubtitle = ({ children }: RenderableProps<{}>) => <h2 className="text-xl md:text-2xl font-medium">{children}</h2>;

export { HeroTitle, HeroSubtitle };
