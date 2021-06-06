import mainBg from "../../../assets/img/main-bg.svg";
import HeroWrapper from "../../../components/elements/HeroWrapper";
import Logo from "../../../components/elements/Logo";

const mainBackground = {
  background: `url(${mainBg}) no-repeat`,
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const MainHero = () => (
  <HeroWrapper style={mainBackground}>
    <div className="max-w-7xl mx-auto w-full h-full flex flex-col md:flex-row justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-7xl text-white font-medium">Hibiki</h1>
          <h2 className="text-4xl text-white font-medium">
            Lorem ipsum dolor sit amet
          </h2>
          <div className="mt-8">
            <a
              href="#"
              className="px-6 py-2 rounded-full text-black bg-white hover:bg-gray-100 inline-flex items-center justify-center font-medium transition duration-200 ease-in-out"
            >
              <span className="mr-2 flex justify-start">
                <svg
                  class="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </span>
              <span class="text-xl">Invite Hibiki</span>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-center">
        <Logo className="w-64 h-64 rounded-full" />
      </div>
    </div>
  </HeroWrapper>
);

export { MainHero, mainBackground };
export default MainHero;
