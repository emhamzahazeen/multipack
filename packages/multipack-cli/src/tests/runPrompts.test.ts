import runPrompts from '../runPrompts'

jest.mock('enquirer', () => ({
  prompt: async () => {
    return Promise.resolve({
      workspaceName: 'my-workspace',
    })
  },
}))

describe('runPrompts', () => {
  it('Should return correct answers', async () => {
    const answers = await runPrompts([
      {
        type: 'input',
        message: 'Workspace name',
        name: 'workspaceName',
      },
    ])

    expect(answers).toEqual({ workspaceName: 'my-workspace' })
  })
})
