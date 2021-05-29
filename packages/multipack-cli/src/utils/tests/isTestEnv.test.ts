import isTestEnv from '../isTestEnv'

describe('isTestEnv', () => {
  it('Should return true because current script is running in test env', () => {
    expect(isTestEnv).toBeTruthy()
  })
})
