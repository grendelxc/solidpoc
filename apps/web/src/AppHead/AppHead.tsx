import { useLocation } from '@solidjs/router';
import { HydrationScript } from 'solid-js/web';

export function AppHead() {
  const { query, pathname } = useLocation();

  return (
    <head>
      <title>Solid SSR: {pathname}</title>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <HydrationScript />
    </head>
  );
}
