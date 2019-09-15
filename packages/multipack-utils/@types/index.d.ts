export type TToNumber = (value?: string | number) => number

export interface MultipackUtils {
  toNumber: TToNumber
}

export * from '../src'
export { default as multipackUtils } from '../src'
