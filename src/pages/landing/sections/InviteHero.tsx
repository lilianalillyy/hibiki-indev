import { HeroWrapper } from "../../../components/wrappers/HeroWrapper";
import { LinkButton } from "../../../components/elements/Button";
import { HeroTitle, HeroSubtitle } from "../../../components/typography/HeroTypography";
import FadeBox from "../../../components/motion/FadeBox";

const InviteHero = () => (
  <HeroWrapper viewOffset={1} hoverable={true} className={`bg-gradient-to-tr bg-gradient-2 from-primary to-primary text-white py-28`}>
    {/* Not centered on mobile because everything is centered to the left and it wouldn't look good. */}
    <div className="text-left md:text-center">
      <HeroTitle>Ready to improve your server?</HeroTitle>
      <HeroSubtitle>1160 other server owners are already using Hibiki!</HeroSubtitle>

      <div className="mt-10 flex flex-col md:flex-row justify-center items-center">
        <FadeBox viewOffset={1.7}>
          <LinkButton type="white" to="/invite">
            <span>Add Hibiki to your server</span>
          </LinkButton>
        </FadeBox>
        <FadeBox viewOffset={1.8}>
          <LinkButton type="white" to="/contribute">
            <span>View Source on GitHub</span>
          </LinkButton>
        </FadeBox>
        <FadeBox viewOffset={1.9}>
          <LinkButton type="white" to="/vote">
            <span>Vote for Hibiki on Top.gg</span>
          </LinkButton>
        </FadeBox>
      </div>
    </div>
  </HeroWrapper>
);

export { InviteHero };
export default InviteHero;
