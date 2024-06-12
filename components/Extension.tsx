import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  custom?: string;
  browser: string;
  version: string;
}

const Extension = ({ custom, image, alt, browser, version }: Props) => {
  return (
    <div
      className={`flex flex-col items-center text-center shadow-md rounded-b-lg ${custom}`}
    >
      <div className="mb-4 p-4">
        <Image src={image} alt={alt} />
      </div>
      <div className="mb-8 px-4">
        <h4 className="text-2xl font-semibold">{browser}</h4>
        <p className="text-gray-400">{version}</p>
      </div>
      <div className="border-dotted border-b-4 border-gray-200 w-full"></div>
      <div className="mt-6 mb-6 px-4">
        <button className="bg-softBlue py-2 px-6 border-2 border-softBlue rounded-md text-white text-md hover:bg-white hover:text-softBlue">
          Add & Install Extension
        </button>
      </div>
    </div>
  );
};

export default Extension;
