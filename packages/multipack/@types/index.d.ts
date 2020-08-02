import { TUseCounter } from '@episclera/multipack-with-react'
import { TToNumber } from '@episclera/multipack-utils/@types'

export interface Multipack {
  toNumber: TToNumber
  useCounter: TUseCounter
}

export const useCounter: TUseCounter
export const toNumber: TToNumber
declare const multipack: Multipack

export default multipack
