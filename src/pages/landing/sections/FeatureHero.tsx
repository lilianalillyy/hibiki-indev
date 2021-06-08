import { Link } from "../../../components/elements/Link";
import HeroWrapper from "../../../components/elements/HeroWrapper";
import { HeroSubtitle, HeroTitle } from "../../../components/typography/HeroTypography";
import { icon } from "../../../tailwind";
import { PhotographIcon as ImageIcon, HeartIcon, CurrencyDollarIcon, CashIcon, GlobeIcon, BookOpenIcon } from "@heroicons/react/outline";

const FeatureHero = () => (
  <div className="flex flex-col md:flex-row h-full w-full">
    <div className="w-full pb-6 md:pr-6">
      <HeroWrapper hoverable={true} href="/about/fun" className="bg-cyan-400">
        <div>
          <HeroTitle>Make your server more fun.</HeroTitle>
          <HeroSubtitle>Hibiki comes with many fun and image commands.</HeroSubtitle>
        </div>
        <div className="flex w-full h-full mt-10 items-center justify-center">
          <div className="flex flex-col w-full justify-center items-center mr-8">
            <ImageIcon className={icon.medium} />
            <p className="w-full font-bold text-center text-white">Get pictures of various animals</p>
          </div>
          <div className="flex flex-col w-full justify-center items-center mr-8">
            <HeartIcon className={icon.medium} />
            <p className="w-full font-bold text-center text-white ">Roleplay with server members</p>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <CashIcon className={icon.medium} />
            <p className="w-full font-bold text-center text-white">Compete in the cookie economy</p>
          </div>
        </div>
        <div className="flex justify-end w-full mt-16">
          <Link withBorder={true} className="border-white text-white">
            Find out more
          </Link>
        </div>
      </HeroWrapper>
    </div>
    <div className="w-full pb-6">
      <HeroWrapper hoverable={true} className="bg-teal-400">
        <div>
          <HeroTitle>Increase your server's productivity.</HeroTitle>
          <HeroSubtitle>Hibiki provides useful utilities to boost your productivity.</HeroSubtitle>
        </div>
        <div className="flex w-full h-full mt-10 items-center justify-center">
          <div className="flex flex-col w-full justify-center items-center mr-8">
            <BookOpenIcon className={icon.medium} />
            <p className="w-full font-bold text-center text-white">Define a word from the dictionary</p>
          </div>
          <div className="flex flex-col w-full justify-center items-center mr-8">
            <GlobeIcon className={icon.medium} />
            <p className="w-full font-bold text-center text-white">Translate text between languages</p>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <CurrencyDollarIcon className={icon.medium} />
            <p className="w-full font-bold text-center text-white">Convert currencies between each other</p>
          </div>
        </div>
        <div className="flex justify-end w-full mt-16">
          <a href="" className="font-bold border-b-2 border-white text-white">
            Find out more
          </a>
        </div>
      </HeroWrapper>
    </div>
  </div>
);

export { FeatureHero };
export default FeatureHero;
