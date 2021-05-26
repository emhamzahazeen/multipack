import initCli from '../initCli'
import pkg from '../../package.json'

describe('initCli', () => {
  it('Should return correct version', () => {
    const writeOut = jest.fn()

    expect(() => {
      initCli(['node', 'test', '-V'], {
        exitOverride: undefined,
        configureOutput: { writeOut },
      })
    }).toThrow(pkg.version)

    expect(writeOut).toHaveBeenCalledWith(`${pkg.version}\n`)
  })
})
