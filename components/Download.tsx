import chromeLogo from "@/public/logo-chrome.svg";
import firefoxLogo from "@/public/logo-firefox.svg";
import operaLogo from "@/public/logo-opera.svg";
import Extension from "./Extension";

const Download = () => {
  return (
    <section className="container mx-auto p-12 mt-12 mb-14">
      <div>
        <div className="flex flex-col items-center text-center space-y-6">
          <h3 className="text-3xl text-veryDarkBlue font-semibold">
            Download the extension
          </h3>
          <p className="text-lg text-gray-400 max-w-md lg:max-w-lg lg:text-xl">
            We've got browsers in the pipeline. Please do let us know if you've
            got a favorite you'd like us to prioritize.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-12 gap-12 md:flex-row md:gap-8">
          <Extension
            image={chromeLogo}
            alt="chrome logo"
            browser="Add to Chrome"
            version="Minimum version 62"
          />
          <Extension
            image={firefoxLogo}
            alt="firefox logo"
            custom="md:mt-16"
            browser="Add to Firefox"
            version="Minimum version 55"
          />
          <Extension
            image={operaLogo}
            alt="opera logo"
            custom="md:mt-32"
            browser="Add to Opera"
            version="Minimum version 46"
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
