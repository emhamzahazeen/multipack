import log from '../utils/log'
import { TRunActions, ActionResult } from '../../types'
import copyAction from './actionsHandlers/copyAction'

/**
 * Used to run generator actions
 * @param actions - array of actions to run
 * @param answers - responses from user
 */
/* istanbul ignore next */
const runActions: TRunActions = async (actions, answers) => {
  const actionsRunResults: ActionResult[] = []

  // eslint-disable-next-line no-restricted-syntax
  for (const action of actions) {
    if (action.type === 'copy') {
      // eslint-disable-next-line no-await-in-loop
      const actionResult = await copyAction(action, answers)
      actionsRunResults.push(...actionResult)
    }

    if (action.type === 'move') {
      log.warning(`move actions are not yet implemented in multipack-cli`)
    }

    if (action.type === 'transformTemplate') {
      log.warning(
        `transformTemplate actions are not yet implemented in multipack-cli`,
      )
    }

    if (action.type === 'rename') {
      log.warning(`rename actions are not yet implemented in multipack-cli`)
    }

    if (action.type === 'remove') {
      log.warning(`remove actions are not yet implemented in multipack-cli`)
    }

    if (action.type === 'modify') {
      log.warning(`modify actions are not yet implemented in multipack-cli`)
    }
  }

  if (actionsRunResults.every(({ error }) => !error)) {
    log.success('All generator actions passed with success')
  } else {
    log.error(
      `${actionsRunResults.filter(({ error }) => error)}/${
        actionsRunResults.length
      } generator actions failed`,
    )
  }
}

export default runActions
