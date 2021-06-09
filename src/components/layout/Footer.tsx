import { transition } from "../../utils/tailwind";
import Link from "../elements/Link";
import { NavLink } from "./Navbar";

const Footer = () => (
  <footer className="py-12 px-4 flex flex-col md:flex-row text-black">
    <div className="w-full flex justify-center md:justify-start items-center text-center md:text-left">
      <a href="#" className={`flex flex-col hover:text-gray-600 ${transition}`}>
        <span className="text-2xl font-medium">Hibiki</span>
        <span className="">The ultimate all-in-one Discord bot.</span>
      </a>
    </div>
    <div className="w-full flex items-center justify-center  text-center md:text-left">
      <span>
        {new Date().getFullYear()} &ndash; <Link href="/">Hibiki</Link>, by <Link href="/sysdotini">sysdotini</Link>,{" "}
        <Link href="/">resolved</Link> and <Link href="/contributors">contributors</Link>.
      </span>
    </div>
    <div className="w-full flex flex-col justify-center items-center md:items-end mt-8 md:mt-0  text-center md:text-left">
      <NavLink href="/contribute">Hibiki on GitHub</NavLink>
      <NavLink href="/team">Development Team</NavLink>
      <NavLink href="/support">Support Discord</NavLink>
      <NavLink href="/privacy">Privacy Policy</NavLink>
    </div>
  </footer>
);

export { Footer };
export default Footer;
