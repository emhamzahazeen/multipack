import { TGetEndValueFromActionMethod } from '../../types'

/**
 * Used to get end value from an arg
 * @param arg - represents aw value to extract end value
 * @param answers - user prompt answers
 */
const getEndValueFromActionMethod: TGetEndValueFromActionMethod = (
  arg,
  answers,
) => {
  if (typeof arg === 'function') {
    return arg(answers)
  }

  return arg
}

export default getEndValueFromActionMethod
