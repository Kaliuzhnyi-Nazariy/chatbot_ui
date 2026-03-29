import {
  Clipboard,
  Pause,
  RefreshCcw,
  ThumbsDown,
  ThumbsUp,
  Volume2,
} from "lucide-react";
import { useState } from "react";
import { toastSuccess } from "../../Toast/Toasts";
import { useSpeech } from "react-text-to-speech";

const Button = ({
  children,
  label,
  func,
}: {
  children: React.ReactNode;
  label: string;
  func?: () => void;
}) => {
  return (
    <button
      type="button"
      className="size-4 min-[425px]:size-6 text-[#7c7676] hover:cursor-pointer flex items-center justify-center"
      aria-label={label}
      onClick={() => {
        if (!func) return;

        func();
      }}
    >
      {children}
    </button>
  );
};

const BotMessageItem = ({
  message,
  previousMessage,
}: {
  message: string;
  previousMessage: string;
}) => {
  const { start, stop } = useSpeech({ text: message });
  const [isReading, setIsReading] = useState(false);

  const listenClick = () => {
    if (isReading) {
      stop();
      setIsReading(false);
    } else {
      start();
      setIsReading(true);
    }
  };

  const copyClick = () => {
    navigator.clipboard.writeText(message);
    toastSuccess("Message copied");
  };

  return (
    <li className="grid lg:grid-cols-[1fr_auto] gap-2 lg:gap-6 items-center text-xs lg:text-lg ">
      <div className="px-4 lg:px-8 py-4 bg-white rounded-2xl flex flex-col">
        <div className="flex items-center gap-6 ">
          <img
            src="/chat_icon.png"
            alt="chat icon"
            className="size-6 min-[425px]:size-8 lg:size-10"
          />
          <p className="break-all ">{previousMessage}</p>
        </div>

        <hr className="mt-4 lg:mt-6 text-(--splitline)" />

        <article className="mt-6 lg:mt-10 px-4 lg:px-16 wrap-break-word">
          {message}
        </article>
      </div>

      <ul className="flex lg:flex-col items-center p-2 bg-white rounded-2xl border border-white/10 gap-4 lg:gap-8 lg:p-6 w-fit">
        <li>
          <Button label="Refresh button">
            <RefreshCcw className="size-4 lg:size-6" />
          </Button>
        </li>
        <li>
          <Button label="Like button">
            <ThumbsUp className="size-4 lg:size-6" />
          </Button>
        </li>{" "}
        <li>
          <Button label="Dislike button">
            <ThumbsDown className="size-4 lg:size-6" />
          </Button>
        </li>{" "}
        <li>
          <Button label="Copy button" func={copyClick}>
            <Clipboard className="size-4 lg:size-6" />
          </Button>
        </li>{" "}
        <li>
          <Button label="Read button" func={listenClick}>
            {isReading ? (
              <Pause className="size-4 lg:size-6" />
            ) : (
              <Volume2 className="size-4 lg:size-6" />
            )}
          </Button>
        </li>{" "}
      </ul>
    </li>
  );
};

export default BotMessageItem;
