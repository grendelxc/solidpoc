import { Settings, SiteFooter, SiteHeader } from '@solidpoc/solid-components';
import { StandardLayout } from '@solidpoc/solid-layouts';

export function SettingsPage() {
  return (
    <div class='SettingsPage'>
      <StandardLayout>
        <SiteHeader>SITE HEADER</SiteHeader>
        <h1>SETTINGS PAGE</h1>
        <Settings />
        <SiteFooter>SITE FOOTER</SiteFooter>
      </StandardLayout>
    </div>
  )
}