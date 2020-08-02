import { toNumber } from '@episclera/multipack-utils'
import useCounter from '@episclera/multipack-with-react'
import { Multipack } from '../@types'

const multipack: Multipack = {
  toNumber,
  useCounter,
}

export { toNumber, useCounter }
export default multipack
