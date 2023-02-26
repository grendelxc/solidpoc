import { Route, Routes } from '@solidjs/router';

import { HomePage, SearchPage, PlayerPage, SettingsPage, NotFound } from '@solidpoc/solid-pages';
import { ErrorBoundary } from '@solidpoc/solid-components';
import { routes } from '@solidpoc/solid-routes';

export function AppMain() {
  return (
    <div class='AppMain'>
      <ErrorBoundary>
        <Routes>
          <Route path={routes.player} component={PlayerPage} />
          <Route path={routes.search} component={SearchPage} />
          <Route path={routes.settings} component={SettingsPage} />
          <Route path={routes.home} component={HomePage} />
          <Route path='*' component={NotFound} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}
