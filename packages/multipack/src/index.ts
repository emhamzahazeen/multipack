import * as multipackUtils from 'multipack-utils'
import { Multipack, TSum } from '../@types'

const sum: TSum = (a, b) =>
  multipackUtils.toNumber(a) + multipackUtils.toNumber(b)

const multipack: Multipack = {
  sum,
}

export { sum }
export default multipack
