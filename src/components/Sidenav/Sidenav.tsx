import { component$ } from "@builder.io/qwik";

import Star from "/icons/star.svg";
import Fire from "/icons/fire.svg";
import Next from "/icons/next.svg";
import Calendar from "/icons/calendar.svg";
import Trophy from "/icons/trophy.svg";
import Statistics from "/icons/statistics.svg";
import Crown from "/icons/crown.svg";
import Pad from "/icons/pad.svg";
import Download from "/icons/download.svg";
import Folder from "/icons/folder.svg";
import Windows from "/icons/windows.svg";
import Playstation from "/icons/playstation.svg";
import Xbox from "/icons/xbox.svg";

import Action from "/images/action.png";
import Strategy from "/images/strategy.png";
import Rpg from "/images/rpg.png";

export const Sidenav = component$(() => {
  return (
    <nav class="flex flex-row w-[250px] md:block hidden">
      <ul class="space-y-5 mt-11">
        <li>
          <a
            href="/"
            class="text-2xl block font-bold hover:text-[#FFFFFF66] transition-color transition-all"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/"
            class="text-2xl block font-bold hover:text-[#FFFFFF66] transition-color transition-all"
          >
            Reviews
          </a>
        </li>
        <li>
          <span class="text-2xl block font-bold hover:text-[#FFFFFF66] transition-color transition-all">
            New Releases
          </span>
          <ul class="flex flex-col gap-2 pt-3">
            <li>
              <a
                class="text-lg font-normal flex items-center gap-2 group"
                href="/"
              >
                <span class="p-2 bg-[#ffffff1a] text-white rounded-lg group-hover:bg-white group-hover:text-[#ffffff1a] transition-colors duration-300">
                  <img src={Star} alt="Star" width={18} height={18} />
                </span>
                <span class="text-base">Last 30 days</span>
              </a>
            </li>
            <li>
              <a
                class="text-lg font-normal flex items-center gap-2 group"
                href="/"
              >
                <span class="p-2 bg-[#ffffff1a] text-white rounded-lg group-hover:bg-white group-hover:text-[#ffffff1a] transition-colors duration-300">
                  <img src={Fire} alt="Fire" width={18} height={18} />
                </span>
                <span class="text-base">This week</span>
              </a>
            </li>
            <li>
              <a
                class="text-lg font-normal flex items-center gap-2 group"
                href="/"
              >
                <span class="p-2 bg-[#ffffff1a] text-white rounded-lg group-hover:bg-white group-hover:text-[#ffffff1a] transition-colors duration-300">
                  <img src={Next} alt="Next" width={18} height={18} />
                </span>
                <span class="text-base">Next week</span>
              </a>
            </li>
            <li>
              <a
                class="text-lg font-normal flex items-center gap-2 group"
                href="/"
              >
                <span class="p-2 bg-[#ffffff1a] text-white rounded-lg group-hover:bg-white group-hover:text-[#ffffff1a] transition-colors duration-300">
                  <img src={Calendar} alt="calendar" width={18} height={18} />
                </span>
                <span class="text-base">Release calendar</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <span class="text-2xl block font-bold hover:text-[#FFFFFF66] transition-color transition-all">
            Top
          </span>
          <ul class="flex flex-col gap-2 pt-3">
            <li>
              <a
                class="text-lg font-normal flex items-center gap-2 group"
                href="/"
              >
                <span class="p-2 bg-[#ffffff1a] text-white rounded-lg group-hover:bg-white group-hover:text-[#ffffff1a] transition-colors duration-300">
                  <img src={Trophy} alt="Trophy" width={18} height={18} />
                </span>
                <span class="text-base">Best of the year</span>
              </a>
            </li>
            <li>
              <a
                class="text-lg font-normal flex items-center gap-2 group"
                href="/"
              >
                <span class="p-2 bg-[#ffffff1a] text-white rounded-lg group-hover:bg-white group-hover:text-[#ffffff1a] transition-colors duration-300">
                  <img
                    src={Statistics}
                    alt="Statistics"
                    width={18}
                    height={18}
                  />
                </span>
                <span class="text-base">Popular in 2023</span>
              </a>
            </li>
            <li>
              <a
                class="text-lg font-normal flex items-center gap-2 group"
                href="/"
              >
                <span class="p-2 bg-[#ffffff1a] text-white rounded-lg group-hover:bg-white group-hover:text-[#ffffff1a] transition-colors duration-300">
                  <img src={Crown} alt="Crown" width={18} height={18} />
                </span>
                <span class="text-base">All time top 250</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="/"
            class="text-2xl block font-bold hover:text-[#FFFFFF66] transition-color transition-all"
          >
            All Games
          </a>
        </li>
        <li>
          <a
            href="/"
            class="text-2xl block font-bold hover:text-[#FFFFFF66] transition-color transition-all"
          >
            Browse
          </a>
          <ul class="flex flex-col gap-2 pt-3">
            <li>
              <a
                class="text-lg font-normal flex items-center gap-2 group"
                href="/"
              >
                <span class="p-2 bg-[#ffffff1a] text-white rounded-lg group-hover:bg-white group-hover:text-[#ffffff1a] transition-colors duration-300">
                  <img src={Pad} alt="Pad" width={18} height={18} />
                </span>
                <span class="text-base">Platforms</span>
              </a>
            </li>
            <li>
              <a
                class="text-lg font-normal flex items-center gap-2 group"
                href="/"
              >
                <span class="p-2 bg-[#ffffff1a] text-white rounded-lg group-hover:bg-white group-hover:text-[#ffffff1a] transition-colors duration-300">
                  <img src={Download} alt="Download" width={18} height={18} />
                </span>
                <span class="text-base">Stores</span>
              </a>
            </li>
            <li>
              <a
                class="text-lg font-normal flex items-center gap-2 group"
                href="/"
              >
                <span class="p-2 bg-[#ffffff1a] text-white rounded-lg group-hover:bg-white group-hover:text-[#ffffff1a] transition-colors duration-300">
                  <img src={Folder} alt="Folder" width={18} height={18} />
                </span>
                <span class="text-base">Collections</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="/"
            class="text-2xl block font-bold hover:text-[#FFFFFF66] transition-color transition-all"
          >
            Platforms
          </a>
          <ul class="flex flex-col gap-2 pt-3">
            <li>
              <a
                class="text-lg font-normal flex items-center gap-2 group"
                href="/"
              >
                <span class="p-2 bg-[#ffffff1a] text-white rounded-lg group-hover:bg-white group-hover:text-[#ffffff1a] transition-colors duration-300">
                  <img src={Windows} alt="Windows" width={18} height={18} />
                </span>
                <span class="text-base">PC</span>
              </a>
            </li>
            <li>
              <a
                class="text-lg font-normal flex items-center gap-2 group"
                href="/"
              >
                <span class="p-2 bg-[#ffffff1a] text-white rounded-lg group-hover:bg-white group-hover:text-[#ffffff1a] transition-colors duration-300">
                  <img
                    src={Playstation}
                    alt="Playstation"
                    width={18}
                    height={18}
                  />
                </span>
                <span class="text-base">Playstation</span>
              </a>
            </li>
            <li>
              <a
                class="text-lg font-normal flex items-center gap-2 group"
                href="/"
              >
                <span class="p-2 bg-[#ffffff1a] text-white rounded-lg group-hover:bg-white group-hover:text-[#ffffff1a] transition-colors duration-300">
                  <img src={Xbox} alt="Xbox" width={18} height={18} />
                </span>
                <span class="text-base">Xbox one</span>
              </a>
            </li>
            <li>
              <a
                class="text-lg font-normal flex items-center gap-2 group"
                href="/"
              >
                <span class="p-2 bg-[#ffffff1a] text-white rounded-lg group-hover:bg-white group-hover:text-[#ffffff1a] transition-colors duration-300">
                  <img src={Calendar} alt="calendar" width={18} height={18} />
                </span>
                <span class="text-base">Release calendar</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="/"
            class="text-2xl block font-bold hover:text-[#FFFFFF66] transition-color transition-all"
          >
            Genres
          </a>
          <ul class="flex flex-col gap-2 pt-3 pl-0.5">
            <li>
              <a class="text-lg font-normal flex items-center gap-2" href="/">
                <img src={Action} alt="Action" width={32} height={32} />
                <span class="text-base">Action</span>
              </a>
            </li>
            <li>
              <a class="text-lg font-normal flex items-center gap-2" href="/">
                <img src={Strategy} alt="Strategy" width={32} height={32} />
                <span class="text-base">Strategy</span>
              </a>
            </li>
            <li>
              <a class="text-lg font-normal flex items-center gap-2" href="/">
                <img src={Rpg} alt="Rpg" width={32} height={32} />
                <span class="text-base">RPG</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
});
