import runPrompts from './runPrompts'
import runActions from './runActions'
import { TGenerator } from '../../types'

/**
 *  Used to run generatorConfigs
 * @param generatorConfig - generatorConfig
 */
/* istanbul ignore next */
const generator: TGenerator = async generatorConfig => {
  let answers = {}

  if (generatorConfig.prompts) {
    answers = await runPrompts(generatorConfig.prompts)
  }

  const generatorConfigActions =
    typeof generatorConfig.actions === 'function'
      ? generatorConfig.actions(answers)
      : generatorConfig.actions

  const actionsRunResults = await runActions(generatorConfigActions)

  if (actionsRunResults.some(({ error }) => error)) {
    process.exit(1)
  }
}

export default generator
