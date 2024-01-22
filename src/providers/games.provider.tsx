import {
  Slot,
  component$,
  useContextProvider,
  useSignal,
  useStore,
} from "@builder.io/qwik";
import { GameContext } from "~/context/games.context";
import type { GameState } from "~/context/games.context";

export const GameProvider = component$(() => {
  const gamesStore = useStore<GameState>({
    games: useSignal([]),
    search: "",
    page: 1,
    loading: false,
    error: "",
  });

  useContextProvider(GameContext, gamesStore);

  return <Slot />;
});
