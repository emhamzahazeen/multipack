import { Generator } from '../../../types'

const packageGenerator: Generator = {
  prompts: [
    {
      type: 'select',
      name: 'packageName',
      message: 'What to create in the workspace (Use arrow keys)',
      choices: ['module', 'react', 'web', 'api', 'cli'],
    },
    {
      type: 'input',
      name: 'packageName',
      message: 'Package name (e.g, my-package)',
    },
    {
      type: 'input',
      name: 'packageDescription',
      message: 'Package description (e.g, Enjoyable library)',
    },
  ],
  actions: [],
}

export default packageGenerator
