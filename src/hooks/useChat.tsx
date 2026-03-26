import { useState } from "react";
import type { Message } from "../types/message";
import { v1 as uuidv1 } from "uuid";

const now = Date.now();
const delay = 600 + Math.random() * 1000;

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (content: string) => {
    const message: Message = {
      id: uuidv1(),
      role: "user",
      content,
      createdAt: now,
    };
    setMessages((prev) => [...prev, message]);
    getResponse();
  };

  const getResponse = () => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: uuidv1(),
          role: "bot",
          content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor mollitia vel cum deleniti voluptatibus aut consequatur. Inventore debitis, eaque nesciunt ex iusto, fuga non magnam cum voluptates quos sunt eius!
Sunt, id quis officia tenetur rem rerum saepe assumenda dolores fugit necessitatibus quae eveniet quidem deserunt similique, totam soluta itaque corporis maxime corrupti quod tempora quas in consequatur! Nemo, libero.
Totam delectus assumenda necessitatibus accusamus inventore ea adipisci sequi nobis? Facere necessitatibus, aliquam eos, facilis dolorem reiciendis totam quaerat ex magni exercitationem rem! Veniam doloribus dolore quis, fugiat distinctio aperiam.
Unde eaque nulla fugiat illo nemo, facilis voluptate odio nihil voluptates deleniti veritatis in omnis voluptas, doloremque accusantium sint eum. Assumenda veritatis a facere qui voluptatum atque unde? Id, corporis.
Odit voluptate quo facere voluptates provident, praesentium itaque quibusdam deserunt saepe numquam tempore inventore quos. Similique maxime eligendi maiores veniam explicabo, voluptas commodi voluptatibus repellat. Nesciunt rerum tenetur doloremque nihil.`,
          createdAt: Date.now(),
        },
      ]);
      setIsTyping(false);
    }, delay);
  };

  return { messages, isTyping, addMessage };
};
