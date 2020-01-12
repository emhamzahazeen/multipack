import { toNumber } from 'multipack-utils'
import useCounter from 'multipack-with-react'
import { Multipack } from '../@types'

const multipack: Multipack = {
  toNumber,
  useCounter,
}

export { toNumber, useCounter }
export default multipack
