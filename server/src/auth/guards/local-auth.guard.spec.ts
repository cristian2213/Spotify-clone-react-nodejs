import { LocalAuthGuard } from './local-auth.guard';

describe('GraphqlGuard', () => {
  it('should be defined', () => {
    expect(new LocalAuthGuard()).toBeDefined();
  });
});
