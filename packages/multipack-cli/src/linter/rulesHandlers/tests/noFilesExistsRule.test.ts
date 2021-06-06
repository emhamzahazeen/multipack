import noFilesExistsRule from '../noFilesExistsRule'

describe('noFilesExistsRule', () => {
  it("Should return no errors if provided file doesn't exists", async () => {
    const ruleResult = await noFilesExistsRule({
      type: 'no-files-exists',
      name: 'no-access-file',
      description: 'test description',
      files: ['./unknownFile.txt'],
    })

    expect(ruleResult[0]).toHaveProperty('error', false)
    expect(ruleResult).toHaveLength(1)
  })

  it('Should return an error if provided file exists', async () => {
    const ruleResult = await noFilesExistsRule({
      type: 'no-files-exists',
      name: 'no-access-file',
      description: 'test description',
      files: [__filename],
    })

    expect(ruleResult[0]).toHaveProperty('error', expect.any(Error))
    expect(ruleResult).toHaveLength(1)
  })

  it('Should return correct error using description as a function', async () => {
    const ruleResult = await noFilesExistsRule({
      type: 'no-files-exists',
      name: 'no-access-file',
      description: ({ fileName }) => `Checking if "${fileName}" doesn't exists`,
      files: [__filename],
    })

    expect(ruleResult[0]).toHaveProperty(
      'error',
      new Error(
        `[no-files-exists/no-access-file] - Checking if "${__filename}" doesn't exists`,
      ),
    )
    expect(ruleResult).toHaveLength(1)
  })
})
