import { access } from 'fs'
import cliSpinner from '../../utils/cliSpinner'
import { TNoFilesExistsRule, LinterRuleResult } from '../../../types'

/**
 * Used to run no-files-exists rules
 * @param rule - represents a no-files-exists rule from linter config rules
 */
const noFilesExistsRule: TNoFilesExistsRule = async ({
  type,
  name,
  description,
  files,
}) => {
  const ruleResult = (await Promise.all(
    files.map(
      fileName =>
        new Promise(resolve => {
          const spinner = cliSpinner(
            `Checking if "${fileName}" doesn't exists`,
          ).start()

          access(fileName, error => {
            if (error) {
              spinner.succeed()
              resolve({ error: false })
            } else {
              const ruleDescription =
                typeof description === 'function'
                  ? description({ fileName })
                  : description

              spinner.fail()
              resolve({
                error: new Error(`[${type}/${name}] - ${ruleDescription}`),
              })
            }
          })
        }),
    ),
  )) as LinterRuleResult[]

  return ruleResult
}

export default noFilesExistsRule
