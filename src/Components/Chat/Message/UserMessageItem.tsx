import clsx from "clsx";
import { SquarePen } from "lucide-react";
import { useState } from "react";

const UserMessageItem = ({
  message,
  id,
  editMessage,
}: {
  message: string;
  id: string;
  editMessage: (id: string, newMessage: string) => void;
}) => {
  const [mode, setMode] = useState<"read" | "edit">("read");
  const [newMessage, setNewMessage] = useState(message);

  const handleUpdate = () => {
    editMessage(id, newMessage);
    setMode("read");
  };

  return (
    <li className="flex ml-auto items-center gap-2 lg:gap-6 max-w-[90%]">
      {mode === "read" && (
        <button
          className="size-5 md:size-10 border border-(--editMessageBorder) rounded-lg text-(--editMessageIcon) flex items-center justify-center hover:cursor-pointer"
          type="button"
          aria-label="Edit button"
          onClick={() => setMode("edit")}
        >
          <SquarePen className="size-2 md:size-6" />
        </button>
      )}

      <div
        className={clsx(
          "px-4 py-2 md:px-10 md:py-4 bg-white rounded-2xl  flex items-center gap-6 w-full ",
          mode === "edit" ? "w-full h-full" : "max-w-[85%]",
        )}
      >
        <img src="/user_photo.png" alt="user photo" className="size-10" />
        {mode === "edit" ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}
            className=""
          >
            <textarea
              rows={1}
              value={newMessage}
              className="outline-none resize-none max-h-10 break-all w-full text-sx lg:text-lg"
              autoFocus
              onChange={(e) => {
                setNewMessage(e.target.value);

                e.target.style.height = "auto";
                e.target.style.height = e.target.scrollHeight + "px";
              }}
            />

            <ul className="flex gap-2 justify-end text-sx lg:text-lg">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setMode("read");
                    setNewMessage(message);
                  }}
                >
                  Close
                </button>
              </li>
              <li>
                <button disabled={message === newMessage}>Save</button>
              </li>
            </ul>
          </form>
        ) : (
          <p className="break-all text-xs lg:text-lg w-full">{message}</p>
        )}
      </div>
    </li>
  );
};

export default UserMessageItem;
