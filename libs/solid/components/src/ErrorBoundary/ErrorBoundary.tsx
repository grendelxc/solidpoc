import { ErrorBoundary as SolidErrorBoundary, resetErrorBoundaries } from "solid-js"
import type { JSXElement } from 'solid-js';

import { Button } from '../Button/Button';

export interface ErrorBoundaryFallbackProps {
  error: Error;
  reset(): void;
  children: JSXElement
}

export interface ErrorBoundaryProps {
  children: JSXElement
}

export function hardReset() {
  resetErrorBoundaries();
}

export function ErrorBoundaryFallback(props: ErrorBoundaryFallbackProps) {
  return (
    <>
      <h2>Error: {props.error.message}</h2>
      <Button onClick={props.reset}>Reset</Button>
    </>
  )
}

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return (
    <SolidErrorBoundary fallback={ErrorBoundaryFallback}>
      {props.children}
    </SolidErrorBoundary>
  )
}