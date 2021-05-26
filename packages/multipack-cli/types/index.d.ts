import { CommanderError, OutputConfiguration } from 'commander'

// commands
export type TCreateCommand = (createType: string) => void

// utils
export interface Log {
  info: (message: string) => void
  error: (message: string) => void
  warning: (message: string) => void
  success: (message: string) => void
}

export type TInitCli = (
  args?: string[],
  override?: {
    exitOverride?: (err: CommanderError) => never | void
    configureOutput?: OutputConfiguration
  },
) => void

export interface MultipackCli {
  initCli: TInitCli
}

// package exports
export const initCli: TInitCli

declare const multipackCli: MultipackCli

export default multipackCli
