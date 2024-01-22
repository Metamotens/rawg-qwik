import { Resource, component$, useSignal, useTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Card } from "~/components/card/card";
import type { Game } from "~/models/game";

export default component$(() => {
  const loc = useLocation();
  const games = useSignal<Game[]>([]);

  useTask$(async () => {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${import.meta.env.PUBLIC_API_KEY}&search=${loc.params.id}}`
    );
    const data = await res.json();
    games.value = data.results as Game[];
  });

  return (
    <Resource
      value={games}
      onPending={() => <div>loading..</div>}
      onResolved={(games: Game[]) => (
        <section class="flex flex-col w-full">
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
