import { splitProps } from 'solid-js';
import { A, AnchorProps } from '@solidjs/router';

export interface LinkProps extends AnchorProps {}

export function Link(p: LinkProps) {
  const [props, anchorProps] = splitProps(p, ['children']);
  return (
    <A {...anchorProps}>{props.children}</A>
  )
}