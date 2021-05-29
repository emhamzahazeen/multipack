import path from 'path'
import { Generator } from '../../../types'
import getTemplatesDirPath from '../../utils/getTemplatesDirPath'

const workspaceGenerator: Generator = {
  prompts: [
    {
      type: 'input',
      name: 'workspaceName',
      message: 'Workspace name (e.g, my-workspace)',
    },
    {
      type: 'input',
      name: 'workspaceDescription',
      message: 'Workspace description (e.g, Enjoyable workspace)',
    },
  ],
  actions: [
    {
      type: 'copy',
      copyFrom: path.join(getTemplatesDirPath(), '/create/workspace/**/*'),
      copyTo: process.cwd(),
    },
  ],
}

export default workspaceGenerator
