import { createResource } from 'solid-js';
import type { ResourceOptions, ResourceFetcherInfo } from 'solid-js';

export interface CallMockApiArgs {
  timeout?: number,
  mockData?: CallMockApiReturn
}

export type CallMockApiReturn = Record<string, unknown> | undefined;
export type GetStuffNThingsArgs = CallMockApiArgs;
export type GetStuffNThingsOptions<T = any, S = unknown> = ResourceOptions<T, S>;

export async function callMockApi({ timeout, mockData }: CallMockApiArgs) {
  // @TODO - HARDCODED
  const result = await fetch(`http://localhost:3100/api?timeout=${timeout}`);
  console.log('callMockApi: RESULT', result);
  return mockData;
}

export function createFetcher<A, R>(apiCall: (args: any) => Promise<R>) {
  return async (args: A, info: ResourceFetcherInfo<R>) => {
    return apiCall(args)
  };
}

export function getStuffNThings(args?: GetStuffNThingsArgs, options?: ResourceOptions<CallMockApiReturn>) {
  if (!args || !args?.timeout) {
    args = { timeout: 1000 };
  }

  return createResource<CallMockApiReturn, GetStuffNThingsArgs>(() => args, createFetcher(callMockApi), options);
}