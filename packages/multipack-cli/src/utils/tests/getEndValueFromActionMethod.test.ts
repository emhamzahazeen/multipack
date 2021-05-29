import getEndValueFromActionMethod from '../getEndValueFromActionMethod'
import { GeneratorAnswers } from '../../../types'

describe('getEndValueFromActionMethod', () => {
  it('Should return correct value', () => {
    const expectedValue = 'expectedValue'

    expect(getEndValueFromActionMethod(expectedValue, {})).toBe(expectedValue)
    expect(
      getEndValueFromActionMethod(
        ({ expectedValue: valueToReturn }: GeneratorAnswers) =>
          valueToReturn as string,
        { expectedValue },
      ),
    ).toBe(expectedValue)
  })
})
