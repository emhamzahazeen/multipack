import { CommanderError, OutputConfiguration } from 'commander'
import Enquirer from 'enquirer'
import ora from 'ora'

// commands
export type TCreateCommand = (
  createType: string,
  mock?: boolean,
) => Promise<void>

// utils
export type TIsCWDWorkspaceRootFolder = () => boolean

export type TGetTemplatesDirPath = () => string

export type TGetEndValueFromActionMethod = (
  arg:
    | string
    | boolean
    | number
    | ((answers: GeneratorAnswers) => string | boolean | number),
  answers: GeneratorAnswers,
) => any

export interface Log {
  info: (message: string) => void
  error: (message: string) => void
  warning: (message: string) => void
  success: (message: string) => void
}

export type TCLISpinner = (message?: string) => ora.Ora

// generator
export interface GeneratorAnswers {
  [key: string]: any
}

export interface GeneratorBasePrompt {
  name: string | (() => string)
  type: string | (() => string)
  message: string | (() => string) | (() => Promise<string>)
  initial?: any
  required?: boolean
  format?(value: string): string | Promise<string>
  result?(value: string): string | Promise<string>
  skip?:
    | ((state: { [key: string]: any }) => boolean | Promise<boolean>)
    | boolean
  validate?(
    value: string,
  ): boolean | Promise<boolean> | string | Promise<string>
  onSubmit?(
    name: string,
    value: any,
    prompt: Enquirer.Prompt,
  ): boolean | Promise<boolean>
  onCancel?(
    name: string,
    value: any,
    prompt: Enquirer.Prompt,
  ): boolean | Promise<boolean>
  stdin?: NodeJS.ReadStream
  stdout?: NodeJS.WriteStream
}

export interface GeneratorInputPrompt extends GeneratorBasePrompt {
  type: 'input' | (() => 'input')
}

export interface GeneratorSelectPrompt extends GeneratorBasePrompt {
  type: 'select' | (() => 'select')
  choices: string[]
}

export type GeneratorPrompt = GeneratorInputPrompt | GeneratorSelectPrompt

export interface GeneratorCopyAction {
  type: 'copy'
  copyFrom: string | ((answers: GeneratorAnswers) => string)
  copyTo: string | ((answers: GeneratorAnswers) => string)
}

export interface GeneratorTransformTemplateAction {
  type: 'transformTemplate'
  transformTemplateData:
    | GeneratorAnswers
    | ((answers: GeneratorAnswers) => GeneratorAnswers)
}

export interface GeneratorRenameAction {
  type: 'rename'
  renameFiles:
    | {
        [key: string]: string
      }
    | ((answers: GeneratorAnswers) => {
        [key: string]: string
      })
}

export type GeneratorAction =
  | GeneratorCopyAction
  | GeneratorTransformTemplateAction
  | GeneratorRenameAction

export interface Generator {
  prompts?: GeneratorPrompt[]
  actions: GeneratorAction[]
}

// generator methods
export type TRunGenerator = (generator: Generator) => Promise<void>

export type TRunPrompts = (
  prompts: GeneratorPrompt[],
) => Promise<GeneratorAnswers>

export type TRunActions = (
  actions: GeneratorAction[],
  answers: GeneratorAnswers,
) => Promise<void>

// main
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
