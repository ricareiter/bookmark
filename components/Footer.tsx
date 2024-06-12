import Image from "next/image";
import footerLogo from "@/public/logo-bookmark-footer.svg";
import facebookLogo from "@/public/icon-facebook.svg";
import twitterLogo from "@/public/icon-twitter.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between w-full space-y-8 md:space-y-0 md:flex-row bg-veryDarkBlue py-8 md:px-24 xl:px-56">
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:space-x-16">
        <Image src={footerLogo} alt="logo" />
        <div className="flex flex-col items-center space-y-6 md:space-y-0 md:space-x-12 md:flex-row">
          <Link
            href="#"
            className="text-gray-300 text-xs uppercase tracking-wider hover:text-softRed"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-gray-300 text-xs uppercase tracking-wider hover:text-softRed"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-gray-300 text-xs uppercase tracking-wider hover:text-softRed"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <Image src={facebookLogo} alt="facebook logo" className="ficon" />
        <Image src={twitterLogo} alt="facebook logo" className="ficon" />
      </div>
    </footer>
  );
};

export default Footer;
