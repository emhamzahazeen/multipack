import { initCli } from '../index'

describe('multipackCli', () => {
  it.each([initCli])('Should correctly re-export: %s', pkg => {
    expect(pkg).toBeDefined()
  })
})
