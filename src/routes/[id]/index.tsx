import { Resource, component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import type { Game } from "~/models/game";

export const useGameDetail = routeLoader$(async ({ env, params }) => {
  const res = await fetch(
    `https://api.rawg.io/api/games/${params.id}?key=${env.get("PUBLIC_API_KEY")}`
  );
  const data = await res.json();

  return data as Game;
});

export default component$(() => {
  const game = useGameDetail();

  return (
    <Resource
      value={game}
      onPending={() => <div>loading..</div>}
      onResolved={(game: Game) => (
        <article class="flex flex-row relative w-full">
          <Link href="/" class="pt-7 pl-4 cursor-pointer z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-left"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
          </Link>
          {!game.id ? (
            <h1 class="text-6xl text-white font-bold text-balance m-4">
              Game not found
            </h1>
          ) : (
            <>
              <img
                src={game.background_image}
                alt="game image"
                class="absolute w-full object-cover h-96 opacity-35"
                loading="lazy"
              />
              <div class="flex relative flex-col">
                <h1 class="text-6xl text-white font-bold text-balance m-4">
                  {game.name}
                </h1>
              </div>
            </>
          )}
        </article>
      )}
      onRejected={(error) => <div>{error.message}</div>}
    />
  );
});
