import { remove } from 'fs-extra'
import cliSpinner from '../../utils/cliSpinner'
import { TRemoveAction, ActionResult } from '../../../types'

/**
 * Used to run remove actions
 * @param action - represents a remove action from generator actions array
 */
/* istanbul ignore next */
const removeAction: TRemoveAction = async action => {
  const actionResult = (await Promise.all(
    action.files.map(
      fileName =>
        new Promise(resolve => {
          const spinner = cliSpinner(
            `Removing files from "${fileName}"`,
          ).start()

          remove(fileName, error => {
            if (error) {
              spinner.fail()
              resolve({ error })
            } else {
              spinner.succeed()
              resolve({ error: false })
            }
          })
        }),
    ),
  )) as ActionResult[]

  return actionResult
}

export default removeAction
