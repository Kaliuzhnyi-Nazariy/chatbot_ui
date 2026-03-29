import FindPhoto from "../Icons/FindPhoto";
import PromptCard from "./PromptCard/PromptCard";
import { Eye, Lightbulb } from "lucide-react";

const EmptyState = ({ addMessage }: { addMessage: (data: string) => void }) => {
  return (
    <>
      <header className="flex flex-col gap-6">
        <h1
          className="inline-block text-2xl sm:text-4xl lg:text-5xl lg:leading-16 font-bold
      bg-linear-to-r from-(--primary300) to-[#FF3B3B]
      bg-clip-text text-transparent from-0% to-50%  "
        >
          Hi Milano Cherry
        </h1>
        <p className="lg:text-4xl lg:leading-12 font-semibold text-(--neutral500) text-lg sm:text-2xl">
          How can i help you today
        </p>
      </header>

      <div className="relative flex-1 flex items-center justify-center overflow-x-hidden">
        <div className="flex items-center justify-between w-full">
          <ul className="hidden xl:grid grid-cols-3 items-center gap-6 px-4 ">
            <li className="transition-all duration-200">
              <button
                type="button"
                onClick={() =>
                  addMessage("Create an image for my presentation")
                }
              >
                <PromptCard
                  message="Create an image for my presentation"
                  buttonText={<FindPhoto />}
                  middleColor="#223FFA"
                  endColor="rgba(47,130,239,0.4)"
                />
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => addMessage("What to do with kids’ art")}
              >
                <PromptCard
                  message="What to do with kids’ art"
                  buttonText={<Lightbulb className="text-[#f1a62d] size-6" />}
                  middleColor="#F1A62D"
                  endColor="#F1A62D66"
                />
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() =>
                  addMessage("Find the decade that a photo is from")
                }
              >
                <PromptCard
                  message="Find the decade that a photo is from"
                  buttonText={<Eye className="text-[#37C390] size-6" />}
                  middleColor="#37C390"
                  endColor="#37C39066"
                />
              </button>
            </li>
          </ul>

          <ul className="flex flex-col mx-auto items-center gap-4 xl:hidden">
            <li className="bg bg-linear-to-tr from-[#2F82EF66] via-[#223FFA] to-[#ffffff99] p-px rounded-2xl hover:cursor-pointer">
              <button
                className="bg-white px-2 py-1 rounded-2xl flex text-sm md:text-[16px] items-center justify-center gap-2 text-(--neutral700)"
                onClick={() =>
                  addMessage("Create an image for my presentation")
                }
                type="button"
              >
                <FindPhoto />
                <p>Create an image for my presentation</p>
              </button>
            </li>
            <li className="bg bg-linear-to-tr from-[#F1A62D66] via-[#F1A62D] to-[#ffffff99] p-px rounded-2xl hover:cursor-pointer">
              <button
                type="button"
                className="bg-white px-2 py-1 rounded-2xl flex text-sm md:text-[16px] items-center justify-center gap-2 text-(--neutral700)"
                onClick={() => addMessage("What to do with kids’ art")}
              >
                <Lightbulb className="text-[#f1a62d] size-6" />
                <p>What to do with kids’ art</p>
              </button>
            </li>
            <li className="bg bg-linear-to-tr from-[#37C39066] via-[#37C390] to-[#ffffff99] p-px rounded-2xl hover:cursor-pointer">
              <button
                type="button"
                onClick={() =>
                  addMessage("Find the decade that a photo is from")
                }
                className="bg-white px-2 py-1 rounded-2xl flex text-sm md:text-[16px] items-center justify-center gap-2 text-(--neutral700)"
              >
                <Eye className="text-[#37C390] size-6" />{" "}
                <p>Find the decade that a photo is from</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <img
        src="/robot.png"
        alt="walking robot with book"
        className="
    absolute 
    top-1/2 
    -right-[11%] 
    -translate-1/2
    hidden min-[1440px]:block
    pointer-events-none
  "
      />
    </>
  );
};

export default EmptyState;
