import path from 'path'
import getTemplatesDirPath from '../getTemplatesDirPath'

describe('getTemplatesDirPath', () => {
  it('Should return correct path to templates dir if ENV is test', () => {
    expect(getTemplatesDirPath()).toBe(
      path.join(__dirname, '../../../templates/'),
    )
  })

  it('Should return correct path to templates dir if ENV is other than test', () => {
    process.env.NODE_ENV = 'production'

    expect(getTemplatesDirPath()).toBe(path.join(__dirname, '../../templates/'))
    // reset process.env.NODE_ENV
    process.env.NODE_ENV = 'test'
  })
})
