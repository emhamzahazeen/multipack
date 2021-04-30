import { lint } from 'stylelint'
import stylelintConfig from '../index'

describe('stylelintConfig', () => {
  it('Should not return errors or warnings if provided code is formatted and written correctly', async () => {
    const res = await lint({
      code:
        '@property: color;\n@primary: blue;\n.a {\n  @{property}: @primary;\n}\n',
      codeFilename: 'index.less',
      syntax: 'less',
      config: stylelintConfig,
    })

    expect(res.errored).toBeFalsy()
  })

  it('Should return errors or warnings if provided code is formatted and written incorrectly', async () => {
    const res = await lint({
      code: '.a {\n  red: 21px;\n}\n',
      codeFilename: 'index.less',
      syntax: 'less',
      config: stylelintConfig,
    })

    expect(res.errored).toBeTruthy()
  })
})
