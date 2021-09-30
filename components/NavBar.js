import Link from "next/link";
import { Logo } from "../public/assets/Logo";

const NavBar = () => {
  return (
    <nav className="bg-[#014E56] w-screen h-24 flex justify-between py-7">
      <div className="flex justify-between w-96 ml-12">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <Link href="/">
          <a className="py-2 text-white">home</a>
        </Link>
        <Link href="/about">
          <a className="py-2 text-white">about</a>
        </Link>
      </div>

      <div className=" mr-20">
        <Link href="/contact">
          <button className=" w-40 border-2 text-center h-12 rounded-full text-white">
            contact us
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
