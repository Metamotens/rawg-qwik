import { component$ } from "@builder.io/qwik";

import Bell from "/icons/bell.svg";
import Plus from "/icons/plus.svg";
import Dots from "/icons/dots.svg";
import Search from "/icons/search.svg";

export interface HeaderProps {}

export const Header = component$<HeaderProps>(() => {
  return (
    <header class="flex flew-row justify-between items-center w-full pt-7 pb-8">
      <span class="text-lg tracking-[5px] font-black pr-7">RAWG</span>
      <div class="relative w-full pr-7">
        <div class="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
          <img src={Search} alt="bell" width={14} height={14} />
        </div>
        <input
          type="search"
          placeholder="Search 861,608 games"
          class="block w-full p-3 ps-10 text-sm outline-none text-gray-900 rounded-full bg-[#3b3b3b] hover:bg-white focus:bg-white transition-colors duration-300"
        />
      </div>
      <div class="flex flew-row w-64 space-x-4 justify-end text-sm">
        <span class="cursor-pointer hover:underline">My library</span>
        <img
          src={Bell}
          alt="bell"
          width={20}
          height={20}
          class="cursor-pointer"
        />
        <img
          src={Plus}
          alt="plus"
          width={20}
          height={20}
          class="cursor-pointer"
        />
        <span class="cursor-pointer hover:underline font-bold">API</span>
        <img
          class="cursor-pointer"
          src={Dots}
          alt="dots"
          width={14}
          height={14}
        />
      </div>
    </header>
  );
});
