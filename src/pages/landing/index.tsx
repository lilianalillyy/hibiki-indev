import MainHero from "./sections/MainHero";
import AboutHero from "./sections/AboutHero";
import FeatureHero from "./sections/FeatureHero";
import InviteHero from "./sections/InviteHero";

const LandingPage = () => (
  <>
    <MainHero />
    <div className="pt-6 md:min-h-screen flex flex-col">
      <FeatureHero />
      <AboutHero />
      <InviteHero />
    </div>
  </>
);

export { LandingPage };
export default LandingPage;
