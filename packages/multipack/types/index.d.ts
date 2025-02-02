import { TMergeConfigs } from '@episclera/multipack-utils'
import { PrettierConfig } from '@episclera/prettier-config'
import { StylelintConfig } from '@episclera/stylelint-config'
import { JestConfig } from '@episclera/jest-config'
import { EslintConfig } from '@episclera/eslint-config'
import { WebpackConfigPart } from '@episclera/webpack-config'
import { CommitlintConfig } from '@episclera/commitlint-config'
import { PostcssConfig } from '@episclera/postcss-config'
import { TailwindConfig } from '@episclera/tailwind-config'
import { NextConfig } from '@episclera/next-config'
import { NextI18NextConfig } from '@episclera/next-i18next-config'
import { LintStagedConfig } from '@episclera/lint-staged-config'
import { CodeGenConfig } from '@episclera/codegen-config'
import { KnexConfig } from '@episclera/knex-config'
import { PM2Config } from '@episclera/pm2-config'

export interface Multipack {
  // prettier
  prettierConfig: PrettierConfig
  // stylelint
  stylelintConfig: StylelintConfig
  // commitlint
  commitlintConfig: CommitlintConfig
  // jest
  jestConfig: JestConfig
  // eslint
  eslintConfig: EslintConfig
  // postcss
  postcssConfig: PostcssConfig
  // tailwind
  tailwindConfig: TailwindConfig
  // webpack
  commonWebpackConfig: WebpackConfigPart
  packageWebpackConfig: WebpackConfigPart
  // next
  nextConfig: NextConfig
  nextI18NextConfig: NextI18NextConfig
  // lint-staged
  lintStagedConfig: LintStagedConfig
  // codegen
  codeGenConfig: CodeGenConfig
  // knex
  knexConfig: KnexConfig
  // pm2
  pm2Config: PM2Config
  // utils
  mergeConfigs: TMergeConfigs
}

// package exports
// prettier
export const prettierConfig: PrettierConfig
// stylelint
export const stylelintConfig: StylelintConfig
// commitlint
export const commitlintConfig: CommitlintConfig
// jest
export const jestConfig: JestConfig
// eslint
export const eslintConfig: EslintConfig
// postcss
export const postcssConfig: PostcssConfig
// tailwind
export const tailwindConfig: TailwindConfig
// webpack
export const commonWebpackConfig: WebpackConfigPart
export const packageWebpackConfig: WebpackConfigPart
// next
export const nextConfig: NextConfig
export const nextI18NextConfig: NextI18NextConfig
// lint-staged
export const lintStagedConfig: LintStagedConfig
// codegen
export const codeGenConfig: CodeGenConfig
// knex
export const knexConfig: KnexConfig
// pm2
export const pm2Config: PM2Config
// utils
export const mergeConfigs: TMergeConfigs

declare const multipack: Multipack

export default multipack
