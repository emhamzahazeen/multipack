import log from '../log'

describe('log', () => {
  it('Should log correct all message types', () => {
    const spy = jest.spyOn(console, 'log')
    const message = 'test message from multipack-cli'
    log.info(message)
    log.error(message)
    log.warning(message)
    log.success(message)

    expect(spy.mock.calls[0][0]).toMatch(`Info: ${message}`)
    expect(spy.mock.calls[1][0]).toMatch(`Error: ${message}`)
    expect(spy.mock.calls[2][0]).toMatch(`Warning: ${message}`)
    expect(spy.mock.calls[3][0]).toMatch(`Success: ${message}`)
  })
})
