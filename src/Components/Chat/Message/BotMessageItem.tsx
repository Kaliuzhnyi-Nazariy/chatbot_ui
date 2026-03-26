import {
  Clipboard,
  RefreshCcw,
  ThumbsDown,
  ThumbsUp,
  Volume2,
} from "lucide-react";

const Button = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <button
      type="button"
      className="size-4 min-[425px]:size-6 text-[#7c7676] hover:cursor-pointer"
      aria-label={label}
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
  return (
    <div className="grid lg:grid-cols-[1fr_auto] gap-3 lg:gap-6 items-center ">
      <div className="px-5 lg:px-10 py-4 bg-white rounded-2xl flex flex-col">
        <div className="flex items-center gap-6 ">
          <img src="/chat_icon.png" alt="chat icon" className="size-10" />
          <p className="break-all">{previousMessage}</p>
        </div>

        <hr className="mt-6 text-[#9A9A9A5E]" />

        <article className="mt-10 px-5 lg:px-14.5 wrap-break-word">
          {message}
        </article>
      </div>

      <ul className="flex lg:flex-col items-center p-6 bg-white rounded-2xl border border-white/10 gap-5 lg:gap-10 lg:p-6 w-fit">
        <li>
          <Button label="Refresh button">
            <RefreshCcw />
          </Button>
        </li>
        <li>
          <Button label="Like button">
            <ThumbsUp />
          </Button>
        </li>{" "}
        <li>
          <Button label="Dislike button">
            <ThumbsDown />
          </Button>
        </li>{" "}
        <li>
          <Button label="Copy button">
            <Clipboard />
          </Button>
        </li>{" "}
        <li>
          <Button label="Read button">
            <Volume2 />
          </Button>
        </li>{" "}
      </ul>
    </div>
  );
};

export default BotMessageItem;
