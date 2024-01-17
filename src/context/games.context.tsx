import { createContextId } from "@builder.io/qwik";
import type { Game } from "~/models/game";

export interface GameState {
  games: Game[];
  page: number;
  loading: boolean;
  error: string;
}

export const GameContext = createContextId<GameState>("GameContext");
