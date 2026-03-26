import Bubble from "./Bubble";

const PromptCard = ({
  message,
  buttonText,
  middleColor,
  endColor,
}: {
  message: string;
  buttonText: React.ReactNode;
  middleColor: string;
  endColor: string;
}) => {
  return (
    <div className="w-67.5 relative">
      <Bubble middleColor={middleColor} endColor={endColor} />
      <div className="absolute w-full h-full top-0 left-0">
        <p className="absolute top-10 left-6 w-55.5">{message}</p>

        <div className="absolute bottom-0 right-0 size-12 bg-white rounded-[14px] flex justify-center items-center">
          {buttonText}
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
