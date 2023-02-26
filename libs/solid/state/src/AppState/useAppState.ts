import { useContext } from "solid-js";

import { AppStateContext } from "./AppState";

export function useAppState() {
  return useContext(AppStateContext);
}