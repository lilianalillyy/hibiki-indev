import HeroWrapper from "../../components/wrappers/HeroWrapper";
import { mainBackground } from "../landing/sections/MainHero";
import { HeroSubtitle, HeroTitle } from "../../components/typography/HeroTypography";
import { useStoreState } from "../../store";

const DashboardProfilePage = () => {
  const user = useStoreState((s) => s.users.user)!;
  return (
    <>
      <div className="mb-6">
        <HeroSubtitle className="text-black">// todo: add profile</HeroSubtitle>
      </div>
      <HeroWrapper viewOffset={0.1} style={mainBackground} className="h-auto">
        <HeroTitle className="inline-flex justify-center items-center">{user.discord.username}'s Profile</HeroTitle>
        <HeroSubtitle className="inline-flex justify-center items-center">Customize your profile here!</HeroSubtitle>
      </HeroWrapper>
    </>
  );
};

export { DashboardProfilePage };
export default DashboardProfilePage;
