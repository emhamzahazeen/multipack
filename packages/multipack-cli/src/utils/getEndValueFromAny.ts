/* eslint-disable @typescript-eslint/no-unsafe-return */
import { TGetEndValueFromAny } from '../../types'

/**
 * Used to get end value from an rawValue
 * @param rawValue - represents an raw value to extract end value
 * @param fnArgs - if first argument is function then the function will be called with this argument
 */
const getEndValueFromAny: TGetEndValueFromAny = (rawValue, ...fnArgs) => {
  if (typeof rawValue === 'function') {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return rawValue(...fnArgs)
  }

  return rawValue
}

export default getEndValueFromAny
