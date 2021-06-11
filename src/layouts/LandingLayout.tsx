import { PropsWithChildren } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const LandingLayout = ({ children }: PropsWithChildren<{}>) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export { LandingLayout };
export default LandingLayout;
