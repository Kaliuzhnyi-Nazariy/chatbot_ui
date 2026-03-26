import { Mic, Send } from "lucide-react";
import { useState } from "react";

type MessageInputProps = {
  addMessage: (data: string) => void;
  isTyping: boolean;
};

const MessageInput = ({ addMessage, isTyping }: MessageInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim().length > 0) {
      addMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <form
        className="px-4 min-[1024px]:px-10 py-4 bg-white rounded-full flex gap-2 items-center z-10"
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
      >
        <div className="size-5 lg:size-10 flex items-center justify-center">
          <Mic className="size-6 text-[#a9a6a6]" />
        </div>
        <textarea
          className="flex-1 outline-none resize-none min-h-5 max-h-8 lg:min-h-8 lg:max-h-10 py-1 lg:py-1.5"
          placeholder="Ask anything from here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && !isTyping) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          disabled={isTyping}
          aria-label="Chat input"
        />
        <button
          className="size-6 lg:size-10 bg-(--neutral200) border border-[rgba(255,255,255,0.1)] disabled:opacity-50 rounded-sm flex items-center justify-center cursor-pointer disabled:cursor-auto "
          type="submit"
          aria-label="send button"
          disabled={!inputValue.trim() || isTyping}
        >
          <Send className="text-white size-3 lg:size-6" />
        </button>
      </form>
    </>
  );
};

export default MessageInput;
