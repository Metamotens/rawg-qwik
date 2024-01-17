import {
  Slot,
  component$,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { GameContext } from "~/context/games.context";
import type { GameState } from "~/context/games.context";

export const GameProvider = component$(() => {
  const gamesStore = useStore<GameState>({
    games: [],
    page: 1,
    loading: true,
    error: "",
  });

  useContextProvider(GameContext, gamesStore);

  return <Slot />;
});
