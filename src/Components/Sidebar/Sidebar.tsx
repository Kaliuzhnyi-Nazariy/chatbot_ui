import { Compass, History, House, Plus } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-22 bg-(--neutral100) flex lg:flex-col px-3 py-5 lg:px-6 lg:py-10 rounded-full justify-between">
      <div className="flex lg:flex-col gap-2 lg:gap-6">
        <img src="/chat_icon.png" alt="chat icon" className="size-10" />
        <button className="rounded-xl p-2 size-10 bg-(--primary300) cursor-pointer">
          <Plus className="size-6 text-white" />
        </button>
      </div>

      <ul className="flex lg:flex-col gap-1 lg:gap-2">
        <li>
          <button className="size-10 flex items-center justify-center">
            <House className="text-(--icon)" />
          </button>
        </li>
        <li>
          <button className="size-10 flex items-center justify-center">
            <History className="size-6 text-(--inactiveicon) hover:text-(--icon) cursor-pointer transition-colors duration-250" />
          </button>
        </li>
        <li>
          <button className="size-10 flex items-center justify-center">
            <Compass className="size-6 text-(--inactiveicon) hover:text-(--icon) cursor-pointer transition-colors duration-250" />
          </button>
        </li>
      </ul>

      <img src="/user_photo.png" alt="user photo" className="size-10" />
    </aside>
  );
};

export default Sidebar;
