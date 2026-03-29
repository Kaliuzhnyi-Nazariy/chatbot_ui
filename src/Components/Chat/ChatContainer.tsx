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
        "bg-(--neutral100) border border-white/10 rounded-[48px]",
        "flex flex-col justify-between h-full min-h-0 lg:flex-1",
        "py-4 px-8 lg:py-10 lg:px-16 lg:gap-10",
        "overflow-hidden",
      )}
    >
      <div className="overflow-y-auto flex flex-col h-full">
        {messages.length > 0 ? (
          <MessagesList messages={messages} isTyping={isTyping} />
        ) : (
          <EmptyState addMessage={addMessage} />
        )}
      </div>
      <MessageInput addMessage={addMessage} isTyping={isTyping} />
    </div>
  );
};

export default ChatContainer;
