import HeroWrapper from "../../components/elements/HeroWrapper";
import MainHero from "./sections/MainHero";

const LandingPage = () => (
  <div className="w-full h-full p-8">
    <MainHero />
    <HeroWrapper className="p-8 flex justify-center items-center font-medium text-4xl h-screen">
      Instructions unclear, stuck a dick in the blender.
    </HeroWrapper>
  </div>
);

export { LandingPage };
export default LandingPage;
