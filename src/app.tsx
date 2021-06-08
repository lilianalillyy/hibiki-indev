import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/landing";

/**
 * Currently all the code is in this one file, later to be split to components.
 * It is highly WIP. The old files in components, etc are some artifacts from some older attempts.
 */
const App = () => (
  <>
    <div className="h-screen">
      <div className="w-full h-full p-6 pt-0">
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    </div>
  </>
);

export { App };
export default App;
