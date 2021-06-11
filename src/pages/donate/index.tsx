import { HeartIcon as SolidHeartIcon } from "@heroicons/react/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/outline";
import { HeroWrapper } from "../../components/elements/HeroWrapper";
import { HeroSubtitle, HeroTitle } from "../../components/typography/HeroTypography";
import { mainBackground } from "../landing/sections/MainHero";
import FadeBox from "../../components/motion/FadeBox";
import { LinkButton } from "../../components/elements/Button";
import { kofi } from "../../constants";
import PageWrapper from "../../components/wrappers/PageWrapper";

const DonatePage = () => (
  <PageWrapper>
    <HeroWrapper delayOrder={1} style={mainBackground} className="h-auto">
      <HeroTitle className="inline-flex justify-center items-center">Donate</HeroTitle>
      <HeroSubtitle className="inline-flex justify-center items-center">Donate to keep Hibiki running</HeroSubtitle>
    </HeroWrapper>

    <FadeBox delayOrder={5} className="p-8 pt-24 max-w-7xl w-full mx-auto ">
      <div className="text-2xl flex flex-col justify-center items-center">
        <p className="inline-block text-center">
          Whether you want to help keeping Hibiki running, support the hard work of the developers or just are a person with a good heart,
          you can do so by donating. It gives the team behind Hibiki motivation to work on more features and fantastic new things in Hibiki
          and helps us pays the hosting for Hibiki.
        </p>
        <p className="inline-flex mt-4 text-center">
          <OutlineHeartIcon className="text-red-400 w-8 h-8 mr-2" />
          Any donations are appreciated <OutlineHeartIcon className="text-red-400 w-8 h-8 ml-2" />
        </p>
      </div>
    </FadeBox>

    <FadeBox delayOrder={10} className="p-8 max-w-7xl w-full mx-auto ">
      <div className="text-2xl flex  justify-center items-center">
        <LinkButton href={kofi} type="outline-black" target="_blank" rel="noopener noreferrer">
          Donate via Kofi
        </LinkButton>
      </div>
    </FadeBox>
  </PageWrapper>
);

export { DonatePage };
export default DonatePage;
