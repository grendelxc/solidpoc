import { SiteFooter, SiteHeader } from '@solidpoc/solid-components';
import { StandardLayout } from '@solidpoc/solid-layouts';

export function SearchPage() {
  return (
    <div class='SearchPage'>
      <StandardLayout>
        <SiteHeader>SITE HEADER</SiteHeader>
        <h1>SEARCH PAGE</h1>
        <SiteFooter>SITE FOOTER</SiteFooter>
      </StandardLayout>
    </div>
  )
}