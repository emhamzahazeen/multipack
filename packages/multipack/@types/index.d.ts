export type TSum = (a: number | string, b: number | string) => number

export interface Multipack {
  sum: TSum
}

export * from '../src'
export { default as multipack } from '../src'
