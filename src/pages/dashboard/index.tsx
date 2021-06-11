import HeroWrapper from "../../components/wrappers/HeroWrapper";
import { mainBackground } from "../landing/sections/MainHero";
import { HeroSubtitle, HeroTitle } from "../../components/typography/HeroTypography";
import ContentWrapper from "../../components/wrappers/ContentWrapper";
import { useStoreState } from "../../store";
import { Link } from "react-router-dom";

const DashboardIndexPage = () => {
  const user = useStoreState((s) => s.users.user)!;
  return (
    <>
      <div className="mb-6">
        <HeroSubtitle className="text-black">// todo: add icons for each action, think of more things to add</HeroSubtitle>
      </div>
      <HeroWrapper viewOffset={0.1} style={mainBackground} className="h-auto">
        <HeroTitle className="inline-flex justify-center items-center">Dashboard</HeroTitle>
        <HeroSubtitle className="inline-flex justify-center items-center">
          Welcome to the Hibiki Dashboard, {user.discord.username}.{" "}
        </HeroSubtitle>
      </HeroWrapper>

      <ContentWrapper viewOffset={0.2}>
        <div className="flex w-full h-1/2">
          <HeroWrapper as={Link} to="/dashboard/profile" viewOffset={0.3} hoverable={true} className="bg-pink-400 w-full h-full mr-8 py-28">
            <HeroTitle>Your Profile</HeroTitle>
            <HeroSubtitle>Custimize your profile settings here...</HeroSubtitle>
          </HeroWrapper>
          <HeroWrapper as={Link} to="/dashboard/servers/list" viewOffset={0.4} hoverable={true} className="bg-rose-400 w-full h-full py-28">
            <HeroTitle>Servers</HeroTitle>
            <HeroSubtitle>Access server specific settings here...</HeroSubtitle>
          </HeroWrapper>
        </div>
      </ContentWrapper>
    </>
  );
};

export { DashboardIndexPage };
export default DashboardIndexPage;
