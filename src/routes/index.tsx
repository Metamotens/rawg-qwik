import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { Card } from "~/components/card/card";
import type { Game } from "~/models/game";

export const useGames = routeLoader$(async () => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${import.meta.env.PUBLIC_API_KEY}`
  );
  const games = await res.json();
  return games.results as Game[];
});

export default component$(() => {
  const games = useGames();

  return (
    <section class="flex flex-col w-full">
      <h1 class="text-7xl font-bold mb-2">New and trending</h1>
      <h3 class="mb-6">Based on player counts and release date</h3>
      <div class="grid grid-cols-4 gap-6">
        {games.value.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "RAWG Clone",
  meta: [
    {
      name: "RAWG Clone",
      content: "RAWG Clone made with Qwik",
    },
  ],
};
