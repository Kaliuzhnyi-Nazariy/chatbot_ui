import { useEffect, useRef } from "react";
import type { Message } from "../../types/message";
import BotMessageItem from "./Message/BotMessageItem";
import UserMessageItem from "./Message/UserMessageItem";

const MessagesList = ({
  messages,
  isTyping,
}: {
  messages: Message[];
  isTyping: boolean;
}) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <div className="flex-1 overflow-y-auto">
        <ul className="flex flex-col gap-3 lg:gap-10">
          {messages.map((m, index) => {
            if (m.role === "user") {
              return <UserMessageItem key={m.id} message={m.content} />;
            }
            return (
              <BotMessageItem
                key={m.id}
                message={m.content}
                previousMessage={messages[index - 1]?.content}
              />
            );
          })}
        </ul>
        <p> {isTyping && "typing..."}</p>
        <div ref={messagesEndRef} />
      </div>
    </>
  );
};

export default MessagesList;
