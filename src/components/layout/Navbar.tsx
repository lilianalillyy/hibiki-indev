const Navbar = () => (
  <nav className="px-12 pt-8 mx-auto w-full flex justify-center">
    <div className="w-full">
      <a href="#">
        <h1 className="font-medium text-3xl">Hibiki</h1>
        <h2 className="text-xl">Lorem ipsum dolor sit amet</h2>
      </a>
    </div>
    <div className="w-full flex justify-center items-center">
      <a href="" className="mr-8">
        Support
      </a>
      <a href="" className="mr-8">
        Contribute
      </a>
      <a href="" className="mr-8">
        Support
      </a>
      <a href="">Self-host</a>
    </div>
    <div className="w-full flex justify-end">
      <a href="#" className="inline-flex justify-center items-center">
        <span className="mr-4 text-xl">Login</span>
        <span className="translate">
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
              stroke-width="1"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            ></path>
          </svg>
        </span>
      </a>
    </div>
  </nav>
);

export { Navbar };
export default Navbar;
