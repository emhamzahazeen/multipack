import noMatchRule from '../noMatchRule'

describe('noMatchRule', () => {
  it("Should return no errors if provided patterns doesn't match file content", async () => {
    const ruleResult = await noMatchRule({
      type: 'no-match',
      name: 'no-match-pattern',
      description: 'test description',
      patterns: [/^[0-9]alwaysNotMatchingPattern[0-9]$/],
      files: [__filename],
    })

    expect(ruleResult[0]).toHaveProperty('error', false)
    expect(ruleResult).toHaveLength(1)
  })

  it('Should return an error if provided patterns match file content', async () => {
    const ruleResult = await noMatchRule({
      type: 'no-match',
      name: 'no-match-pattern',
      description: 'test description',
      patterns: [/describe/],
      files: [__filename],
    })

    expect(ruleResult[0]).toHaveProperty('error', expect.any(Error))
    expect(ruleResult).toHaveLength(1)
  })

  it('Should return correct error using description as a function', async () => {
    const ruleResult = await noMatchRule({
      type: 'no-match',
      name: 'no-match-pattern',
      description: ({ notMatchingPatterns, fileName, patterns }) =>
        `Checking if ${fileName} doesn't match patterns "${patterns.map(
          pattern => pattern.source,
        )}". Found matching patterns "${notMatchingPatterns.map(
          pattern => pattern.source,
        )}"`,
      patterns: [/describe/],
      files: [__filename],
    })

    expect(ruleResult[0]).toHaveProperty(
      'error',
      new Error(
        `[no-match/no-match-pattern] - Checking if ${__filename} doesn't match patterns "describe". Found matching patterns "describe"`,
      ),
    )
    expect(ruleResult).toHaveLength(1)
  })

  it("Should return an error if provided files doesn't exists and can not read content from it", async () => {
    const ruleResult = await noMatchRule({
      type: 'no-match',
      name: 'no-match-pattern',
      description: 'test description',
      patterns: [/^[0-9]alwaysNotMatchingPattern[0-9]$/],
      files: ['./unknownFile.txt'],
    })

    expect(ruleResult[0]).toHaveProperty('error')
    expect(ruleResult).toHaveLength(1)
  })
})
