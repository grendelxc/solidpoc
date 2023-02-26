import { SiteFooter, SiteHeader } from '@solidpoc/solid-components';
import { StandardLayout } from '@solidpoc/solid-layouts';

export function HomePage() {
  // setInterval(() => {
  //   console.log('Home.tsx   ')
  // }, 1000)
  return (
    <div class='HomePage'>
      <StandardLayout>
        <SiteHeader>SITE HEADER</SiteHeader>
        <h1>HOME PAGE</h1>
        <SiteFooter>SITE FOOTER</SiteFooter>
      </StandardLayout>
    </div>
  )
}