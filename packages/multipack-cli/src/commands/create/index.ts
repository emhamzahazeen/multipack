/* eslint-disable consistent-return */
import packageGenerator from './packageGenerator'
import workspaceGenerator from './workspaceGenerator'
import runGenerator from '../../generator/runGenerator'
import log from '../../utils/log'
import isCWDWorkspaceRootFolder from '../../utils/isCWDWorkspaceRootFolder'
import { TCreateCommand, Generator } from '../../../types'

/**
 * Commander action used to generate a "workspace" or "package"
 * @param createType - defines what you want to create "workspace" or "package"
 * @example
 * ```ts
 * createCommand('workspace')
 * ```
 */
const createCommand: TCreateCommand = async createType => {
  if (!['workspace', 'package'].includes(createType)) {
    log.error(
      `You can only use this command to create a new "${[
        'workspace',
        'package',
      ].join('" or "')}" but not "${createType}"`,
    )
    return
  }

  if (createType === 'package' && !isCWDWorkspaceRootFolder()) {
    log.error(
      'Current working directory is not a multipack workspace. Please run this command only in root folder of a multipack workspace.',
    )
    return
  }

  const createGenerators: { [key: string]: Generator } = {
    package: packageGenerator,
    workspace: workspaceGenerator,
  }

  await runGenerator(createGenerators[createType])
}

export default createCommand
