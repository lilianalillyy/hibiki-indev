import MainHero from "./sections/MainHero";
import AboutHero from "./sections/AboutHero";
import FeatureHero from "./sections/FeatureHero";
import InviteHero from "./sections/InviteHero";
import PageWrapper from "../../components/wrappers/PageWrapper";

const LandingPage = () => (
  <PageWrapper>
    <MainHero />
    <div className="pt-6 md:min-h-screen flex flex-col">
      <FeatureHero />
      <AboutHero />
      <InviteHero />
    </div>
  </PageWrapper>
);

export { LandingPage };
export default LandingPage;
