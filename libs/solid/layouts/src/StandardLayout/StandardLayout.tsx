import { JSX } from 'solid-js';

export interface StandardLayoutProps {
  children: JSX.Element
}

export function StandardLayout({ children }: StandardLayoutProps) {
  return (
    <>
      {children}
    </>
  )
}