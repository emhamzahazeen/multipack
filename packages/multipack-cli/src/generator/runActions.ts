import log from '../utils/log'
import { TRunActions, ActionResult } from '../../types'
import copyAction from './actionsHandlers/copyAction'
import renameAction from './actionsHandlers/renameAction'
import moveAction from './actionsHandlers/moveAction'
import removeAction from './actionsHandlers/removeAction'
import modifyAction from './actionsHandlers/modifyAction'
import transformAction from './actionsHandlers/transformAction'
import execAction from './actionsHandlers/execAction'

/**
 * Used to run generator actions
 * @param actions - array of actions to run
 */
/* istanbul ignore next */
const runActions: TRunActions = async actions => {
  const actionsRunResults: ActionResult[] = []

  // eslint-disable-next-line no-restricted-syntax
  for (const action of actions) {
    let actionResult

    if (action.type === 'copy') {
      // eslint-disable-next-line no-await-in-loop
      actionResult = await copyAction(action)
    }

    if (action.type === 'move') {
      // eslint-disable-next-line no-await-in-loop
      actionResult = await moveAction(action)
    }

    if (action.type === 'rename') {
      // eslint-disable-next-line no-await-in-loop
      actionResult = await renameAction(action)
    }

    if (action.type === 'remove') {
      // eslint-disable-next-line no-await-in-loop
      actionResult = await removeAction(action)
    }

    if (action.type === 'modify') {
      // eslint-disable-next-line no-await-in-loop
      actionResult = await modifyAction(action)
    }

    if (action.type === 'transform') {
      // eslint-disable-next-line no-await-in-loop
      actionResult = await transformAction(action)
    }

    if (action.type === 'exec') {
      // eslint-disable-next-line no-await-in-loop
      actionResult = await execAction(action)
    }

    actionsRunResults.push(...(actionResult || []))
  }

  if (actionsRunResults.every(({ error }) => !error)) {
    log.success('All generator actions passed with success')
  } else if (actionsRunResults.every(({ error }) => error)) {
    actionsRunResults
      .filter(({ error }) => error)
      .forEach(({ error }) => log.error(error as Error))
    log.error(`All generator actions failed due these errors above!`)
  } else {
    actionsRunResults
      .filter(({ error }) => error)
      .forEach(({ error }) => log.error(error as Error))
    log.warning(`Some generator actions failed due these errors above!`)
  }
}

export default runActions
