import Image from "next/image";
import logoImg from "@/public/logo-bookmark.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between p-8">
      <div>
        <Image src={logoImg} alt="logo" className="w-38" />
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center space-x-12 uppercase tracking-normal lg:tracking-widest text-lg text-veryDarkBlue">
          <li>
            <Link href="#" className="hover:text-softRed">
              Features
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-softRed">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-softRed">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-softRed text-white border-2 border-softRed px-10 py-3 rounded-md shadow-md hover:bg-white hover:text-softRed"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
