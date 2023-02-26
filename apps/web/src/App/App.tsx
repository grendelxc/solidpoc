import { Router } from '@solidjs/router';

import { AppStateProvider } from '@solidpoc/solid-state';

import { AppNode } from '../AppNode/AppNode';

interface AppProps {
  hostname: string;
}

let count = 0;
export function App(props: AppProps) {
  // setInterval(() => {
  //   console.log('App.tsx', count++);
  // }, 1000);

  return (
    <Router>
      <AppNode />
    </Router>
  );
}
