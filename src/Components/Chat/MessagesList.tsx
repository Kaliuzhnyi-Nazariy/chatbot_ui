import { useEffect, useRef } from "react";
import type { Message } from "../../types/message";
import BotMessageItem from "./Message/BotMessageItem";
import UserMessageItem from "./Message/UserMessageItem";

const MessagesList = ({
  messages,
  isTyping,
  editMessage,
}: {
  messages: Message[];
  isTyping: boolean;
  editMessage: (id: string, newMessage: string) => void;
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
        <ul className="flex flex-col gap-3 lg:gap-10 mb-2 lg:mb-0">
          {messages.map((m, index) => {
            if (m.role === "user") {
              return (
                <UserMessageItem
                  key={m.id}
                  message={m.content}
                  id={m.id}
                  editMessage={editMessage}
                />
              );
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
        {isTyping && <p>typing...</p>}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
};

export default MessagesList;
