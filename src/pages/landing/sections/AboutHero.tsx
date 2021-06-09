import HeroWrapper from "../../../components/wrappers/HeroWrapper";
import { HeroSubtitle, HeroTitle } from "../../../components/typography/HeroTypography";

const AboutHero = () => (
  <div className="flex flex-col md:flex-row h-full w-full">
    <div className="w-full pb-6 md:pr-6">
      <HeroWrapper hoverable={true} className="bg-rose-400">
        <div>
          <HeroTitle>Everything is free, forever.</HeroTitle>
          <HeroSubtitle>We'll never lock features behind a paywall.</HeroSubtitle>
          <p className="text-white opacity-75 mt-6">
            We will never make you donate or vote to unlock features - unlike big bots that beg for money. Hibiki is a passion project built
            by our team of developers that love open source software.
            <br />
            The entire codebase is <span className="font-bold">free and open-source</span>, licensed under the GNU AGPLv3 or later.
          </p>
        </div>
      </HeroWrapper>
    </div>
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full pb-6">
        <HeroWrapper hoverable={true} className="bg-pink-400 text-white">
          <div>
            <HeroTitle>Everything is customizable.</HeroTitle>
            <HeroSubtitle>Hibiki is designed to be tweaked and customized to your liking.</HeroSubtitle>

            <p className="mt-6">
              Hibiki is designed to be both simple to use but also powerful. Most features and modules allow you to tweak their options to
              fit your preferences. You can even set custom thresholds for automod options.
            </p>
          </div>
        </HeroWrapper>
      </div>

      <div className="w-full h-full pb-6">
        <HeroWrapper hoverable={true} className="bg-violet-400 text-white">
          <div>
            <HeroTitle>Hibiki is global.</HeroTitle>
            <HeroSubtitle>Every command, module, and feature is completely translatable.</HeroSubtitle>

            <p className="mt-6">
              You can change your preferred language or your server's default language. We already have many languages complete!
            </p>
          </div>
        </HeroWrapper>
      </div>
    </div>
  </div>
);

export { AboutHero };
export default AboutHero;
