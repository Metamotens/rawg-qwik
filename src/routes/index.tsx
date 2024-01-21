import {
  $,
  component$,
  useContext,
  useOnDocument,
  useTask$,
} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Card } from "~/components/card/card";
import type { GameState } from "~/context/games.context";
import { GameContext } from "~/context/games.context";
import type { Game } from "~/models/game";

export default component$(() => {
  const gamesContext = useContext<GameState>(GameContext);

  useTask$(async ({ track }) => {
    track(() => gamesContext.page);
    gamesContext.loading = true;

    const res = await fetch(
      `https://api.rawg.io/api/games?key=${import.meta.env.PUBLIC_API_KEY}&page=${gamesContext.page}&page_size=20`
    );
    const data = await res.json();
    const games = [...gamesContext.games, ...(data.results as Game[])];

    gamesContext.games = games;
    gamesContext.loading = false;
  });

  useOnDocument(
    "scroll",
    $(() => {
      const maxScroll = document.body.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;
      currentScroll >= maxScroll && ++gamesContext.page;
    })
  );

  return (
    <section class="flex flex-col w-full">
      <h1 class="text-7xl font-bold mb-2">New and trending</h1>
      <h3 class="mb-6">Based on player counts and release date</h3>
      <div class="grid grid-cols-4 gap-6">
        {gamesContext.games.map((game) => (
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
