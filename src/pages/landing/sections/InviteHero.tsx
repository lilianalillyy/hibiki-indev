import { HeroWrapper } from "../../../components/elements/HeroWrapper";
import { LinkButton } from "../../../components/elements/Button";

const InviteHero = () => (
  <HeroWrapper className={`bg-primary text-white py-28`}>
    {/* Not centered on mobile because everything is centered to the left and it wouldn't look good. */}
    <div className="text-left md:text-center">
      <h1 className="text-5xl font-bold">Ready to improve your server?</h1>
      <h2 className="text-2xl font-medium">1160 other server owners are already using Hibiki!</h2>

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
