import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="text-gray-900 px-16 max-w-screen-xl border-b border-gray-200  flex items-center mx-auto sticky top-0 h-20 cursor-pointer bg-white z-50 transition-all">
        <div className="flex w-full items-center justify-center md:justify-between">
          <Link passHref href="/">
            <a>
              <h1 className="sm:text-3xl font-bold">Guilherme S. Sousa</h1>
            </a>
          </Link>

          <div className="hidden md:block">
            <a
              href="https://www.linkedin.com/in/guilhermedasilvasousa/"
              target="_blank"
              className="hover:text-black"
            >
              LinkedIn
            </a>
            <a
              className="ml-4 hover:text-black"
              href="https://behance.com/madebygui"
              target="_blank"
            >
              Behance
            </a>
            <a
              className="ml-4 hover:text-black"
              href="https://github.com/guilherssousa"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="ml-4 hover:text-black"
              href="https://app.picpay.com/user/guilherssousa/5.0"
              target="_blank"
            >
              Donate
            </a>
          </div>
        </div>
      </nav>
      <div id="spacer" className="h-10 w-full"></div>
    </>
  );
};

export default Navbar;
