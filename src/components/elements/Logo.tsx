import { ComponentProps } from "react";
import logoImg from "../../assets/img/hbk-logo.png";

const Logo = (props: ComponentProps<"img">) => <img src={logoImg} alt="Hibiki" {...props} />;

export { Logo };
export default Logo;
