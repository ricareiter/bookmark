interface Props {
  children: React.ReactNode;
  active: boolean;
  handleButton: () => void;
}

const FeatureItem = ({ children, active, handleButton }: Props) => {
  return (
    <div className="flex flex-col items-center" onClick={handleButton}>
      <div className="text-lg pb-3 text-center text-veryDarkBlue md:pb-0 md:border-b-0 hover:text-softRed hover:cursor-pointer">
        {children}
      </div>
      {active ? (
        <div className="w-40 border-b-4 border-b-red-400 md:border-0"></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FeatureItem;
