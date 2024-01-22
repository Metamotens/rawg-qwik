import {
  $,
  Resource,
  component$,
  useContext,
  useOnDocument,
  useTask$,
} from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { Card } from "~/components/card/card";
import type { GameState } from "~/context/games.context";
import { GameContext } from "~/context/games.context";
import type { Game } from "~/models/game";

export const useGames = routeLoader$(async ({ env }) => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${env.get("PUBLIC_API_KEY")}`
  );
  const data = await res.json();
  return data.results as Game[];
});

export default component$(() => {
  const gamesLoader = useGames();
  const gamesContext = useContext<GameState>(GameContext);

  useTask$(() => {
    gamesContext.games.value = gamesLoader.value;
  });

  useTask$(async ({ track }) => {
    track(() => gamesContext.page);

    const res = await fetch(
      `https://api.rawg.io/api/games?key=${import.meta.env.PUBLIC_API_KEY}&page=${gamesContext.page}&page_size=20`
    );
    const data = await res.json();
    const games = [...gamesContext.games.value, ...(data.results as Game[])];
    gamesContext.games.value = games;
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
    <Resource
      value={gamesContext.games}
      onPending={() => <div>loading..</div>}
      onResolved={(games: Game[]) => (
        <section class="flex flex-col w-full">
          <h1 class="text-7xl font-bold mb-2">New and trending</h1>
          <h3 class="mb-6">Based on player counts and release date</h3>
          <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {games.map((game: Game) => (
              <Card key={game.id} game={game} />
            ))}
          </div>
        </section>
      )}
    />
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
