import { useChat } from "../../hooks/useChat";
import EmptyState from "./EmptyState";
import MessageInput from "./MessageInput";
import MessagesList from "./MessagesList";
import clsx from "clsx";

const ChatContainer = () => {
  const { messages, addMessage, isTyping } = useChat();

  return (
    <div
      className={clsx(
        "bg-gray-100 py-5 px-8 lg:py-10 lg:px-16 border border-white/10 rounded-[48px] flex flex-col gap-3 lg:gap-10 h-full min-h-0 overflow-y-auto overflow-hidden lg:flex-1 ",
        messages.length === 0 && " justify-between",
      )}
    >
      {messages.length > 0 ? (
        <MessagesList messages={messages} isTyping={isTyping} />
      ) : (
        <EmptyState addMessage={addMessage} />
      )}
      <MessageInput addMessage={addMessage} isTyping={isTyping} />
    </div>
  );
};

export default ChatContainer;
