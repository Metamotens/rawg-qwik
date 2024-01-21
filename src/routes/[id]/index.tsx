import { component$, useContext, useSignal, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { GameContext } from "~/context/games.context";
import type { GameState } from "~/context/games.context";
import type { Game } from "~/models/game";

export default component$(() => {
  const loc = useLocation();
  const gameContext = useContext<GameState>(GameContext);

  const game = useSignal<Game | undefined>();

  useTask$(async () => {
    const findGame = gameContext.games.find(
      (game) => game.id === parseInt(loc.params.id)
    );

    if (!findGame) {
      const res = await fetch(
        `https://api.rawg.io/api/games/${loc.params.id}?key=${import.meta.env.PUBLIC_API_KEY}`
      );

      const data = await res.json();
      game.value = data as Game;
    } else {
      game.value = findGame;
    }
  });

  return !game.value?.id ? (
    <h1 class="text-6xl text-white font-bold text-balance m-4">
      Game not found
    </h1>
  ) : (
    <article class="flex flex-col relative w-full">
      <img
        src={game.value.background_image}
        alt="game image"
        class="absolute w-full object-cover h-96 opacity-35"
        loading="lazy"
      />
      <div class="flex relative flex-col">
        <h1 class="text-6xl text-white font-bold text-balance m-4">
          {game.value.name}
        </h1>
      </div>
    </article>
  );
});
