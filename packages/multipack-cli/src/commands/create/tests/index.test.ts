import createCommand from '../index'

describe('createCommand', () => {
  it('Should log an error if createType is incorrect', () => {
    const spy = jest.spyOn(console, 'log')

    createCommand('test')

    expect(spy.mock.calls[0][0]).toMatch('Error')
  })

  it('Should log an warning if createType is correct', () => {
    const spy = jest.spyOn(console, 'log')

    createCommand('workspace')
    createCommand('package')

    expect(spy.mock.calls[1][0]).toMatch('Warning')
    expect(spy.mock.calls[2][0]).toMatch('Warning')
  })
})
