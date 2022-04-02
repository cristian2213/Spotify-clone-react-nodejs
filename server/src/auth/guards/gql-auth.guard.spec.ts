import { GraphqlAuthGuard } from './gql-auth.guard'

describe('GraphqlGuard', () => {
  it('should be defined', () => {
    expect(new GraphqlAuthGuard()).toBeDefined()
  })
})
