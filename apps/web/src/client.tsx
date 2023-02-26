import { hydrate } from 'solid-js/web';
import { App } from './App/App';

hydrate(() => <App hostname={document.location.hostname} />, document);
