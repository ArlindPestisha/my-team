import Link from "next/link";
import { Logo } from "./../public/Logo";

const NavBar = () => {
  return (
    <nav className="bg-[#014E56] w-4/5 h-12 flex justify-between m-auto">
      <div className="flex justify-between w-96">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/about">
          <a>about</a>
        </Link>
      </div>

      <div>
        <button>contact us</button>
      </div>
    </nav>
  );
};

export default NavBar;
