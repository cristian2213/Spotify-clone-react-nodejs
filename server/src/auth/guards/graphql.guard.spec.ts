import { GraphqlGuard } from './gql-auth.guard';

describe('GraphqlGuard', () => {
  it('should be defined', () => {
    expect(new GraphqlGuard()).toBeDefined();
  });
});
