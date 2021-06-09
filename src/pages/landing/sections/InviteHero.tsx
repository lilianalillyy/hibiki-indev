import { HeroWrapper } from "../../../components/wrappers/HeroWrapper";
import { LinkButton } from "../../../components/elements/Button";
import { HeroTitle, HeroSubtitle } from "../../../components/typography/HeroTypography";

const InviteHero = () => (
  <HeroWrapper hoverable={true} className={`bg-gradient-to-tr bg-gradient-2 from-primary to-primary text-white py-28`}>
    {/* Not centered on mobile because everything is centered to the left and it wouldn't look good. */}
    <div className="text-left md:text-center">
      <HeroTitle>Ready to improve your server?</HeroTitle>
      <HeroSubtitle>1160 other server owners are already using Hibiki!</HeroSubtitle>

      <div className="mt-10 flex flex-col md:flex-row justify-center items-center">
        <LinkButton type="white" href="/invite">
          <span>Add Hibiki to your server</span>
        </LinkButton>

        <LinkButton type="white" href="/contribute">
          <span>View Source on GitHub</span>
        </LinkButton>

        <LinkButton type="white" href="/vote">
          <span>Vote for Hibiki on Top.gg</span>
        </LinkButton>
      </div>
    </div>
  </HeroWrapper>
);

export { InviteHero };
export default InviteHero;
