import { SquarePen } from "lucide-react";

const UserMessageItem = ({ message }: { message: string }) => {
  return (
    <div className="flex justify-end items-center gap-6">
      <div className="flex items-end max-w-[70%]"></div>
      <button
        className="size-5 md:size-10 border border-[#BFBDBD] rounded-lg text-[#7c7676] flex items-center justify-center hover:cursor-pointer"
        type="button"
        aria-label="Edit button"
      >
        <SquarePen />
      </button>

      <div className="px-4 py-2 md:px-10 md:py-4 bg-white rounded-2xl max-w-[70%] flex items-center gap-6">
        <img src="/user_photo.png" alt="user photo" className="size-10" />
        <p className="break-all">{message}</p>
      </div>
    </div>
  );
};

export default UserMessageItem;
