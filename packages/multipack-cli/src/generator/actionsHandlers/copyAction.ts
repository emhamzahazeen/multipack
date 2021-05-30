import { copy } from 'fs-extra'
import cliSpinner from '../../utils/cliSpinner'
import getEndValueFromAny from '../../utils/getEndValueFromAny'
import { TCopyAction, ActionResult } from '../../../types'

/**
 * Used to run copy actions
 * @param action - represents a copy action from generator actions array
 * @param answers - responses from user
 */
/* istanbul ignore next */
const copyAction: TCopyAction = async (action, answers) => {
  const parsedFiles = Object.entries(
    getEndValueFromAny(action.files, answers) as {
      [key: string]: string
    },
  )

  const actionResult = (await Promise.all(
    parsedFiles.map(
      ([from, to]) =>
        new Promise(resolve => {
          const copySpinner = cliSpinner(
            `Copying files from "${from}" to "${to}"`,
          ).start()

          copy(from, to, error => {
            if (error) {
              copySpinner.fail()
              resolve({ error })
            } else {
              copySpinner.succeed()
              resolve({ error: false })
            }
          })
        }),
    ),
  )) as ActionResult[]

  return actionResult
}

export default copyAction
