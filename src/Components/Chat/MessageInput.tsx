import { Mic, Send } from "lucide-react";
import { useRef, useState } from "react";

type MessageInputProps = {
  addMessage: (data: string) => void;
  isTyping: boolean;
};

const MessageInput = ({ addMessage, isTyping }: MessageInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const resetTextarea = () => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "auto";
  };

  const handleSendMessage = () => {
    if (inputValue.trim().length > 0) {
      addMessage(inputValue);
      setInputValue("");
      resetTextarea();
    }
  };

  return (
    <>
      <form
        className="px-4 min-[1024px]:px-10 py-4 bg-white rounded-full flex gap-2 items-center z-10 focus-within:ring-2 focus-within:ring-(--neutral300) transition-all duration-150 "
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
      >
        <div className="size-5 lg:size-10 flex items-center justify-center">
          <Mic className="size-6 text-[#a9a6a6]" />
        </div>
        <textarea
          rows={1}
          className="
     flex-1 
  outline-none 
  resize-none 
  leading-5 
  py-1
  max-h-20
  "
          ref={textareaRef}
          // group-focus-within:ring-blue-400
          id="chat_input"
          placeholder="Ask anything"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);

            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
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
          className="size-6 lg:size-10 bg-(--neutral400) border border-[rgba(255,255,255,0.1)] disabled:opacity-50 rounded-sm flex items-center justify-center cursor-pointer disabled:cursor-auto "
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
