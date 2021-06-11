import HeroWrapper from "../../../components/wrappers/HeroWrapper";
import { mainBackground } from "../../landing/sections/MainHero";
import { HeroSubtitle, HeroTitle } from "../../../components/typography/HeroTypography";
import { useStoreState } from "../../../store";

const DashboardServerManagePage = () => {
  const user = useStoreState((s) => s.users.user)!;

  return (
    <>
      <div className="mb-6">
        <HeroSubtitle className="text-black">// todo: add server manage</HeroSubtitle>
      </div>
      <HeroWrapper viewOffset={0.1} style={mainBackground} className="h-auto">
        <HeroTitle className="inline-flex justify-center items-center">Your Servers</HeroTitle>
        <HeroSubtitle className="inline-flex justify-center items-center">Manage your servers</HeroSubtitle>
      </HeroWrapper>
    </>
  );
};

export { DashboardServerManagePage };
export default DashboardServerManagePage;
