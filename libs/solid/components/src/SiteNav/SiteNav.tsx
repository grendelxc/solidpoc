import { JSXElement } from "solid-js"
import { Link } from "../Link/Link"

import { routes } from '@solidpoc/solid-routes';

export function SiteNavLink(props: { href: string, children: JSXElement }) {
  return <Link href={props.href} inactiveClass='inactive' activeClass='active'>{props.children}</Link>
}

export function SiteNav() {
  return (
    <div class='SiteNav'>
      <ul>
        <li><SiteNavLink href={routes.home}>Home</SiteNavLink></li>
        <li><SiteNavLink href={routes.player}>Player</SiteNavLink></li>
        <li><SiteNavLink href={routes.search}>Search</SiteNavLink></li>
        <li><SiteNavLink href={routes.settings}>Settings</SiteNavLink></li>
        <li><SiteNavLink href='/alkdsjfalsdkjfe'>Not Found</SiteNavLink></li>
      </ul>
    </div>
  )
}