import mainBg from "../../../assets/img/main-bg.svg";
import { LinkButton } from "../../../components/elements/Button";
import HeroWrapper from "../../../components/elements/HeroWrapper";
import Logo from "../../../components/elements/Logo";
import { name, slogan } from "../../../constants";

const mainBackground = {
  background: `url(${mainBg}) no-repeat`,
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const MainHero = () => (
  <HeroWrapper style={mainBackground}>
    <div className="flex flex-col-reverse md:flex-row h-full max-w-7xl w-full mx-auto">
      <div className="w-full h-full flex justify-center md:justify-start items-center">
        <div className="text-center md:text-left">
          <div className="text-white mb-8">
            <h1 className="text-6xl md:text-8xl font-medium">{name}</h1>
            <h1 className="text-2xl md:text-4xl font-medium">{slogan}</h1>
          </div>
          <div>
            <LinkButton type="white" href="/invite">
              <span>Invite Hibiki to your Discord</span>
            </LinkButton>
          </div>
        </div>
      </div>
      {/* TODO: Show logo on small screens. */}
      <div className="w-full h-full hidden md:flex justify-center md:justify-end items-center">
        <Logo className="rounded-full w-32 h-32 md:w-64 md:h-64" />
      </div>
    </div>
  </HeroWrapper>
);

export { MainHero, mainBackground };
export default MainHero;
