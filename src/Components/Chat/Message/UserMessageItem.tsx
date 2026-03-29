import { SquarePen } from "lucide-react";

const UserMessageItem = ({ message }: { message: string }) => {
  return (
    <li className="flex ml-auto items-center gap-2 lg:gap-6 max-w-[90%]">
      <button
        className="size-5 md:size-10 border border-(--editMessageBorder) rounded-lg text-(--editMessageIcon) flex items-center justify-center hover:cursor-pointer"
        type="button"
        aria-label="Edit button"
      >
        <SquarePen />
      </button>

      <div className="px-4 py-2 md:px-10 md:py-4 bg-white rounded-2xl  flex items-center gap-6 w-full">
        <img src="/user_photo.png" alt="user photo" className="size-10" />
        <p className="break-all text-xs lg:text-lg w-full">{message}</p>
      </div>
    </li>
  );
};

export default UserMessageItem;
