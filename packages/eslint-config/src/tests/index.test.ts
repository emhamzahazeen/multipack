import path from 'path'
import { ESLint } from 'eslint'
import eslintConfig from '../index'

const linter = new ESLint({
  cwd: path.resolve(__dirname, './../../'),
  resolvePluginsRelativeTo: path.resolve(__dirname, './../../node_modules/'),
  baseConfig: eslintConfig,
  useEslintrc: false,
})
describe('eslintConfig', () => {
  it('Should not return errors or warnings if provided code is formatted and written correctly', async () => {
    const code =
      "let a: number | string = 777\nif (a === 777) {\n  a = 'text'\n}\n"
    const res = await linter.lintText(code, { filePath: './src/index.ts' })

    expect(res?.[0]?.errorCount).toBe(0)
  })

  it('Should return errors or warnings if provided code is formatted and written incorrectly', async () => {
    const code = 'const a=777;let b: string[] = 777;'
    const res = await linter.lintText(code, { filePath: './src/index.ts' })

    expect(res?.[0]?.errorCount).toBeGreaterThan(0)
  })
})
