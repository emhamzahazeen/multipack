import path from 'path'
import { Generator } from '../../../types'
import getTemplatesDirPath from '../../utils/getTemplatesDirPath'

/* istanbul ignore next */
const workspaceGenerator: Generator = {
  prompts: [
    {
      type: 'input',
      name: 'workspaceName',
      required: true,
      message: 'Workspace name (e.g, my-workspace)',
    },
    {
      type: 'input',
      name: 'workspaceDescription',
      required: true,
      message: 'Workspace description (e.g, Enjoyable workspace)',
    },
  ],
  actions: [
    {
      type: 'copy',
      files: ({ workspaceName }) => ({
        [path.join(getTemplatesDirPath(), '/create/workspace/')]: path.join(
          process.cwd(),
          workspaceName,
        ),
      }),
    },
  ],
}

export default workspaceGenerator
