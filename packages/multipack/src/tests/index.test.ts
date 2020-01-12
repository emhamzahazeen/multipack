import multipack from '../index'

describe('multipack', () => {
  it('should have properties', () => {
    expect(multipack).toHaveProperty('toNumber')
    expect(multipack).toHaveProperty('useCounter')
  })
})
