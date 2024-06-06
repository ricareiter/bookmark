import Image from "next/image";
import heroImg from "@/public/illustration-hero.svg";

const Hero = () => {
  return (
    <section className="container mx-auto mt-4">
      <div className="flex flex-col-reverse px-12 lg:px-0 lg:flex-row">
        <div className="text-center space-y-6 lg:p-12 lg:mt-14 lg:text-left lg:w-1/2">
          <h1 className="text-3xl font-semibold text-veryDarkBlue lg:text-6xl">
            A Simple Bookmark Manager
          </h1>
          <p className="text-lg text-gray-400 lg:max-w-md lg:text-xl">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex flex-col justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 md:block">
            <button className="text-white text-sm font-semibold border-2 border-softBlue bg-softBlue py-3 px-4 rounded-md shadow-md hover:bg-white hover:text-softBlue">
              Get it on Chrome
            </button>
            <button className="text-gray-600 text-sm font-semibold border-2 border-gray-100 bg-gray-100 py-3 px-4 rounded-md shadow-md hover:bg-white hover:border-gray-600">
              Get it on Firefox
            </button>
          </div>
        </div>
        <div className="relative mx-auto w-1/2">
          <Image src={heroImg} alt="hero image" className="lg:mt-20 xl:mt-0" />
          <div className="absolute hidden lg:block bottom-12 -right-48 bg-softBlue w-full h-72 xl:h-80 xl:bottom-0 rounded-l-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
