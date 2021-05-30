import { Generator } from '../../../types'

/* istanbul ignore next */
const packageGenerator: Generator = {
  prompts: [
    {
      type: 'select',
      name: 'packageName',
      required: true,
      message: 'What to create in the workspace (Use arrow keys)',
      choices: ['module', 'react', 'web', 'api', 'cli'],
    },
    {
      type: 'input',
      name: 'packageName',
      required: true,
      message: 'Package name (e.g, my-package)',
    },
    {
      type: 'input',
      name: 'packageDescription',
      required: true,
      message: 'Package description (e.g, Enjoyable library)',
    },
  ],
  actions: [],
}

export default packageGenerator
