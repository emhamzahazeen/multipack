import log from '../../log'
import { TCreateCommand } from '../../../types'

const createCommand: TCreateCommand = type => {
  if (!['workspace', 'package'].includes(type)) {
    log.error(
      `You can only use this command to create a new "${[
        'workspace',
        'package',
      ].join('" or "')}" but not "${type}"`,
    )
    return
  }
  // eslint-disable-next-line no-console
  log.warning(`At the moment is not possible to create any ${type}`)
}

export default createCommand
