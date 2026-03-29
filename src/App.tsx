import ChatContainer from "./Components/Chat/ChatContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="px-5 py-9 min-[1024px]:px-10 min-[1024px]:py-18 grid grid-rows-[80px_auto] lg:grid-rows-1 min-[1024px]:grid-cols-[auto_1fr] h-screen gap-10 min-h-0 ">
      <Sidebar />
      <ChatContainer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
