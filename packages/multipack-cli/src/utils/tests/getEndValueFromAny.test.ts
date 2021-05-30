import getEndValueFromAny from '../getEndValueFromAny'
import { GeneratorAnswers } from '../../../types'

describe('getEndValueFromAny', () => {
  it('Should return correct value', () => {
    const expectedValue = 'expectedValue'

    expect(getEndValueFromAny(expectedValue, {})).toBe(expectedValue)
    expect(
      getEndValueFromAny(
        ({ expectedValue: valueToReturn }: GeneratorAnswers) =>
          valueToReturn as string,
        { expectedValue },
      ),
    ).toBe(expectedValue)
  })
})
