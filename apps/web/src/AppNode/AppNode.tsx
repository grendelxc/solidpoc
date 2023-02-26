import { isServer } from 'solid-js/web';

import { AppHead } from '../AppHead/AppHead';
import { AppMain } from '../AppMain/AppMain';

export interface AppNodeProps {}

export function AppNode(props: AppNodeProps) {
  return (
    <html lang='en'>
      <AppHead />
      <body>
        <div>Rendering stage: {isServer ? 'SERVER RENDERED' : 'CLIENT RENDERED'}</div>
        <AppMain />
        <script type='module' src='/js/client.js' async></script>
      </body>
    </html>
  );
}
