import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { getGamePlatformImages } from "~/helpers/game.helper";
import type { Game } from "~/models/game";

export interface CardProps {
  game: Game;
}

export const Card = component$<CardProps>(({ game }) => {
  return (
    <div class="relative">
      <div class="flex flex-col bg-neutral-800 hover:scale-105 rounded-lg group hover:absolute lg:hover:top-0 lg:hover:left-0 lg:hover:z-10 transition-transform duration-300">
        <img
          class="rounded-t-lg h-48"
          src={game.background_image}
          alt="game image"
          loading="lazy"
          width={400}
          height={300}
        />

        <div class="p-3 text-xs">
          <div class="flex flex-row py-2 space-x-1.5">
            {getGamePlatformImages(game.platforms).map((slug) => (
              <img
                key={slug}
                src={slug}
                class="size-4"
                alt="platform"
                loading="lazy"
                width={14}
                height={14}
              />
            ))}
          </div>
          <div class="text-2xl font-bold h-20 hover:text-[#FFFFFF66] transition-color transition-all cursor-pointer">
            <Link href={game.id.toString()}>{game.name}</Link>
          </div>

          <div class="hidden group-hover:block">
            <div class="flex justify-between py-2 border-b border-gray-600">
              <span class="text-[#FFFFFF66]">Release date:</span>
              <span>{game.released}</span>
            </div>
            <div class="flex justify-between py-2 border-b border-gray-600">
              <span class="text-[#FFFFFF66]">Genres</span>
              <div class="space-x-2">
                {game.genres.map((genre) => (
                  <span
                    key={genre.id}
                    class="underline hover:text-[#FFFFFF66] transition-color transition-all cursor-pointer"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
            <div class="flex justify-between py-2 mb-2">
              <span class="text-[#FFFFFF66]">Chart</span>
              <span class="underline hover:text-[#FFFFFF66] transition-color transition-all cursor-pointer">
                #10 Top 2024
              </span>
            </div>
            <div class="rounded-lg bg-[#FFFFFF12] transition-color transition-all hover:text-[#FAD860] px-2 py-3 text-[12px] cursor-pointer mb-2">
              Show more like this
            </div>
            <div class="rounded-lg bg-[#FFFFFF12] transition-color transition-all hover:text-[#FAD860] px-2 py-3 text-[12px] cursor-pointer">
              Hide this game
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
