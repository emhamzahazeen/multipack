import { src, dest } from 'gulp'
import { TRunActions } from '../types'
import cliSpinner from './utils/cliSpinner'
import log from './utils/log'
import getEndValueFromActionMethod from './utils/getEndValueFromActionMethod'

/**
 * Used to run generator actions
 * @param actions - array of actions to run
 * @param answers - responses from user
 */
/* istanbul ignore next */
const runActions: TRunActions = async (actions, answers) => {
  const actionsToRun: (() => Promise<{ success: boolean }>)[] = []

  actions.forEach(rawAction => {
    if (rawAction.type === 'copy') {
      actionsToRun.push(
        async () =>
          new Promise(resolve => {
            const copyFrom = getEndValueFromActionMethod(
              rawAction.copyFrom,
              answers,
            ) as string
            const copyTo = getEndValueFromActionMethod(
              rawAction.copyTo,
              answers,
            ) as string

            const copySpinner = cliSpinner('Copying files')
            copySpinner.start()
            src(copyFrom)
              .pipe(dest(copyTo))
              .on('end', () => {
                copySpinner.succeed()
                resolve({ success: true })
              })
              .on('error', () => {
                copySpinner.fail()
                resolve({ success: true })
              })
          }),
      )
    }
  })

  const actionsRunResults = []
  // eslint-disable-next-line no-restricted-syntax
  for (const actionFn of actionsToRun) {
    // eslint-disable-next-line no-await-in-loop
    const actionRunResult = await actionFn()
    actionsRunResults.push(actionRunResult)
  }

  if (actionsRunResults.every(({ success }) => success)) {
    log.success('All generator actions passed with success')
  } else {
    log.error(
      `${actionsRunResults.filter(({ success }) => !success)}/${
        actionsRunResults.length
      } generator actions failed`,
    )
  }
}

export default runActions
