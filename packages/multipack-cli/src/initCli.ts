import { program } from 'commander'
import createCommand from './commands/create'
import { TInitCli } from '../types'
import pkg from '../package.json'

const initCli: TInitCli = (args = process.argv, override) => {
  if (override) {
    if ('exitOverride' in override) {
      program.exitOverride(override.exitOverride)
    }
    if (override.configureOutput) {
      program.configureOutput(override.configureOutput)
    }
  }

  program.version(pkg.version)

  program
    .command('create <type>')
    .description(
      'Creates a multipack workspace or a package in an existent multipack workspace',
    )
    .action(createCommand)

  program.parse(args)
}

export default initCli
