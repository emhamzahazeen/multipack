import runPrompts from './runPrompts'
import runActions from './runActions'
import { TRunGenerator } from '../../types'

/**
 *  Used to run generators
 * @param generator - generator
 */
/* istanbul ignore next */
const runGenerator: TRunGenerator = async generator => {
  let answers = {}

  if (generator.prompts) {
    answers = await runPrompts(generator.prompts)
  }

  await runActions(generator.actions, answers)
}

export default runGenerator
