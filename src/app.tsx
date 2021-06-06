import { ComponentProps, RenderableProps } from "preact";
import Logo from "./components/elements/Logo";
import { mainBackground } from "./pages/landing/sections/MainHero";

/**
 * Currently all the code is in this one file, later to be split to components.
 * It is highly WIP. The old files in components, etc are some artifacts from some older attempts.
 */

const transition = "transition duration-300 ease-in-out";

const NavLink = ({
  children,
  className = "",
  href = "#",
  ...props
}: RenderableProps<ComponentProps<"a">>) => (
  <a
    href={href}
    className={`text-black hover:text-gray-600 ${transition} ${className} font-medium`}
    {...props}
  >
    {children}
  </a>
);

const App = () => (
  <>
    <div className="h-screen">
      <div className="w-full h-full p-6 pt-0">
        {/* extra x padding for nav because of the rounded edges  */}
        <nav class="py-6 px-6 flex items-center justify-center">
          <div className="w-full flex justify-start items-center">
            <a
              href="#"
              className={`text-black hover:text-gray-600 ${transition}`}
            >
              <h1 className="font-medium text-2xl">Hibiki</h1>
              <h2>The ultimate all-in-one Discord bot.</h2>
            </a>
          </div>
          <div className="w-full flex justify-center items-center">
            <NavLink className="mr-8">Invite</NavLink>
            <NavLink className="mr-8">Donate</NavLink>
            <NavLink className="mr-8">Support</NavLink>
            <NavLink className="mr-8">Contribute</NavLink>
            <NavLink className="mr-8">Self-hosting</NavLink>
          </div>
          <div className="w-full flex justify-end items-center">
            <a
              href="#"
              className={`inline-flex justify-center items-center border-2 text-black hover:text-primary border-black hover:border-primary hover:shadow-2xl py-1 px-6 rounded-full ${transition}`}
            >
              <span className="mr-2">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
              </span>
              <span className="font-medium">Login</span>
            </a>
          </div>
        </nav>
        <div
          className={`w-full h-full rounded-3xl hover:shadow-2xl cursor-pointer ${transition}`}
          style={mainBackground}
        >
          <div className="flex flex-col md:flex-row h-full max-w-7xl w-full mx-auto">
            <div className="w-full h-full flex justify-start items-center">
              <div>
                <div className="text-white mb-8">
                  <h1 className="text-8xl font-medium">Hibiki</h1>
                  <h1 className="text-4xl font-medium">
                    The ultimate all-in-one Discord bot.
                  </h1>
                </div>
                <div>
                  <a
                    href=""
                    className={`bg-white hover:shadow-2xl hover:text-primary py-2 px-6 rounded-full font-medium text-xl inline-flex items-center justify-center ${transition}`}
                  >
                    <span>Invite Hibiki to your Discord</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex justify-end items-center">
              <Logo className="rounded-full w-64 h-64" />
            </div>
          </div>
        </div>
        <div className="pt-6 h-screen flex flex-col">
          <div className="flex flex-col md:flex-row h-full w-full">
            <div className="w-full pb-6 pr-6">
              <div
                className={`bg-cyan-400 w-full h-full rounded-3xl p-8 flex flex-col justify-center hover:shadow-2xl cursor-pointer ${transition}`}
              >
                <div>
                  <h1 class="text-5xl font-bold">Make your server more fun.</h1>
                  <h2 class="text-2xl font-medium">
                    Hibiki comes with many fun and image commands.
                  </h2>
                </div>
                <div className="flex w-full mt-10 items-center justify-center">
                  <div className="flex flex-col w-full justify-center items-center mr-8">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="w-full font-bold text-center">
                      Get pictures of various animals
                    </p>
                  </div>
                  <div className="flex flex-col w-full justify-center items-center mr-8">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>

                    <p className="w-full font-bold text-center">
                      Roleplay with server members
                    </p>
                  </div>
                  <div className="flex flex-col w-full justify-center items-center">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <p className="w-full font-bold text-center">
                      Compete in the cookie economy
                    </p>
                  </div>
                </div>
                <div className="flex justify-end w-full mt-16">
                  <a href="" className="font-bold border-b-2 border-black">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full pb-6">
              <div
                className={`bg-teal-400 w-full h-full rounded-3xl p-8 flex flex-col justify-center hover:shadow-2xl cursor-pointer ${transition}`}
              >
                <div>
                  <h1 class="text-5xl font-bold">
                    Increase your server's productivity.
                  </h1>
                  <h2 class="text-2xl font-medium">
                    Hibiki provides useful utilities to boost your productivity.
                  </h2>
                </div>
                <div className="flex w-full mt-10 items-center justify-center">
                  <div className="flex flex-col w-full justify-center items-center mr-8">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    <p className="w-full font-bold text-center">
                      Define a word from the dictionary
                    </p>
                  </div>
                  <div className="flex flex-col w-full justify-center items-center mr-8">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <p className="w-full font-bold text-center">
                      Translate text between languages
                    </p>
                  </div>
                  <div className="flex flex-col w-full justify-center items-center">
                    <svg
                      className="w-16 h-16"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="w-full font-bold text-center">
                      Convert currencies between each other
                    </p>
                  </div>
                </div>
                <div className="flex justify-end w-full mt-16">
                  <a href="" className="font-bold border-b-2 border-black">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row h-full w-full">
            <div className="w-full pb-6 pr-6">
              <div
                className={`bg-rose-400 text-white w-full h-full rounded-3xl p-8 flex flex-col justify-center hover:shadow-2xl cursor-pointer ${transition}`}
              >
                <div>
                  <h1 class="text-5xl font-bold">
                    Everything is free, forever.
                  </h1>
                  <h2 class="text-2xl font-medium">
                    We'll never lock features behind a paywall.
                  </h2>

                  <p className="mt-4">
                    We will never make you donate or vote to unlock features -
                    unlike big bots that beg for money. Hibiki is a passion
                    project built by our team of developers that love open
                    source software.
                    <br />
                    The entire codebase is{" "}
                    <span className="font-bold">free and open-source</span>,
                    licensed under the GNU AGPLv3 or later.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-full pb-6">
                <div
                  className={`bg-pink-400 text-white w-full h-full rounded-3xl p-8 flex flex-col justify-center hover:shadow-2xl cursor-pointer ${transition}`}
                >
                  <div>
                    <h1 class="text-5xl font-bold">
                      Everything is customizable.
                    </h1>
                    <h2 class="text-2xl font-medium">
                      Hibiki is designed to be tweaked and customized to your
                      liking.
                    </h2>

                    <p className="mt-4">
                      Hibiki is designed to be both simple to use but also
                      powerful. Most features and modules allow you to tweak
                      their options to fit your preferences. You can even set
                      custom thresholds for automod options.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-full pb-6">
                <div
                  className={`bg-violet-400 text-white w-full h-full rounded-3xl p-8 flex flex-col justify-center hover:shadow-2xl cursor-pointer ${transition}`}
                >
                  <div>
                    <h1 class="text-5xl font-bold">Hibiki is global.</h1>
                    <h2 class="text-2xl font-medium">
                      Every command, module, and feature is completely
                      translatable.
                    </h2>

                    <p className="mt-4">
                      You can change your preferred language or your server's
                      default language. We already have many languages complete!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row h-full w-full">
            <div className="w-full pb-6">
              <div
                className={`bg-primary text-white w-full h-full rounded-3xl p-8 flex flex-col justify-center items-center hover:shadow-2xl cursor-pointer ${transition}`}
              >
                <div className="text-center">
                  <h1 class="text-5xl font-bold">
                    Ready to improve your server?
                  </h1>
                  <h2 class="text-2xl font-medium">
                    1160 other server owners are already using Hibiki!
                  </h2>

                  <div className="mt-10">
                    <a
                      href=""
                      className={`mr-6 bg-white text-black hover:shadow-2xl hover:text-primary py-2 px-6 rounded-full font-medium text-xl inline-flex items-center justify-center ${transition}`}
                    >
                      <span>Add Hibiki to your server</span>
                    </a>

                    <a
                      href=""
                      className={`mr-6 bg-white text-black hover:shadow-2xl hover:text-primary py-2 px-6 rounded-full font-medium text-xl inline-flex items-center justify-center ${transition}`}
                    >
                      <span>View Source on GitHub</span>
                    </a>

                    <a
                      href=""
                      className={`bg-white text-black hover:shadow-2xl hover:text-primary py-2 px-6 rounded-full font-medium text-xl inline-flex items-center justify-center ${transition}`}
                    >
                      <span>Vote for Hibiki on Top.gg</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="py-12 px-4 flex flex-col md:flex-row text-black">
            <div className="w-full flex justify-start items-center">
              <a
                href="#"
                className={`flex flex-col hover:text-gray-600 ${transition}`}
              >
                <span className="text-2xl font-bold">Hibiki</span>
                <span className="">The ultimate all-in-one Discord bot.</span>
              </a>
            </div>
            <div className="w-full flex items-center justify-center">
              {new Date().getFullYear()} &ndash; Hibiki, by sysdotini, resolved,
              and contributors.
            </div>
            <div className="w-full flex flex-col justify-center items-end">
              <a href="#" className="font-medium">
                GitHub
              </a>
              <a href="#" className="font-medium">
                Support Discord
              </a>
              <a href="#" className="font-medium">
                Development Team
              </a>
              <a href="#" className="font-medium">
                Privacy Policy
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </>
);

export { App };
export default App;
