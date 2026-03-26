const MessageItem = ({
  message,
  role,
}: {
  message: string;
  role: "user" | "bot";
}) => {
  console.log({ role });
  return (
    <>
      <div className="grid grid-cols-[auto_1fr] gap-6 items-center">
        <div className="size-10 bg-gray-500"></div>
        <div className="px-10 py-4 bg-white flex items-center gap-6 rounded-2xl">
          <img src="/user_photo.png" alt="user photo" className="size-10" />
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default MessageItem;
