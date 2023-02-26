import { SiteFooter, SiteHeader } from '@solidpoc/solid-components';
import { StandardLayout } from '@solidpoc/solid-layouts';

export function PlayerPage() {
  // setInterval(() => {
  //   console.log('PlayerPage.tsx')
  // }, 1000)

  return (
    <div class='PlayerPage'>
      <StandardLayout>
        <SiteHeader>SITE HEADER</SiteHeader>
        <h1>PlAYER PAGE</h1>
        <SiteFooter>SITE FOOTER</SiteFooter>
      </StandardLayout>
    </div>
  )
}