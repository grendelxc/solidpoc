import { createContext } from "solid-js"
import type { JSXElement } from 'solid-js';
import { createStore } from 'solid-js/store';

export interface AppStateProviderProps {
  initialState: Partial<typeof initialAppState>
  children: JSXElement
}

export const initialAppState = {
  hostname: ''
}

export const AppStateContext = createContext([initialAppState, {}]);

export function AppStateProvider(props: AppStateProviderProps) {
  const [appState, setAppState] = createStore({...initialAppState, ...props.initialState});
  const contextValue = [
    appState, // @TODO - This can be fancier
    setAppState // @TODO - This can be fancier
  ]

  return (
    <AppStateContext.Provider value={contextValue}>
      {props.children}
    </AppStateContext.Provider>
  )
}

