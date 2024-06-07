interface Props {
  title: string;
  description: string;
}

const TabItem = ({ title, description }: Props) => {
  return (
    <div className="w-5/6 text-center lg:text-left lg:w-1/3 space-y-6">
      <h2 className="text-3xl font-semibold text-veryDarkBlue lg:text-4xl">
        {title}
      </h2>
      <p className="text-md text-gray-400 lg:text-lg">{description}</p>
      <button className="hidden lg:block text-white bg-softBlue py-3 px-6 border-2 border-softBlue rounded-md hover:bg-white hover:text-softBlue">
        More Info
      </button>
    </div>
  );
};

export default TabItem;
